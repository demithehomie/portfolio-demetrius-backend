import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileModule } from 'src/files/file.module';

@Module({
  imports: [FileModule],
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService],
})
export class ProjectModule {}
