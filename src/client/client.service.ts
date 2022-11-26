import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { ClientDto } from './dto';

@Injectable()
export class ClientService {
  constructor(
    @Inject('PG_CONNECTION')
    private readonly db: Pool
  ) {}

  async getOne(id: number): Promise<ClientDto> {
    const client = await this.db
      .query('SELECT * FROM clients WHERE id = $1', [id])
      .then(res => res.rows[0]) || null

    if (!client) {
      throw new HttpException('Client is not found', HttpStatus.NOT_FOUND)
    }

    return client
  }
}
