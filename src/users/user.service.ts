import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { handleError } from 'src/utils/handle-error.util';

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
        return this.prisma.user.create({ data: dto }).catch(handleError); 
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
        return this.prisma.user.update({where: {id}, data}).catch(handleError)
    }

}

