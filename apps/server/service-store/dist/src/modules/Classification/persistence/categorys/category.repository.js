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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const typeorm_1 = require("typeorm");
const category_1 = require("../../domain/categorys/category");
const category_entity_1 = require("./category.entity");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateCategory(id, category) {
        const categoryEntity = this.toCategoryEntity(category);
        await this.update({ id: category.id }, categoryEntity);
    }
    async insertCategory(category) {
        const categoryEntity = this.toCategoryEntity(category);
        const result = await this.insert(categoryEntity);
        console.log(result.generatedMaps);
        return this.toCategory(result.generatedMaps[0]);
    }
    async findAll() {
        const categorysEntity = await this.find();
        return categorysEntity.map((categoryEntity) => this.toCategory(categoryEntity));
    }
    async findById(id) {
        const categoryEntity = await this.findOneOrFail(id);
        return this.toCategory(categoryEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toCategory(categoryEntity) {
        const category = new category_1.Category();
        category.id = categoryEntity.id;
        category.name = categoryEntity.name;
        category.description = categoryEntity.description;
        category.code = categoryEntity.code;
        category.parentId = categoryEntity.parent.id;
        return category;
    }
    toCategoryEntity(category) {
        const categoryEntity = new category_entity_1.CategoryEntity();
        categoryEntity.id = category.id;
        categoryEntity.name = category.name;
        categoryEntity.description = category.description;
        categoryEntity.code = category.code;
        categoryEntity.createdAt = category.createdAt;
        categoryEntity.updatedAt = category.updatedAt;
        return categoryEntity;
    }
};
CategoryRepository = __decorate([
    (0, typeorm_1.EntityRepository)(category_entity_1.CategoryEntity),
    __metadata("design:paramtypes", [])
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map