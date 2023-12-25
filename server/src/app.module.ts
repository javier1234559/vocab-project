import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LessonsModule } from './lessons/lessons.module';
import { CommonModule } from '~/common/common.module';
import { SeedsModule } from '~/common/seeds/seed.module';

@Module({
  imports: [
    CommonModule,
    UsersModule,
    LessonsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
