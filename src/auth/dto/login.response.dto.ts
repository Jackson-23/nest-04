import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

export class LoginResponseDto{
    @ApiProperty({
        description: 'JWT gerado pelo login',
        example: 'TOKEN_GERADO_AUTOMATICAMENTE_:)'
    })
    token: string;

    @ApiProperty({
        description: 'dados do usuário autenticado',
    })
    user:User;
}