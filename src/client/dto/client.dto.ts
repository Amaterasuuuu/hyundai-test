import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
export class ClientDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiHideProperty()
  password: string;
}