/// <reference types="multer" />
import { FilesService } from './file.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadFile(file: Express.Multer.File): Promise<string>;
}
