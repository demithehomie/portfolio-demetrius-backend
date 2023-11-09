/// <reference types="multer" />
export declare class FilesService {
    uploadBase64Image(base64: string): Promise<string>;
    uploadFile(file: Express.Multer.File): Promise<string>;
}
