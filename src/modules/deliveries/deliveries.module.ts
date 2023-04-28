import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Delivery } from './models/delivery.model';

@Module({
  imports: [SequelizeModule.forFeature([Delivery])],
  controllers: [DeliveriesController],
  providers: [DeliveriesService],
})
export class DeliveriesModule {}
