import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableModule } from './table/table.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [TableModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
