import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    @ApiOperation({
        summary: 'Lista todos os Usuários'
    })
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Usuário por ID'
    })
    findById(@Param('id') id: string): Promise<User>{
        return this.userService.findById(id);
    }

    @Post()
    @ApiOperation({
        summary: 'Cria um novo Usuário'
    })
    create(@Body() dto: CreateUserDto): Promise<User>{
        return this.userService.create(dto);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Deletar Usuário'
    })
    delete(@Param(':id') id: string) {
        //console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+id);
        return this.userService.delete(id)
    }

    @Patch(':id')
    @ApiOperation({
        summary: 'Atualizar Usuário'
    })
    update(@Param(':id') id: string, @Body() dto: UpdateUserDto): Promise<User>{
        return this.userService.update(id, dto)
    }
}