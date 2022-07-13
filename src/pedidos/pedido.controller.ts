import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Pedido } from './entities/pedido.entity';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@ApiTags('pedido')
@Controller('pedido')
export class PedidoController {
    constructor(private pedidoService: PedidoService) {}

    @Get()
    @ApiOperation({
        summary: 'Lista todos os itens'
    })
    findAll(): Promise<Pedido[]> {
        return this.pedidoService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'pedido por ID'
    })
    findById(@Param('id') id: string){
        return this.pedidoService.findById(id);
    }

    @Post()
    @ApiOperation({
        summary: 'Cria um novo pedido'
    })
    create(@Body() dto: CreatePedidoDto): Promise<Pedido>{
        return this.pedidoService.create(dto);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Deletar pedido'
    })
    delete(@Param(':id') id: string) {
        return this.pedidoService.delete(id)
    }

    @Patch(':id')
    @ApiOperation({
        summary: 'Atualizar pedido'
    })
    update(@Param(':id') id: string, @Body() dto: UpdatePedidoDto): Promise<Pedido>{
        return this.pedidoService.update(id, dto)
    }
}