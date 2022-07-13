import { Module } from '@nestjs/common';
import { TableController } from './item.controller';
import { TableService } from './item.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [TableController],
    providers: [TableService],
})
export class TableModule {}