import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { DbModule } from 'src/db/db.module';
import { ClientService } from 'src/client/client.service';
import { ServiceService } from 'src/service/service.service';

@Module({
  imports: [DbModule],
  controllers: [CarController],
  providers: [CarService, ClientService, ServiceService],
})
export class CarModule {}
