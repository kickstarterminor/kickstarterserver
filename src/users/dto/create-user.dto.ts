import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'test@test.nl' })
  email: string;

  @ApiProperty({ example: 'strongpassword123' })
  password: string;
}
