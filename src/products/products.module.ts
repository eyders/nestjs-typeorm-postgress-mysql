import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './products.controller';
import { BrandsController } from './brands.controller';
import { CategoriesController } from './categories.controller';
import { ProductsService } from './products.service';
import { BrandsService } from './brands.service';
import { CategoriesService } from './categories.service';
import { Product } from './entities/product.entity';
import { Brand } from './brand.entity';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category])],
  controllers: [ProductsController, BrandsController, CategoriesController],
  providers: [ProductsService, BrandsService, CategoriesService],
  exports: [ProductsService, TypeOrmModule],
})
export class ProductsModule {}
