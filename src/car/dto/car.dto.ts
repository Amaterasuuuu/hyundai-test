import { ApiProperty } from "@nestjs/swagger";

export class CarDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  vin: string

  @ApiProperty()
  model: string

  @ApiProperty()
  licensePlate: string

  @ApiProperty()
  fuelLevel: number

  @ApiProperty()
  longitude: number

  @ApiProperty()
  latitude: number

  // @ApiProperty()
  // client_id: number

  @ApiProperty()
  created_at: Date
}
