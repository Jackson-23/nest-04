import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nome do item',
        example: "Filme, jogo, catalogo, afins",
      })
    name: string;

    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'Tempo de duração em minutos',
        example: 180,
      })
    duration: number;
}