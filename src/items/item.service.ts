import {Get, Injectable, NotFoundException, Param, UnprocessableEntityException} from '@nestjs/common';
import {CreateItemDto} from './dto/create-item.dto';
import { Item } from './entities/item.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateItemDto } from './dto/update-item.dto';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class ItemService {
    

    constructor(private readonly prisma: PrismaService){}

    //Buscar todos os itens
    findAll(): Promise<Item[]>{
        return this.prisma.item.findMany();
    }

    //Busca Item por Id com tratamento de erro
    async findByIdTry(id: string): Promise < Item >{
        const record = await this.prisma.item.findUnique({ where: {id}});
        if(!record){
            throw new NotFoundException("Register " + id + " not found");
        }
        return record;
    }

    //Buscar Item por ID
    findById(id: string){
        return this.findByIdTry(id);
    }

    //Criar novo Item
    create(dto: CreateItemDto) {
        return this.prisma.item.create({ data: dto }).catch(handleError);
    }

    //Deletar item por ID
    async delete(id: string) {
        await this.findByIdTry(id);
        return this.prisma.item.delete({where: {id}});
    }

    //Alterar dados de item por ID
    async update(id: string, dto: UpdateItemDto) {
        await this.findByIdTry(id);

        //const data: Partial<Item> = {...dto}
        return this.prisma.item.update({where: {id}, data: dto}).catch(handleError);
    }


}