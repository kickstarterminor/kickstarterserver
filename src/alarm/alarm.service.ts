import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { Alarm } from '@prisma/client';

@Injectable()
export class AlarmService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAlarmDto: CreateAlarmDto): Promise<Alarm> {
    return this.prisma.alarm.create({
      data: { ...createAlarmDto },
    });
  }

  async findAll(): Promise<Alarm[]> {
    return this.prisma.alarm.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<Alarm> {
    const alarm = await this.prisma.alarm.findUnique({
      where: { id },
    });

    if (!alarm) throw new NotFoundException(`Alarm with id ${id} not found`);
    return alarm;
  }

  async remove(id: string): Promise<Alarm> {
    await this.findOne(id);
    return this.prisma.alarm.delete({
      where: { id },
    });
  }
}
