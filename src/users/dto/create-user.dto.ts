import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    //Name*******
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nome do Usuário',
        example: "Jonathan",
      })
    name: string;

    //CPF*******
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'e-mail para contato',
        example: "example@example.com.br",
      })
      cpf: string;

    //Email*******
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'CPF do úsuário',
        example: "000.000.000-00",
      })
    email: string;

    //Password*******
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Senha de acesso',
      })
    password: string;

    //isAdmin*******
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Usuário é admin ou não',
        example: "false",
      })
    isAdmin: boolean;
}