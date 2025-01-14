import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { LessonsService } from '../services/lessons.service';
import { CreateLessonDto } from '../dto/create-lesson.dto';
import { UpdateLessonDto } from '../dto/update-lesson.dto';
import { Request } from 'express';

@Controller('lessons')
export class LessonsController {

  constructor(private readonly lessonsService: LessonsService) { }

  // @Post()
  // create(@Body() createLessonDto: CreateLessonDto) {
  //   return this.lessonsService.create(createLessonDto);
  // }

  @Get()
  getPaginatedLesson(
    @Query('keyword') keyword: string,
    @Query('pageId') pageId: string
  ) {
    return this.lessonsService.findMany(keyword, pageId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.lessonsService.findOne(+id);
  // }

  // @Get(':id/vocabularys')
  // findAllVocabularyByLesson(@Param('id') id: string) {
  //   return this.lessonsService.findAllVocabulary(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
  //   return this.lessonsService.update(+id, updateLessonDto);
  // }

  // @Patch(':id')
  // updateVocabularyByLesson(
  //   @Param('id') id: string,
  //   @Param('idvocab') idvocab: string,
  //   @Body() updateLessonDto: UpdateLessonDto,
  // ) {
  //   return this.lessonsService.updateVocabulary(+id, +idvocab, updateLessonDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.lessonsService.remove(+id);
  // }

  // @Delete(':id')
  // removeVocabularyByLesson(
  //   @Param('id') id: string,
  //   @Param('idvocab') idvocab: string,
  // ) {
  //   return this.lessonsService.removeVocabulary(+id, +idvocab);
  // }
}
