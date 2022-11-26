import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { ClientModule } from './client/client.module';
import { DbModule } from './db/db.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [DbModule, CarModule, ClientModule, ServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
