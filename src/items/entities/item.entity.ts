import { Category } from "src/category/entities/category.entity";

export class Item {
  id: string;
  name: string;
  category?: string;
  description?: string;
  imgUrl?: string;
  imdScore?: number;
  duration?: number;
  created_at?: Date;
  updated_at?: Date;
}
