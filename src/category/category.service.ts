import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  //Buscar todos os itens
  findAll() /*: Promise<Category[]>*/ {
    return this.prisma.category.findMany();
  }

  //Busca Item por Id com tratamento de erro
  async findByIdTry(id: string) /*: Promise < Category >*/ {
    const record = await this.prisma.category.findUnique({ where: { id } });
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
  create(dto: CreateCategoryDto) {
    return this.prisma.category.create({ data: dto }).catch(handleError);
  }

  //Deletar item por ID
  async delete(id: string) {
    await this.findByIdTry(id);
    return this.prisma.category.delete({ where: { id } });
  }

  //Alterar dados de item por ID
  async update(id: string, dto: UpdateCategoryDto) {
    await this.findByIdTry(id);

    //const data: Partial<Category> = {...dto}
    return this.prisma.category
      .update({ where: { id }, data: dto })
      .catch(handleError);
  }
}
