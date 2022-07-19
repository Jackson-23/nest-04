import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login.response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    //const {email, password} = loginDto; Desconstrução das linhas a abaixo
    const email = loginDto.email;
    const password = loginDto.password;

    //Checagem de existência do usuário por email
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Usuário ou Senha não são válidos');
    }

    //Validação de senha
    const isHashValid = bcrypt.compare(password, user.password);

    if (!isHashValid) {
      throw new UnauthorizedException('Usuário ou Senha não são válidos');
    }
    delete user.password;

    return {
      token: this.jwtService.sign({ email }),
      user,
    };
  }
}
