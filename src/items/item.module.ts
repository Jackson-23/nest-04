import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,
    PassportModule.register({defaultStrategy: 'jwt'})],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
