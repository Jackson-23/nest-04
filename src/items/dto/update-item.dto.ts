import { PartialType } from "@nestjs/mapped-types"
import { CreateItemDto } from "./create-item.dto"

export class UpdateTableDto extends PartialType(CreateItemDto) {}