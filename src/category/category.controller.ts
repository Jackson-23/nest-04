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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Category } from './entities/category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('category')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista todas as Categorias',
  })
  findAll() /*: Promise<Category[]>*/ {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Categoria por ID',
  })
  findById(@Param('id') id: string) {
    return this.categoryService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova categoria',
  })
  create(@Body() createTableDto: CreateCategoryDto) /*: Promise<Category>*/ {
    return this.categoryService.create(createTableDto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    summary: 'Deletar categoria',
  })
  delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }

  @Patch('update/:id')
  @ApiOperation({
    summary: 'Atualizar Categoria',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto,
  ) /*: Promise<Category>*/ {
    return this.categoryService.update(id, dto);
  }
}
