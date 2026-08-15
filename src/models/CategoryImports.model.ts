import type { Category } from "./Category.model";
import type { ImportItem } from "./ImportItem.model";

export type CategoryImports = Record<
  Category,
  {
    name: string;
    imports: ImportItem[];
  }
>;
