import { ApiPropertyOptional } from "@nestjs/swagger";

enum OrderField {
  CREATED_AT = 'CREATED_AT',
  FUEL_LEVEL = 'FUEL_LEVEL',
}

enum OrderType {
  DESC = 'DESC',
  ASC = 'ASC',
}

export class PaginationQuery {
  @ApiPropertyOptional({ default: 1 })
  page: number

  @ApiPropertyOptional({ default: 20 })
  limit: number

  @ApiPropertyOptional({ default: null })
  clientId: number

  @ApiPropertyOptional({
    enum: OrderField,
    default: OrderField.CREATED_AT
  })
  orderField: OrderField

  @ApiPropertyOptional({
    enum: OrderType,
    default: OrderType.ASC
  })
  orderType: OrderType
}
