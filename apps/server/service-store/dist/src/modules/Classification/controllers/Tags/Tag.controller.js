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
exports.TagsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tag_presenter_1 = require("./tag.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const tag_dto_1 = require("../tags/tag.dto");
const tag_usecases_1 = require("../../usecases/tag.usecases");
let TagsController = class TagsController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getTag(id) {
        const tag = await this.useCase.getTag(id);
        return new tag_presenter_1.TagPresenter(tag);
    }
    async getTags() {
        const tags = await this.useCase.fetTags();
        return tags.map((tag) => new tag_presenter_1.TagPresenter(tag));
    }
    async updateTag(updateTagDto) {
        await this.useCase.updateTag(updateTagDto);
        return 'success';
    }
    async deleteTag(id) {
        await this.useCase.deleteTag(id);
        return 'success';
    }
    async createTag(createTagDto) {
        const tagCreated = await this.useCase.createTag(createTagDto);
        return new tag_presenter_1.TagPresenter(tagCreated);
    }
};
__decorate([
    (0, common_1.Get)('get-tag'),
    (0, response_decorator_1.ApiResponseType)(tag_presenter_1.TagPresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "getTag", null);
__decorate([
    (0, common_1.Get)('get-tags'),
    (0, response_decorator_1.ApiResponseType)(tag_presenter_1.TagPresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "getTags", null);
__decorate([
    (0, common_1.Put)('update-tag'),
    (0, response_decorator_1.ApiResponseType)(tag_presenter_1.TagPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tag_dto_1.UpdateTagDto]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "updateTag", null);
__decorate([
    (0, common_1.Delete)('delete-tag'),
    (0, response_decorator_1.ApiResponseType)(tag_presenter_1.TagPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "deleteTag", null);
__decorate([
    (0, common_1.Post)('create-tag'),
    (0, response_decorator_1.ApiResponseType)(tag_presenter_1.TagPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tag_dto_1.CreateTagDto]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "createTag", null);
TagsController = __decorate([
    (0, common_1.Controller)('tags'),
    (0, swagger_1.ApiTags)('tags'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(tag_presenter_1.TagPresenter),
    __metadata("design:paramtypes", [tag_usecases_1.TagUseCases])
], TagsController);
exports.TagsController = TagsController;
//# sourceMappingURL=Tag.controller.js.map