import { Item } from "@prisma/client";

export class Pedido {
    id: String;
    userId: String;
    items: Item;
}