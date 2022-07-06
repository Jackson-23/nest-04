import {Get, Injectable, NotFoundException, Param, UnprocessableEntityException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    

    constructor(private readonly prisma: PrismaService){}
    //Buscar todos os usários
    findAll(): Promise<User[]>{
        return this.prisma.user.findMany();
    }

    //Buscar Usuário por ID com verificação de erro
    async findByIdTry(id: string): Promise <User>{
        const record = await this.prisma.user.findUnique({ where: {id}});
        if(!record){
            throw new NotFoundException("Register " + id + " not found");
        }
        return record;
    }
    //Buscar Usuário por ID com verificação
    findById(id: string): Promise <User>{
        return this.findByIdTry(id);
    }

    //Criar novo Usuário
    create(dto: CreateUserDto): Promise <User> {
        //const data: User = {...dto}
        return this.prisma.user.create({ data: dto }).catch(this.handleError); 
    }

    
    //Deletar usuário por ID
    async delete(id: string) {
        await this.findByIdTry(id);

        return this.prisma.user.delete({where: {id}});
    }

    //Atualizar dados de um usuário
    async update(id: string, dto: UpdateUserDto) {
        await this.findByIdTry(id);

        const data: Partial<User> = {...dto}
        return this.prisma.user.update({where: {id}, data}).catch(this.handleError)
    }





    handleError(error: Error): undefined{
        console.log(error.message);
        throw new UnprocessableEntityException(error.message);
    }
}

