import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new device' })
  @ApiResponse({ status: 201, description: 'Device created.' })
  create(@Body() createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all devices' })
  @ApiResponse({ status: 200, description: 'List of devices.' })
  findAll(): Promise<Device[]> {
    return this.devicesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a device by id' })
  @ApiResponse({ status: 200, description: 'The device.' })
  @ApiResponse({ status: 404, description: 'Device not found.' })
  findOne(@Param('id') id: string): Promise<Device> {
    return this.devicesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing device' })
  @ApiResponse({ status: 200, description: 'Device updated.' })
  @ApiResponse({ status: 404, description: 'Device not found.' })
  update(
    @Param('id') id: string,
    @Body() updateDeviceDto: UpdateDeviceDto,
  ): Promise<Device> {
    return this.devicesService.update(id, updateDeviceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a device' })
  @ApiResponse({ status: 200, description: 'Device deleted.' })
  @ApiResponse({ status: 404, description: 'Device not found.' })
  remove(@Param('id') id: string): Promise<Device> {
    return this.devicesService.remove(id);
  }
}
