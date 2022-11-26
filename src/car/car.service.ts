import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { ClientService } from 'src/client/client.service';
import { PaginationQuery } from 'src/db/dto/pagination.dto';
import { ServiceService } from 'src/service/service.service';
import { AddCarDto, CarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarService {
  constructor(
    @Inject('PG_CONNECTION')
    private readonly db: Pool,
    private readonly clientService: ClientService,
    private readonly serviceService: ServiceService
  ) {}
  
  async getMany(query: PaginationQuery): Promise<CarDto[]> {
    const { page = 1, limit = 20, clientId = null, orderField, orderType } = query

    return await this.db
      .query(
        `SELECT * FROM cars
        ${clientId ? `WHERE client_id = '${clientId}'` : ''}
        ORDER BY ${orderField} ${orderType}
        LIMIT ${limit} OFFSET ${limit * (page - 1)}`,
      )
      .then(res => res.rows)
  }

  async getOne(id: number): Promise<CarDto> {
    const car = await this.db
      .query('SELECT * FROM cars WHERE id = $1', [id])
      .then(res => res.rows[0]) || null

    if (!car) {
      throw new HttpException('Car is not found', HttpStatus.NOT_FOUND)
    }

    const fines = await this.serviceService.getFines()
    const parkings = await this.serviceService.getParkings()
    const petrolStations = await this.serviceService.getPetrolStations()

    return { ...car, fines, parkings, petrolStations }
  }

  async getOneByVin(vin: string): Promise<CarDto> {
    return await this.db
      .query('SELECT * FROM cars WHERE vin = $1', [vin])
      .then(res => res.rows[0]) || null
  }

  async insert(data: AddCarDto): Promise<CarDto> {
    const { vin, model, licensePlate, fuelLevel, longitude, latitude, client_id } = data
    const position = JSON.stringify({ longitude, latitude })
    
    const isExist = await this.getOneByVin(vin)
    if (isExist) {
      throw new HttpException('This car is already exist', HttpStatus.CONFLICT)
    }
    await this.clientService.getOne(client_id)
    
    return await this.db
      .query(
        `INSERT INTO cars(vin, model, license_plate, fuel_level, position, client_id)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [vin, model, licensePlate, fuelLevel, position, client_id]
      )
      .then(res => res.rows[0])
  }

  async update(id: number, data: UpdateCarDto): Promise<CarDto> {
    const { longitude, latitude, client_id } = data
    const position = JSON.stringify({ longitude, latitude })
    delete data.longitude
    delete data.latitude

    const car = await this.getOne(id)
    await this.clientService.getOne(client_id)

    const fields = Object.entries(data).map(([key, value]) => `${key} = '${value}'`)
    longitude && latitude ? fields.push(`position = '${position}'`) : null

    return await this.db
      .query(`UPDATE cars SET modified_at = NOW(), ${fields} WHERE id = '${car.id}' RETURNING *`)
      .then(res => res.rows[0])
  }

  async remove(id: number): Promise<void> {
    const car = await this.getOne(id)
    await this.db.query('DELETE FROM cars WHERE id = $1', [car.id])
  }
}
