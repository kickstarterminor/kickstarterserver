import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AlarmService } from './alarm.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Alarm')
@Controller('alarm')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new alarm to the device' })
  @ApiResponse({ status: 201, description: 'Successfully created' })
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmService.create(createAlarmDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all alarms' })
  @ApiResponse({ status: 201, description: 'Successfully found all alarms' })
  findAll() {
    return this.alarmService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all alarms' })
  @ApiResponse({ status: 201, description: 'Successfully found all alarms' })
  findOne(@Param('id') id: string) {
    return this.alarmService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete alarm' })
  @ApiResponse({ status: 201, description: 'Successfully deleted' })
  remove(@Param('id') id: string) {
    return this.alarmService.remove(id);
  }
}
