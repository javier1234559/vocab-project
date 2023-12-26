import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LessonsModule } from './lessons/lessons.module';
import { CommonModule } from '~/common/common.module';
import { AuthModule } from '~/auth/auth.module';

@Module({
  imports: [
    CommonModule,
    UsersModule,
    LessonsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
