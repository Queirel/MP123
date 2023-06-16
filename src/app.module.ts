import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [  UsersModule,
    ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME, 
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
    port: +process.env.DB_PORT,
    autoLoadEntities: true,
    synchronize: true
  }),
  ProductsModule,
  AuthModule,
  ],

})
export class AppModule {}
