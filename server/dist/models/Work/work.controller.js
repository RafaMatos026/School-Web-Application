"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const is_public_decorator_1 = require("../../authentication/decorator/is-public.decorator");
const createWork_dto_1 = require("./createWork.dto");
const work_service_1 = require("./work.service");
let WorkController = class WorkController {
    constructor(WorkService) {
        this.WorkService = WorkService;
    }
    async createWork(data, file) {
        return await this.WorkService.createWork(data);
    }
    async getWork(classId) {
        return await this.WorkService.getClassWork(classId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: '../../../public/Documents/Works',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipeBuilder()
        .addFileTypeValidator({
        fileType: 'pdf',
    })
        .build({
        fileIsRequired: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createWork_dto_1.CreateWorkDto, Object]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "createWork", null);
__decorate([
    (0, is_public_decorator_1.Public)(),
    (0, common_1.Get)('getWork/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "getWork", null);
WorkController = __decorate([
    (0, common_1.Controller)('works'),
    __metadata("design:paramtypes", [work_service_1.WorkService])
], WorkController);
exports.WorkController = WorkController;
//# sourceMappingURL=work.controller.js.map