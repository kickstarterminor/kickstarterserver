import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ example: 'My first project' })
  name: string;

  @ApiProperty({
    example: 'This is a sample project',
    required: false,
  })
  description?: string;
}
