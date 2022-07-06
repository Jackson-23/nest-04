import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nome do Usuário',
        example: "Jonathan",
      })
    name: string;

    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'e-mail para contato',
        example: "example@example.com.br",
      })
    email: string;

    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'Senha de acesso',
      })
    password: string;

}