import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/item.module';
import { UserModule } from './users/user.module';
import { PedidoModule } from './pedidos/pedido.module';

@Module({
  imports: [ItemModule, UserModule, PedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
