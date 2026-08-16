import type { Category } from "./Category.model";

export interface Question {
  name: string;
  statement: string;
  category: Category;
}
