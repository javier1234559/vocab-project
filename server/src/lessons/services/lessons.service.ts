import { HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from '../dto/create-lesson.dto';
import { UpdateLessonDto } from '../dto/update-lesson.dto';
import { Model, Types } from 'mongoose';
import { Lesson, LessonDocument } from '~/lessons/schema/lesson.schema';
import { InjectModel } from '@nestjs/mongoose';
import { PaginatedProducts } from '~/common/inteface';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name)
    private lessonModel: Model<LessonDocument>
  ) { }

  async findMany(
    keyword?: string,
    pageId?: string
  ): Promise<PaginatedProducts> {
    const pageSize = 2;
    const page = parseInt(pageId) || 1;

    const rgex = keyword ? { name: { $regex: keyword, $options: 'i' } } : {};

    const count = await this.lessonModel.countDocuments({ ...rgex });
    const products = await this.lessonModel
      .find({ ...rgex })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return { products, page, pages: Math.ceil(count / pageSize) };
  }

  // async create(createLessonDto: CreateLessonDto) {
  //   const createLesson = new this.lessonModel({
  //     ...createLessonDto,
  //     total: createLessonDto.vocabularies.length,
  //     created_by: '656090c66ce502edc28e6aae',
  //   });
  //   const saved = await createLesson.save();
  //   return new ResponseCustomData(
  //     saved._id,
  //     'Create new lesson successfully',
  //     HttpStatus.CREATED,
  //   );
  // }

  // async findAll() {
  // const userId = '656090c66ce502edc28e6aae';
  // const listPreviewLesson = await this.lessonModel.find({
  //   created_by: new Types.ObjectId(userId),
  // }).exec();

  //   const listWithPreviewImages = await Promise.all(
  //     listPreviewLesson.map(async (lesson) => {
  //       const vocabularies = lesson.vocabularies || [];
  //       const previewImage =
  //         vocabularies.length > 0 ? vocabularies[0].image_url || '' : '';

  //       const lessonWithPreviewImage = {
  //         _id: lesson._id,
  //         created_by: lesson.created_by,
  //         name: lesson.name,
  //         description: lesson.description,
  //         star: lesson.star,
  //         total: lesson.total,
  //         is_public: lesson.is_public,
  //         created_at: lesson.createdAt,
  //         updated_at: lesson.updatedAt,
  //         previewImage: previewImage,
  //       };

  //       return lessonWithPreviewImage;
  //     }),
  //   );

  //   return new ResponseCustomData(
  //     listWithPreviewImages,
  //     'Find lessons successfully',
  //     HttpStatus.FOUND,
  //   );
  // }

  // async findOne(id: number) {
  //   const lessson = await this.lessonModel.findById({
  //     _id: new Types.ObjectId(id),
  //   });
  //   return new ResponseCustomData(
  //     lessson,
  //     'Find lessons successfully',
  //     HttpStatus.FOUND,
  //   );
  // }

  // findAllVocabulary(lessonid: number) {
  //   return `This action returns a #${lessonid} lesson with all vocab`;
  // }

  // update(id: number, updateLessonDto: UpdateLessonDto) {
  //   return `This action updates a #${id} lesson`;
  // }

  // updateVocabulary(
  //   id: number,
  //   idvocab: number,
  //   updateLessonDto: UpdateLessonDto,
  // ) {
  //   return `This action updates a #${id} lesson`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} lesson`;
  // }

  // removeVocabulary(id: number, idvocab: number) {
  //   return `This action removes a #${id} lesson ${idvocab}`;
  // }
}
