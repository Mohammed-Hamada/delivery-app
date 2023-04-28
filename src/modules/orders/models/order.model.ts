import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Delivery } from 'src/modules/deliveries/models/delivery.model';
import { User } from 'src/modules/users/models/user.model';

@Table
export class Order extends Model<Order> {
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
}
