import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PaginationQuery } from 'src/db/dto/pagination.dto';
import { CarService } from './car.service';
import { AddCarDto, CarDto, UpdateCarDto } from './dto';

@ApiTags('Cars')
@Controller('car')
export class CarController {
  constructor(private readonly service: CarService) {}

  @Get()
  @ApiOkResponse({ type: [CarDto] })
  async getMany(@Query() query: PaginationQuery): Promise<CarDto[]> {
    return await this.service.getMany(query)
  }

  @Get('/:id')
  @ApiOkResponse({ type: CarDto })
  @ApiNotFoundResponse({ description: 'Car is not found' })
  async getOne(@Param('id') id: number): Promise<CarDto> {
    return await this.service.getOne(id)
  }

  @Post()
  @ApiOkResponse({ type: CarDto })
  @ApiNotFoundResponse({ description: 'Client is not defined' })
  @ApiConflictResponse({ description: 'This car is already exist' })
  async insert(@Body() data: AddCarDto): Promise<CarDto> {
    return await this.service.insert(data)
  }

  @Put('/:id')
  @ApiOkResponse({ type: CarDto })
  @ApiNotFoundResponse({ description: 'Car or client is not found' })
  async update(
    @Param('id') id: number,
    @Body() data: UpdateCarDto
  ): Promise<CarDto> {
    return await this.service.update(id, data)
  }

  @Delete('/:id')
  @HttpCode(204)
  @ApiNoContentResponse()
  @ApiNotFoundResponse({ description: 'Car is not found' })
  async remove(@Param('id') id: number): Promise<void> {
    return await this.service.remove(id)
  }
}
