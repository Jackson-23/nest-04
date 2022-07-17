import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/item.module';
import { UserModule } from './users/user.module';
import { PedidoModule } from './pedidos/pedido.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ItemModule, UserModule, PedidoModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
