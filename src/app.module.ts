import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import ormConfig from 'ormconfig';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { EmailModule } from './email/email.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot(ormConfig),
    UsersModule,
    AuthModule,
    ProductsModule,
    EmailModule,
    UserProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
