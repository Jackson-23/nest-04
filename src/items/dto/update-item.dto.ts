import { PartialType } from "@nestjs/mapped-types"
import { CreateTableDto } from "./create-item.dto"

export class UpdateTableDto extends PartialType(CreateTableDto) {}