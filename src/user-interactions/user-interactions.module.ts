import { Module } from '@nestjs/common';
import { UserInteractionsService } from './user-interactions.service';
import { UserInteractionsController } from './user-interactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/products/entities/product.entity';
import { ProductBrands } from 'src/products/entities/product-brand.entity';
import { Colors } from 'src/products/entities/color.entity';
import { Sizes } from 'src/products/entities/size.entity';
import { Occasions } from 'src/products/entities/occasion.entity';
import { Seasons } from 'src/products/entities/season.entity';
import { ProductTypes } from 'src/products/entities/type.entity';
import { Users } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';
import { EmailToken } from 'src/users/entities/email-verification-token.entity';
import { UserInteractions } from './entities/inreractions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserInteractions, Users, EmailToken, Products, ProductBrands, Colors, Sizes, Occasions, Seasons, ProductTypes])],
  controllers: [UserInteractionsController],
  providers: [UserInteractionsService, UsersService, ProductsService]
})
export class UserInteractionsModule { }
