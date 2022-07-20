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
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Item } from './entities/item.entity';
import { UpdateItemDto } from './dto/update-item.dto';
import { AuthGuard } from '@nestjs/passport';
import { Category } from 'src/category/entities/category.entity';

@ApiTags('item')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista todos os itens',
  })
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Item por ID',
  })
  findById(@Param('id') id: string) {
    return this.itemService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cria um novo item',
  })
  create(@Body() createTableDto: CreateItemDto) /*: Promise<Item>*/ {
    //return this.itemService.create(createTableDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    summary: 'Deletar item',
  })
  delete(@Param('id') id: string) {
    return this.itemService.delete(id);
  }

  @Patch('update/:id')
  @ApiOperation({
    summary: 'Atualizar Item',
  })
  update(@Param('id') id: string, @Body() dto: UpdateItemDto): Promise<Item | void> {
    return this.itemService.update(id, dto);
  }
}
