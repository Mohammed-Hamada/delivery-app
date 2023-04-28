import {
  Table,
  Column,
  Model,
  HasMany,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Notification } from 'src/modules/notifications/models/notification.model';
import { Order } from 'src/modules/orders/models/order.model';
import { User } from 'src/modules/users/models/user.model';

@Table
export class Delivery extends Model<Delivery> {
  @Column({ type: DataType.STRING, allowNull: false })
  pickupAddress: string;

  @Column({ type: DataType.DECIMAL(10, 8), allowNull: false })
  pickupLatitude: string;

  @Column({ type: DataType.DECIMAL(11, 8), allowNull: false })
  pickupLongitude: string;

  @Column({ type: DataType.STRING, allowNull: false })
  dropoffAddress: string;

  @Column({ type: DataType.DECIMAL(10, 8), allowNull: false })
  dropoffLatitude: string;

  @Column({ type: DataType.DECIMAL(11, 8), allowNull: false })
  dropoffLongitude: string;

  @HasMany(() => Notification)
  notifications: Notification[];

  @HasMany(() => Order)
  orders: Order[];

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
