import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/project.dto';
import { FilesService } from 'src/files/file.service';

@Injectable()
export class ProjectService {
 // uploadService: any;
  constructor(
    private prisma: PrismaService,
    private fileService: FilesService
    ) {}


    async create(projectData: CreateProjectDto, imageFiles: Express.Multer.File[]): Promise<any> {
      // Crie o projeto no banco de dados
      const project = await this.prisma.project.create({
        data: projectData,
      });
    
      // Faça o upload das imagens e obtenha suas URLs
      const imageRecords = await Promise.all(
        imageFiles.map(async (file) => {
          const imageUrl = await this.fileService.uploadFile(file);
          return this.prisma.image.create({
            data: {
              url: imageUrl,
              projectId: project.id
            },
          });
        })
      );
    
      // Retorne o projeto com as URLs das imagens associadas
      return {
        ...project,
        images: imageRecords.map(record => record.url)
      };
    }
    
  

    async findAll() {
      return this.prisma.project.findMany({
        include: {
          images: true, // Inclui as imagens relacionadas //
        },
      });
    }
  
    async findOne(id: number) {
      return this.prisma.project.findUnique({
        where: { id },
        include: {
          images: true, // Inclui as imagens relacionadas
        },
      });
    }
  
    async update(id: number, data: Partial<CreateProjectDto>) {
      return this.prisma.project.update({
        where: { id },
        data,
        include: {
          images: true, // Inclui as imagens relacionadas para retornar após a atualização
        },
      });
    }
  
    async remove(id: number) {
      // Primeiro, exclua todas as imagens associadas ao projeto
      await this.prisma.image.deleteMany({
        where: {
          projectId: id,
        },
      });
    
      // Depois que todas as imagens associadas forem excluídas, exclua o projeto
      return this.prisma.project.delete({
        where: { id },
      });
    }
    
}

//
