import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({ timestamps: true })
export class Vocabulary {
  @Prop()
  index: number;

  @Prop()
  front_text: string;

  @Prop()
  back_text: string;

  @Prop({ required: false })
  image_url?: string;

  @Prop({ required: false })
  sound_url?: string;

  @Prop([String])
  example?: string[];

  @Prop()
  is_star: boolean;

  @Prop([String])
  tag: string[];

  @Prop()
  is_remind: boolean;

  @Prop()
  memory_level: 'NEW' | 'FORGOT' | 'REMEMBER';
}

export const VocabularySchema = SchemaFactory.createForClass(Vocabulary);

export type LessonDocument = Lesson & Document;

@Schema({ timestamps: true })
export class Lesson {
  @Prop()
  name: string;

  @Prop({ required: false })
  description?: string;

  @Prop()
  star: number;

  @Prop()
  total: number;

  @Prop([VocabularySchema])
  vocabularies: Vocabulary[];

  @Prop()
  is_public: boolean;

  @Prop()
  created_by: mongoose.Types.ObjectId;

  @Prop([mongoose.Types.ObjectId])
  receivers?: mongoose.Types.ObjectId[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
