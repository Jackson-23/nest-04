import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { TableService } from './pedido.service';
import { CreateTableDto } from './dto/create-pedido.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Table } from './entities/table.entity';
import { UpdateTableDto } from './dto/update-pedido.dto';

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
        summary: 'pedido por ID'
    })
    findById(@Param('id') id: string){
        return this.tableService.findById(id);
    }

    @Post()
    @ApiOperation({
        summary: 'Cria um novo pedido'
    })
    create(@Body() createTableDto: CreateTableDto): Promise<Table>{
        return this.tableService.create(createTableDto);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Deletar pedido'
    })
    delete(@Param(':id') id: string) {
        return this.tableService.delete(id)
    }

    @Patch(':id')
    @ApiOperation({
        summary: 'Atualizar pedido'
    })
    update(@Param(':id') id: string, @Body() dto: UpdateTableDto): Promise<Table>{
        return this.tableService.update(id, dto)
    }
}