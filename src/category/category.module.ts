import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,
    PassportModule.register({defaultStrategy: 'jwt'})],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
