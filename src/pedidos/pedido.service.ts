import {Get, Injectable, NotFoundException, Param, UnprocessableEntityException} from '@nestjs/common';
import {CreateTableDto} from './dto/create-pedido.dto';
import { Table } from './entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateTableDto } from './dto/update-pedido.dto';

@Injectable()
export class TableService {
    

    constructor(private readonly prisma: PrismaService){}

    //Buscar todos os itens
    findAll(): Promise<Table[]>{
        return this.prisma.item.findMany();
    }

    //Busca Item por Id com tratamento de erro
    async findByIdTry(id: string): Promise <Table>{
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
    create(dto: CreateTableDto) {
        return this.prisma.item.create({ data: dto }).catch(this.handleError);
    }

    //Deletar item por ID
    async delete(id: string) {
        await this.findByIdTry(id);
        return this.prisma.item.delete({where: {id}});
    }

    //Alterar dados de item por ID
    async update(id: string, dto: UpdateTableDto) {
        await this.findByIdTry(id);

        //const data: Partial<Table> = {...dto}
        return this.prisma.item.update({where: {id}, data: dto}).catch(this.handleError);
    }



    handleError(error: Error): undefined{
        console.log(error.message);
        throw new UnprocessableEntityException(error.message);
    }
}