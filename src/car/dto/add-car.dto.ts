import { ApiProperty } from "@nestjs/swagger";
import { IsLatitude, IsLongitude, IsNumber, IsPositive, IsString, Max, MaxLength } from "class-validator";

export class AddCarDto {
  @ApiProperty({ example: '4Y1SL65848Z411439' })
  @IsString()
  @MaxLength(17)
  vin: string

  @ApiProperty({ example: 'Toyota Camry 70' })
  @IsString()
  @MaxLength(50)
  model: string

  @ApiProperty({ example: '6TRJ244' })
  @IsString()
  @MaxLength(20)
  licensePlate: string

  @ApiProperty({ example: 50 })
  @IsNumber()
  @IsPositive()
  @Max(100)
  fuelLevel: number

  @ApiProperty({ example: -122.057543 })
  @IsLongitude()
  longitude: number

  @ApiProperty({ example: 37.387474 })
  @IsLatitude()
  latitude: number

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsPositive()
  client_id: number
}
