import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  //Name*******
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do Usuário',
    example: 'Jonathan',
  })
  name: string;

  //CPF*******
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'CPF do úsuário',
    example: '000.000.000-00',
  })
  cpf: string;

  //Email*******
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'e-mail para contato',
    example: 'example@example.com.br',
  })
  email: string;

  //Password*******
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Senha de acesso',
    example: 'MinhaSenha123#',
  })
  password: string;

  //Confirm-Password**********
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Deve ser igual a senha sugerida',
    example: 'MinhaSenha123#',
  })
  confirmPassword: string;

  //isAdmin*******
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Usuário é admin ou não',
    example: 'false',
  })
  isAdmin: boolean;
}
