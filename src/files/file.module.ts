import { Module } from '@nestjs/common';


import { FilesController } from './file.conttoller';
import { FilesService } from './file.service';

@Module({
  exports: [FilesService],
  imports: [],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FileModule {}