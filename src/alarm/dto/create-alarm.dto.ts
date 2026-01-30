import { ApiProperty } from '@nestjs/swagger';

export class CreateAlarmDto {
  @ApiProperty({ example: 'device001' })
  deviceId: string;
}
