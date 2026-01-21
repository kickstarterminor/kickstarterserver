import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty({ example: 'Device001' })
  username: string;

  @ApiProperty({ example: 'UID123456789' })
  uid: string;
}
