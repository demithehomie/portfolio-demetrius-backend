import { UseInterceptors, UploadedFiles, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('new-project')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'images', maxCount: 5 },
  ]))
  async create(@Body() createProjectDto: CreateProjectDto, @UploadedFiles() files) {
    return this.projectService.create(createProjectDto, files.images);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  } 

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: CreateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
