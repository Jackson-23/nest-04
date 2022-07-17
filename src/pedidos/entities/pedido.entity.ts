import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';

export class Pedido {
  id?: string;
  user?: User;
  items?: Item[];
  created_at?: Date;
  updated_at?: Date;
}
