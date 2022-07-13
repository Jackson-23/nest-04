import { Module } from '@nestjs/common';
import { TableController } from './pedido.controller';
import { TableService } from './pedido.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [TableController],
    providers: [TableService],
})
export class TableModule {}