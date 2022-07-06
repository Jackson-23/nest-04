import {Get, Injectable, Param} from '@nestjs/common';
import {CreateUserDto as CreateUserDto} from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    

    constructor(private readonly prisma: PrismaService){}
    findAll(): Promise<User[]>{
        return this.prisma.user.findMany();
    }

    findById(id: string){
        return this.prisma.user.findUnique({ where: {id}});
    }

    create(dto: CreateUserDto) {
        return this.prisma.user.create({ data: dto }); 
    }

    delete(id: string) {
        return this.prisma.user.delete({where: {id}});
    }
    update(id: string, dto: UpdateUserDto) {
        return this.prisma.user.update({where: {id}, data: dto})
    }
}