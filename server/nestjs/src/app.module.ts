import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
  ],
})
export class AppModule {}
