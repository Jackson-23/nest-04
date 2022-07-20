import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  //Name**********
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do item',
    example: 'Filme, jogo, catalogo, afins',
  })
  name: string;

  //Description**********
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição do item',
    example: 'Este é um filme etc...',
  })
  description: string;

   //Description**********
   @IsString()
   @ApiProperty({
     description: 'Categoria atribuída ao item',
     example: 'Eletrônico, Móvel, Eletrodoméstico, Filme, Jogo etc...',
   })
   category: string;

  //Duration**********
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Tempo de duração em minutos',
    example: 180,
  })
  duration: number;

  //Link de Imagem**********
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Link da Imagem',
    example: 'https://thumbs.dreamstime.com/b/texto-vermelho-do-selo-do-exemplo-43363006.jpg',
  })
  imgUrl: string;

  //Score do Item**********
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Nota atribuída ao item pelos usuários de 0 à 5',
    example: 5,
  })
  imdScore: number;
}
