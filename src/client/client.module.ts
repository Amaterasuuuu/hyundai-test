import { Module } from '@nestjs/common';
import { CarModule } from 'src/car/car.module';
import { CarService } from 'src/car/car.service';
import { DbModule } from 'src/db/db.module';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  imports: [DbModule],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
