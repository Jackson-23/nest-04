import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Item } from "@prisma/client";

export class CreatePedidoDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({})
    UserId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Itens a ser adicionados ao pedido',
        example: 'TV, Caneca, Cabo, Camisa etc..',
      })
    items: Item;
}