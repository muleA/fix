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
exports.CategoryUseCases = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const category_1 = require("../domain/categorys/category");
const category_repository_1 = require("../persistence/categorys/category.repository");
const category_dto_1 = require("../controllers/categorys/category.dto");
let CategoryUseCases = class CategoryUseCases {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
        this.categorydomain = new category_1.Category();
        this.logger = new logger_service_1.LoggerService('CategoryService');
    }
    async createCategory(categoryDto) {
        var category = new category_1.Category();
        category = category_dto_1.CreateCategoryDto.fromDTO(categoryDto);
        const result = await this.categoryRepository.insertCategory(category);
        this.logger.log('CreateCategoryUseCases execute', 'New category have been inserted');
        return result;
    }
    async deleteCategory(id) {
        await this.categoryRepository.deleteById(id);
        this.logger.log('DeleteCategoryUseCases execute', `Category ${id} have been deleted`);
    }
    async getCategory(id) {
        return await this.categoryRepository.findById(id);
    }
    async fetCategorys() {
        return await this.categoryRepository.findAll();
    }
    async updateCategory(categoryDto) {
        var category = await this.categoryRepository.findById(categoryDto.id);
        if (category != null) {
            category = category_dto_1.UpdateCategoryDto.fromDTO(categoryDto);
            await this.categoryRepository.updateCategory(category.id, category);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateCategoryUseCases execute', `Category ${category.id} have been updated`);
    }
};
CategoryUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_repository_1.CategoryRepository)),
    __metadata("design:paramtypes", [Object])
], CategoryUseCases);
exports.CategoryUseCases = CategoryUseCases;
//# sourceMappingURL=category.usecases.js.map