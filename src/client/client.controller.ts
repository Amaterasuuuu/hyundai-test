import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { ClientService } from './client.service';
import { ClientDto } from './dto';

@Controller('client')
export class ClientController {
  constructor(private readonly service: ClientService) {}

  @Get('/:id')
  @ApiOkResponse({ type: ClientDto })
  @ApiNotFoundResponse({ description: 'Client is not found' })
  async getOne(@Param('id') id: number): Promise<ClientDto> {
    return await this.service.getOne(id)
  }
}
