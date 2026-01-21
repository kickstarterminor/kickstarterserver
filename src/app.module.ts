import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { PrismaModule } from './prisma/prisma.module';
import { DevicesModule } from './devices/devices.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, ProjectsModule, DevicesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
