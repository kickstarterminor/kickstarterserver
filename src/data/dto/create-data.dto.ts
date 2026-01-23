import { ApiProperty } from '@nestjs/swagger';

export class CreateDataDto {
  @ApiProperty({ example: 'Device001' })
  deviceId: string;

  @ApiProperty({ example: '210,1,2,3,4,5' })
  value: string;
}
