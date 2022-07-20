import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}

  //Buscar todos os itens
  findAll(): Promise<Item[]> {
    return this.prisma.item.findMany();
  }

  //Busca Item por Id com tratamento de erro
  async findByIdTry(id: string): Promise<Item> {
    const record = await this.prisma.item.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException('Register ' + id + ' not found');
    }
    return record;
  }

  //Buscar Item por ID
  findById(id: string) {
    return this.findByIdTry(id);
  }

  //Criar novo Item
  async create(dto: CreateItemDto) {
    return this.prisma.item.create({data: dto}).catch(handleError);
  }

  //Deletar item por ID
  async delete(id: string) {
    console.log("AQUIII " + id);
    await this.findByIdTry(id);
    return this.prisma.item.delete({ where: { id } });
  }

  //Alterar dados de item por ID
  async update(id: string, dto: UpdateItemDto)/*: Promise<Item>*/ {
    await this.findByIdTry(id);

    const data: Prisma.ItemUpdateInput = {

    }

    /*return this.prisma.item
      .update({ where: { id }, data:dto })
      .catch(handleError);*/
  }
}
