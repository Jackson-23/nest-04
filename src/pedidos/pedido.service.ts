import {Get, Injectable, NotFoundException, Param, UnprocessableEntityException} from '@nestjs/common';
import {CreatePedidoDto} from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PedidoService {
    

    constructor(private readonly prisma: PrismaService){}

    //Buscar todos os Pedidos
    findAll(): Promise<Pedido[]>{
        return this.prisma.pedido.findMany();
    }

    //Busca Pedido por Id com tratamento de erro
    async findByIdTry(id: string): Promise <Pedido>{
        const record = await this.prisma.pedido.findUnique({ where: {id}});
        if(!record){
            throw new NotFoundException("Register " + id + " not found");
        }
        return record;
    }

    //Buscar Pedido por ID
    findById(id: string){
        return this.findByIdTry(id);
    }

    //Criar novo Pedido
    create(dto: CreatePedidoDto) {
        //return this.prisma.pedido.create({ data: dto }).catch(this.handleError);
    }

    
    handleError(error: Error): undefined{
        console.log(error.message);
        throw new UnprocessableEntityException(error.message);
    }
}