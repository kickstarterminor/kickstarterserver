import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateDataDto } from './dto/create-data.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('data')
@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  @ApiOperation({ summary: 'post data' })
  @ApiResponse({ status: 201, description: 'Data created.' })
  create(@Body() createDatumDto: CreateDataDto) {
    return this.dataService.create(createDatumDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all data' })
  @ApiResponse({ status: 200, description: 'List of data.' })
  findAll() {
    return this.dataService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get data by id' })
  @ApiResponse({ status: 200, description: 'The data.' })
  @ApiResponse({ status: 404, description: 'Data not found.' })
  findOne(@Param('id') id: string) {
    return this.dataService.findOne(id);
  }
}
