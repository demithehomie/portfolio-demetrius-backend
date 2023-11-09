import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(createProjectDto: CreateProjectDto, files: any): Promise<any>;
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
    findOne(id: string): Promise<{
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
    update(id: string, updateProjectDto: CreateProjectDto): Promise<{
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
    remove(id: string): Promise<{
        id: number;
        title: string;
        text: string;
        whyIsRelevant: string;
        mainChallenges: string;
        repositoryLink: string;
    }>;
}
