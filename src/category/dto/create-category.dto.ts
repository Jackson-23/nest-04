import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Categoria de Itens: Eletetrônicos, Móveis, Eletrodomésticos, Moda, Ferramentas',
        example: "Eletrônico",
      })
    name: string;

}