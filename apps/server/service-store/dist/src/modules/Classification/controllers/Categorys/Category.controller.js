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
exports.CategorysController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const category_presenter_1 = require("./category.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const category_dto_1 = require("../categorys/category.dto");
const category_usecases_1 = require("../../usecases/category.usecases");
let CategorysController = class CategorysController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getCategory(id) {
        const category = await this.useCase.getCategory(id);
        return new category_presenter_1.CategoryPresenter(category);
    }
    async getCategorys() {
        const categorys = await this.useCase.fetCategorys();
        return categorys.map((category) => new category_presenter_1.CategoryPresenter(category));
    }
    async updateCategory(updateCategoryDto) {
        await this.useCase.updateCategory(updateCategoryDto);
        return 'success';
    }
    async deleteCategory(id) {
        await this.useCase.deleteCategory(id);
        return 'success';
    }
    async createCategory(createCategoryDto) {
        const categoryCreated = await this.useCase.createCategory(createCategoryDto);
        return new category_presenter_1.CategoryPresenter(categoryCreated);
    }
};
__decorate([
    (0, common_1.Get)('get-category'),
    (0, response_decorator_1.ApiResponseType)(category_presenter_1.CategoryPresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Get)('get-categorys'),
    (0, response_decorator_1.ApiResponseType)(category_presenter_1.CategoryPresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "getCategorys", null);
__decorate([
    (0, common_1.Put)('update-category'),
    (0, response_decorator_1.ApiResponseType)(category_presenter_1.CategoryPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)('delete-category'),
    (0, response_decorator_1.ApiResponseType)(category_presenter_1.CategoryPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "deleteCategory", null);
__decorate([
    (0, common_1.Post)('create-category'),
    (0, response_decorator_1.ApiResponseType)(category_presenter_1.CategoryPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "createCategory", null);
CategorysController = __decorate([
    (0, common_1.Controller)('categorys'),
    (0, swagger_1.ApiTags)('categorys'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(category_presenter_1.CategoryPresenter),
    __metadata("design:paramtypes", [category_usecases_1.CategoryUseCases])
], CategorysController);
exports.CategorysController = CategorysController;
//# sourceMappingURL=Category.controller.js.map