import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidoDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'NO',
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