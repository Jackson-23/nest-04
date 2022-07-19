import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePedidoDto {

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Id de cada Item ser colocado no pedido',
    example: '38498855-23eb-41d0-812c-a9fd49ecf2ba',
  })
  items: string[];
}
