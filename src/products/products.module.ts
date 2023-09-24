import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBrands } from './entities/product-brand.entity';
import { Colors } from './entities/color.entity';
import { Sizes } from './entities/size.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products, ProductBrands, Colors, Sizes])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
