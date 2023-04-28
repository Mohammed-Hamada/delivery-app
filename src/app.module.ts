import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DeliveriesModule } from './modules/deliveries/deliveries.module';
import { OrdersModule } from './modules/orders/orders.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

import { User } from './modules/users/models/user.model';
import { Delivery } from './modules/deliveries/models/delivery.model';
import { Order } from './modules/orders/models/order.model';
import { Notification } from './modules/notifications/models/notification.model';
import { NotificationRecipient } from './modules/notifications/models/notification-recipient.model';

config();

const sequelizeConfig = {
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME_DEVELOPMENT,
  models: [User, Delivery, Order, Notification, NotificationRecipient],
  define: {
    defaultScope: {
      attributes: {
        exclude: ['updatedAt', 'createdAt'],
      },
    },
  },
};

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot(sequelizeConfig),
    DeliveriesModule,
    OrdersModule,
    NotificationsModule,
  ],
  providers: [],
})
export class AppModule {}
