import { Body, Controller, Get, Post} from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';

@Controller('table')
export class TableController {
    constructor(private tableService: TableService) {}

    @Get()
    findAll() {
        return this.tableService.findAll();
    }

    @Post()
    create(@Body() createTableDto: CreateTableDto){
        return this.tableService.create(createTableDto);
    }
}