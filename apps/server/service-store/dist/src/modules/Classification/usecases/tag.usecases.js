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
exports.TagUseCases = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const tag_1 = require("../domain/tags/tag");
const tag_repository_1 = require("../persistence/tags/tag.repository");
const tag_dto_1 = require("../controllers/tags/tag.dto");
let TagUseCases = class TagUseCases {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
        this.tagdomain = new tag_1.Tag();
        this.logger = new logger_service_1.LoggerService('TagService');
    }
    async createTag(tagDto) {
        var tag = new tag_1.Tag();
        tag = tag_dto_1.CreateTagDto.fromDTO(tagDto);
        const result = await this.tagRepository.insertTag(tag);
        this.logger.log('CreateTagUseCases execute', 'New tag have been inserted');
        return result;
    }
    async deleteTag(id) {
        await this.tagRepository.deleteById(id);
        this.logger.log('DeleteTagUseCases execute', `Tag ${id} have been deleted`);
    }
    async getTag(id) {
        return await this.tagRepository.findById(id);
    }
    async fetTags() {
        return await this.tagRepository.findAll();
    }
    async updateTag(tagDto) {
        var tag = await this.tagRepository.findById(tagDto.id);
        if (tag != null) {
            tag = tag_dto_1.UpdateTagDto.fromDTO(tagDto);
            await this.tagRepository.updateTag(tag.id, tag);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateTagUseCases execute', `Tag ${tag.id} have been updated`);
    }
};
TagUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tag_repository_1.TagRepository)),
    __metadata("design:paramtypes", [Object])
], TagUseCases);
exports.TagUseCases = TagUseCases;
//# sourceMappingURL=tag.usecases.js.map