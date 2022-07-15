import { Module } from '@nestjs/common';
import { TableController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [TableController],
    providers: [PedidoService],
})
export class TableModule {}