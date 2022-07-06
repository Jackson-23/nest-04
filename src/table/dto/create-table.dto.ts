import { IsNumber, IsPositive } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'O número da mesa',
        example: 1,
      })
    number: number;
    name: String;
    duration: number;
    created_at: Date;
    updated_at: Date;
}