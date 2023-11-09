import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path'; // Corrigido aqui


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

//  const server = express();

  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

  
   // Configurando o CORS
   app.enableCors({
    origin: [
      'http://localhost:3000', 
      'http://localhost:3001',
      'http://localhost:5173',
    ], // Adicione os domínios permitidos aqui
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  });

  await app.listen(3001);
}
bootstrap();
