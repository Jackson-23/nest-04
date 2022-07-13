import { PartialType } from "@nestjs/mapped-types"
import { CreateTableDto } from "./create-pedido.dto"

export class UpdateTableDto extends PartialType(CreateTableDto) {}