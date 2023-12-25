import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({timestamps: true})
export class User {
  @Prop({ required: false, unique: true })
  uid: String;

  @Prop({ required: true, unique: true })
  email: String;

  @Prop({ required: true })
  password: String;

  @Prop({ required: true, unique: true })
  nick_name: String;

  @Prop({ required: false })
  age: Number;

  @Prop({ required: false })
  gender: String;

  @Prop({
    required: false,
    default:
      'https://drive.google.com/uc?id=1Dp7JlD7y6v96Ve3O9hxPkUR0mmMhPBmW&export=download',
  })
  avatar: String;

  @Prop({ required: false })
  streak: Number;

  @Prop({ required: false, default: 0 })
  rank: Number;

  @Prop({ required: false, default: 0 })
  score: Number;

  @Prop({ required: false, default: 0 })
  level: Number;

  @Prop({ required: true, default: false })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);