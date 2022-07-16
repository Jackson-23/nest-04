import {Get, Injectable, NotFoundException, Param, UnprocessableEntityException} from '@nestjs/common';
import {CreatePedidoDto} from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { Prisma } from '@prisma/client';
import { Item } from 'src/items/entities/item.entity';

@Injectable()
export class PedidoService {
    

    constructor(private readonly prisma: PrismaService){}

    //Buscar todos os Pedidos
    findAll()/*: Promise<Pedido[]>*/{
        return this.prisma.pedido.findMany({
            select:{
                id: true,
                user: {
                    select:{
                        name: true,
                    },
                },
                items:{
                    select:{
                        name: true,
                    },
                },
            }
        });
    }


    
    //Buscar Pedido por ID
    findById(id: string){
        return this.findByIdTry(id);
    }

    //Busca Pedido por Id com tratamento de erro
    async findByIdTry(id: string)/*: Promise <Pedido>*/{
        const record = await this.prisma.pedido.findUnique({
            where: {id},
            include: {
                user:{
                    select: {
                        name: true,
                    }
                },
                items:{
                    select:{
                        id: true,
                        name: true,
                    }
                }
            } 
        });
        if(!record){
            throw new NotFoundException("Register " + id + " not found");
        }
        return record;
    }

    

    //Criar novo Pedido
    create(dto: CreatePedidoDto) {
        const data: Prisma.PedidoCreateInput = {
            user:{
                connect:{
                    id: dto.userId,
                },
            },
            items:{
                connect:dto.items.map((itemsId)=>({
                    id: itemsId,
                }))
            }
        }
        //Retorna mostrando dados do Usuário e dados dos itens inseridos no pedido.
        return this.prisma.pedido.create({
            data,
            select: {
              id: true,
              user: {
                select: {
                  name: true,
                },
              },
              items: {
                select: {
                  name: true,
                },
              },
            },
          })
          .catch(handleError);
    }

}