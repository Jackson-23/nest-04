import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Pedido } from './entities/pedido.entity';

@ApiTags('pedido')
@Controller('pedido')
export class PedidoController {
    constructor(private pedidoService: PedidoService) {}

    @Get()
    @ApiOperation({
        summary: 'Lista todos os pedidos'
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
    create(@Body() dto: CreatePedidoDto)/*: Promise<Pedido>*/{
        return this.pedidoService.create(dto);
    }
}