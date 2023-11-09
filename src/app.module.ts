import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { FileModule } from './files/file.module';

@Module({
  imports: [ProjectModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
