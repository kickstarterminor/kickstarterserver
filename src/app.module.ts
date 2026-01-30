import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DevicesModule } from './devices/devices.module';
import { UsersModule } from './users/users.module';
import { DataModule } from './data/data.module';
import { AlarmModule } from './alarm/alarm.module';

@Module({
  imports: [PrismaModule, DevicesModule, UsersModule, DataModule, AlarmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
