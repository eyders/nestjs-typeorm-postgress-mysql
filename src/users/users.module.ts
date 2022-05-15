import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CustomerController } from './customer.controller';
import { CustomersService } from './customers.service';
import { User } from './entities/user.entity';
import { Customer } from './entities/customer.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderItemService } from './order-item.service';
import { OrderItemController } from './order-item.controller';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([User, Customer, Order, OrderItem])],
  controllers: [
    UsersController,
    CustomerController,
    OrdersController,
    OrderItemController,
  ],
  providers: [UsersService, CustomersService, OrdersService, OrderItemService],
})
export class UsersModule {}
