import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    return project;
  }

  async create(dto: CreateProjectDto): Promise<Project> {
    return this.prisma.project.create({
      data: {
        name: dto.name,
        description: dto.description,
      },
    });
  }

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    // Ensure it exists first so we throw 404 if not found
    await this.findOne(id);

    return this.prisma.project.update({
      where: { id },
      data: {
        name: dto.name ?? undefined,
        description: dto.description ?? undefined,
      },
    });
  }

  async remove(id: string): Promise<void> {
    // Ensure it exists first
    await this.findOne(id);

    await this.prisma.project.delete({
      where: { id },
    });
  }
}
