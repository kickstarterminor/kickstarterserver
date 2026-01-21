import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Device } from './entities/device.entity';

@Injectable()
export class DevicesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.prisma.device.create({
      data: createDeviceDto,
    });
  }

  async findAll(): Promise<Device[]> {
    return this.prisma.device.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<Device> {
    const device = await this.prisma.device.findUnique({
      where: { id },
    });

    if (!device) throw new NotFoundException(`Device with id ${id} not found`);
    return device;
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    await this.findOne(id);
    return this.prisma.device.update({
      where: { id },
      data: updateDeviceDto,
    });
  }

  async remove(id: string): Promise<Device> {
    await this.findOne(id);
    return this.prisma.device.delete({
      where: { id },
    });
  }
}
