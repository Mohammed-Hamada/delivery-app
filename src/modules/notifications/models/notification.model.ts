import {
  Table,
  Model,
  HasMany,
  ForeignKey,
  Column,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Delivery } from 'src/modules/deliveries/models/delivery.model';
import { User } from 'src/modules/users/models/user.model';
import { NotificationRecipient } from './notification-recipient.model';

@Table
export class Notification extends Model<Notification> {
  @Column({ type: DataType.TEXT, allowNull: false })
  message: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Delivery)
  @Column
  deliveryId: number;

  @BelongsTo(() => Delivery)
  delivery: Delivery;

  @HasMany(() => NotificationRecipient)
  notification_recipients: NotificationRecipient[];
}
