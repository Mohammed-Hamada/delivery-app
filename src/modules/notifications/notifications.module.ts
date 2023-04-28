import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { Notification } from './models/notification.model';
import { NotificationRecipient } from './models/notification-recipient.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Notification, NotificationRecipient])],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
