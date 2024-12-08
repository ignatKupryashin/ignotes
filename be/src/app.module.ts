import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: process.env.DB_TYPE as any, // Приводим тип к строке для TypeORM
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Не используйте в продакшене
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
