import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDataDto } from './dto/create-data.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Data } from './entities/data.entity';

@Injectable()
export class DataService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDataDto: CreateDataDto): Promise<Data> {
    return this.prisma.data.create({
      data: { ...createDataDto },
    });
  }

  async findAll(): Promise<Data[]> {
    return this.prisma.data.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<Data> {
    const data = await this.prisma.data.findUnique({
      where: { id },
    });

    if (!data) throw new NotFoundException(`User with id ${id} not found`);
    return data;
  }
}
