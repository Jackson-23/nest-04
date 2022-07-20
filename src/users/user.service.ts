import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { handleError } from 'src/utils/handle-error.util';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    name: true,
    cpf: true,
    email: true,
    password: false,
    isAdmin: true,
    created_at: true,
    updated_at: true,
  };

  constructor(private readonly prisma: PrismaService) {}
  //Buscar todos os usários
  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: this.userSelect,
    });
  }

  //Buscar Usuário por ID com verificação de erro
  async findByIdTry(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });
    if (!record) {
      throw new NotFoundException('Register ' + id + ' not found');
    }
    return record;
  }
  //Buscar Usuário por ID com verificação
  findById(id: string): Promise<User> {
    return this.findByIdTry(id);
  }

  //Criar novo Usuário
  async create(dto: CreateUserDto): Promise<User> {
    //Confirmar senha
    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('Senhas Diferentes');
    }
    delete dto.confirmPassword;

    //Usar Bcrypt
    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 11),
    };
    return this.prisma.user
      .create({
        data: dto,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  //Deletar usuário por ID
  async delete(id: string): Promise<User> {
    //await this.findByIdTry(id);
    //let id_cont = id;
    console.log("Estou no service" + id)
    return this.prisma.user.delete({
      where: { id },
      select: this.userSelect,
    });
  }

  //Atualizar dados de um usuário
  async update(id: string, dto: UpdateUserDto) {
    await this.findByIdTry(id);

    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('Senhas Diferentes');
    }

    const data: Partial<User> = { ...dto };
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 11);
    }

    delete dto.confirmPassword;

    return this.prisma.user
      .update({
        where: { id },
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }
}
