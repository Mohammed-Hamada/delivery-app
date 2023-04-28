import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from 'src/modules/users/models/user.model';
import { Notification } from './notification.model';

@Table
export class NotificationRecipient extends Model<NotificationRecipient> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Notification)
  @Column
  notificationId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Notification)
  notification: Notification;
}
