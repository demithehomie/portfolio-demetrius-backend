// files.service.ts
import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class FilesService {
 // uploadFile: any;
  async uploadBase64Image(base64: string): Promise<string> {
    // Converter a string base64 em um buffer
    const imageBuffer = Buffer.from(base64, 'base64');

    // Processar a imagem com Sharp
    const processedImageBuffer = await sharp(imageBuffer)
      .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
      .toBuffer();

    // Gerar um nome de arquivo único para a imagem
    const filename = `image_${Date.now()}.png`; // ou outro formato conforme necessário
    const outputPath = join('uploads', filename);

    // Salvar a imagem processada no disco
    await writeFile(outputPath, processedImageBuffer);

    // Retornar o caminho onde a imagem foi salva
    // Se estiver usando um serviço de armazenamento externo, aqui você faria o upload e retornaria a URL
    return outputPath;
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    // ... sua lógica de upload de arquivo ...
    // Converter o buffer do arquivo em um buffer de imagem
    const imageBuffer = Buffer.from(file.buffer);

    // Processar a imagem com Sharp
    const processedImageBuffer = await sharp(imageBuffer)
      .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
      .toBuffer();

      const filename = `image_${Date.now()}.${file.mimetype.split('/')[1]}`; // Isso extrai o formato do mimetype (ex: 'image/png' se torna 'png')
      const outputPath = join('uploads', filename); // Aqui, removemos o process.cwd()
      

    // Salvar a imagem processada no disco
    await writeFile(outputPath, processedImageBuffer);

    // Retornar o caminho onde a imagem foi salva
    // Se estiver usando um serviço de armazenamento externo, aqui você faria o upload e retornaria a URL
    return outputPath;
  }
}
