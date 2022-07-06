import {Injectable} from '@nestjs/common';
import {CreateTableDto} from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TableService {
    constructor(private readonly prisma: PrismaService){}
    findAll(): Promise<Table[]>{
        return this.prisma.item.findMany();
    }

    create(createTableDto: CreateTableDto) {
        const table: Table = {id: 'random_id', ...createTableDto };

        //this.prisma.item.create(table); 

        return table;
    }

}