import {Get, Injectable, Param} from '@nestjs/common';
import {CreateTableDto} from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiOperation } from '@nestjs/swagger';

@Injectable()
export class TableService {
    constructor(private readonly prisma: PrismaService){}
    findAll(): Promise<Table[]>{
        return this.prisma.item.findMany();
    }

    findById(id: string){
        return this.prisma.item.findUnique({ where: {id}});
    }

    create(createTableDto: CreateTableDto) {
        return this.prisma.item.create({ data: createTableDto }); 
    }

}