import { LessonDocument } from "~/lessons/schema/lesson.schema";

export interface PaginatedProducts {
  products: LessonDocument[];
  pages: number;
  page: number;
}
