import type { Category } from "./Category.model";

export interface QuestionAnswer {
  name: string;
  statement: string;
  category: Category;
}
