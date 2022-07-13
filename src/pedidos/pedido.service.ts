import {Get, Injectable, NotFoundException, Param, UnprocessableEntityException} from '@nestjs/common';
import {CreatePedidoDto} from './dto/create-pedido.dto';
import { Pedido as Pedido } from './entities/pedido.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiOperation } from '@nestjs/swagger';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
    

    constructor(private readonly prisma: PrismaService){}

    //Buscar todos os itens
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
        return this.prisma.pedido.create({ data: dto }).catch(this.handleError);
    }

    //Deletar Pedido por ID
    async delete(id: string) {
        await this.findByIdTry(id);
        return this.prisma.pedido.delete({where: {id}});
    }

    //Alterar dados de Pedido por ID
    async update(id: string, dto: UpdatePedidoDto) {
        await this.findByIdTry(id);

        //const data: Partial<Pedido> = {...dto}
        return this.prisma.pedido.update({where: {id}, data: dto}).catch(this.handleError);
    }



    handleError(error: Error): undefined{
        console.log(error.message);
        throw new UnprocessableEntityException(error.message);
    }
}