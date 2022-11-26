import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsLatitude, IsLongitude, IsNumber, IsOptional, IsPositive, IsString, Max, MaxLength } from "class-validator";

export class UpdateCarDto {
  @ApiPropertyOptional({ example: '4Y1SL65848Z411439' })
  @IsString()
  @MaxLength(17)
  @IsOptional()
  vin: string

  @ApiPropertyOptional({ example: 'Toyota Camry 70' })
  @IsString()
  @MaxLength(50)
  @IsOptional()
  model: string

  @ApiPropertyOptional({ example: '6TRJ244' })
  @IsString()
  @MaxLength(20)
  @IsOptional()
  license_plate: string

  @ApiPropertyOptional({ example: 50 })
  @IsNumber()
  @IsPositive()
  @Max(100)
  @IsOptional()
  fuel_level: number

  @ApiPropertyOptional({ example: -122.057543 })
  @IsLongitude()
  @IsOptional()
  longitude: number

  @ApiPropertyOptional({ example: 37.387474 })
  @IsLatitude()
  @IsOptional()
  latitude: number

  @ApiPropertyOptional({ example: 1 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  client_id: number
}
