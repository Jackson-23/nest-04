import { Item } from "src/items/entities/item.entity";

export class Category {
    id: String;
    name: String;
    items?: Item[];
    created_at?: Date;
    updated_at?: Date;
}