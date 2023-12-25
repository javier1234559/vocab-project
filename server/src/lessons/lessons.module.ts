import { Module } from '@nestjs/common';
import { LessonsService } from './services/lessons.service';
import { LessonsController } from './controller/lessons.controller';
import { Lesson, LessonSchema } from '~/lessons/schema/lesson.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Lesson.name,
        schema: LessonSchema,
      },
    ]),
  ],
  controllers: [LessonsController],
  providers: [
    LessonsService,
  ],
})
export class LessonsModule { }
