// files.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './file.service';

const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new BadRequestException('Somente arquivos de imagem são permitidos!'), false);
  }
  callback(null, true);
};

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('file', { fileFilter: imageFileFilter }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.filesService.uploadFile(file);
  }
}
