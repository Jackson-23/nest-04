import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Table } from './entities/table.entity';
import { UpdateTableDto } from './dto/update-table.dto';

@ApiTags('table')
@Controller('table')
export class TableController {
    constructor(private tableService: TableService) {}

    @Get()
    @ApiOperation({
        summary: 'Lista todos os itens'
    })
    findAll(): Promise<Table[]> {
        return this.tableService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Item por ID'
    })
    findById(@Param('id') id: string){
        return this.tableService.findById(id);
    }

    @Post()
    @ApiOperation({
        summary: 'Cria um novo item'
    })
    create(@Body() createTableDto: CreateTableDto): Promise<Table>{
        return this.tableService.create(createTableDto);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Deletar item'
    })
    delete(@Param(':id') id: string) {
        return this.tableService.delete(id)
    }

    @Patch(':id')
    @ApiOperation({
        summary: 'Atualizar Item'
    })
    update(@Param(':id') id: string, @Body() dto: UpdateTableDto): Promise<Table>{
        return this.tableService.update(id, dto)
    }
}