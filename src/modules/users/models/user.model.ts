import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Delivery } from 'src/modules/deliveries/models/delivery.model';
import { NotificationRecipient } from 'src/modules/notifications/models/notification-recipient.model';
import { Notification } from 'src/modules/notifications/models/notification.model';
import { Order } from 'src/modules/orders/models/order.model';

@Table
export class User extends Model<User> {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING(50), allowNull: false })
  email: string;

  @Column({ type: DataType.STRING(50), allowNull: false })
  password: string;

  @Column({
    type: DataType.ENUM('manager', 'deliverer', 'client'),
    allowNull: false,
  })
  role: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  phone: string;

  @Column({ type: DataType.TEXT })
  profileImage: string;

  @Column({ type: DataType.STRING(50) })
  address: string;

  @HasMany(() => Order)
  orders: Order[];

  @HasMany(() => Delivery)
  deliveries: Delivery[];

  @HasMany(() => Notification)
  notifications: Notification[];

  @HasMany(() => NotificationRecipient)
  notification_recipients: NotificationRecipient[];
}
