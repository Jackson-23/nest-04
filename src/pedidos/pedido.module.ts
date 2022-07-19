import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,
    PassportModule.register({defaultStrategy: 'jwt'})],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
