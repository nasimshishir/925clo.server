import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './entities/user.entity';
import { EmailToken } from './entities/email-verification-token.entity';
import { UserInteractions } from '../user-interactions/entities/inreractions.entity';
import { Wishlist } from './entities/wishlist.entity';
import { ProductsService } from 'src/products/products.service';
import { Products } from 'src/products/entities/product.entity';
import { ProductTypes } from 'src/products/entities/type.entity';
import { ProductBrands } from 'src/products/entities/product-brand.entity';
import { Colors } from 'src/products/entities/color.entity';
import { Sizes } from 'src/products/entities/size.entity';
import { Occasions } from 'src/products/entities/occasion.entity';
import { Seasons } from 'src/products/entities/season.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, EmailToken])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
