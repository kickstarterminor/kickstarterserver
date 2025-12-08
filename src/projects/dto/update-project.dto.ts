import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProjectDto {
  @ApiPropertyOptional({ example: 'Updated project name' })
  name?: string;

  @ApiPropertyOptional({ example: 'Updated description' })
  description?: string;
}
