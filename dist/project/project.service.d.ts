/// <reference types="multer" />
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/project.dto';
import { FilesService } from 'src/files/file.service';
export declare class ProjectService {
    private prisma;
    private fileService;
    constructor(prisma: PrismaService, fileService: FilesService);
    create(projectData: CreateProjectDto, imageFiles: Express.Multer.File[]): Promise<any>;
    findAll(): Promise<({
        images: {
            id: number;
            url: string;
            projectId: number;
        }[];
    } & {
        id: number;
        title: string;
        text: string;
        whyIsRelevant: string;
        mainChallenges: string;
        repositoryLink: string;
    })[]>;
    findOne(id: number): Promise<{
        images: {
            id: number;
            url: string;
            projectId: number;
        }[];
    } & {
        id: number;
        title: string;
        text: string;
        whyIsRelevant: string;
        mainChallenges: string;
        repositoryLink: string;
    }>;
    update(id: number, data: Partial<CreateProjectDto>): Promise<{
        images: {
            id: number;
            url: string;
            projectId: number;
        }[];
    } & {
        id: number;
        title: string;
        text: string;
        whyIsRelevant: string;
        mainChallenges: string;
        repositoryLink: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        text: string;
        whyIsRelevant: string;
        mainChallenges: string;
        repositoryLink: string;
    }>;
}
