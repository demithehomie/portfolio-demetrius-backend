"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const sharp = require("sharp");
const promises_1 = require("fs/promises");
const path_1 = require("path");
let FilesService = class FilesService {
    async uploadBase64Image(base64) {
        const imageBuffer = Buffer.from(base64, 'base64');
        const processedImageBuffer = await sharp(imageBuffer)
            .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
            .toBuffer();
        const filename = `image_${Date.now()}.png`;
        const outputPath = (0, path_1.join)('uploads', filename);
        await (0, promises_1.writeFile)(outputPath, processedImageBuffer);
        return outputPath;
    }
    async uploadFile(file) {
        const imageBuffer = Buffer.from(file.buffer);
        const processedImageBuffer = await sharp(imageBuffer)
            .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
            .toBuffer();
        const filename = `image_${Date.now()}.${file.mimetype.split('/')[1]}`;
        const outputPath = (0, path_1.join)('uploads', filename);
        await (0, promises_1.writeFile)(outputPath, processedImageBuffer);
        return outputPath;
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)()
], FilesService);
//# sourceMappingURL=file.service.js.map