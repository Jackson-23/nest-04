import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Pedido } from './entities/pedido.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('pedido')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('pedido')
export class PedidoController {
  constructor(private pedidoService: PedidoService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista todos os pedidos',
  })
  findAll() /*: Promise<Pedido[]>*/ {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'pedido por ID',
  })
  findById(@Param('id') id: string) {
    return this.pedidoService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cria um novo pedido',
  })
  create(@Body() dto: CreatePedidoDto) /*: Promise<Pedido>*/ {
    return this.pedidoService.create(dto);
  }
}
