import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from "@prisma/client";


export class CreatePedidoDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Itens a ser adicionados ao pedido',
        example: 'TV, Caneca, Cabo, Camisa etc..',
      })
    items: string;
}