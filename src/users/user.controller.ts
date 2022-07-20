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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista todos os Usuários',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Usuário por ID',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cria um novo Usuário',
  })
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Delete('delete/:id')
  @ApiOperation({
    summary: 'Deletar Usuário',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  delete(@Param('id') id: string) {
    console.log("Estou no controller"+id);
    return this.userService.delete(id);
  }

  @Patch('update/:id')
  @ApiOperation({
    summary: 'Atualizar Usuário',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, dto);
  }
}
