import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsPositive()
  @IsNotEmpty()
  readonly customerId: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
