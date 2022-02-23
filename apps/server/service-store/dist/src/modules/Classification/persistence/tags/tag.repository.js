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
exports.TagRepository = void 0;
tag_1.Tag;
const typeorm_1 = require("typeorm");
const tag_1 = require("../../domain/tags/tag");
const tag_entity_1 = require("./tag.entity");
let TagRepository = class TagRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateTag(id, tag) {
        const tagEntity = this.toTagEntity(tag);
        await this.update({ id: tag.id }, tagEntity);
    }
    async insertTag(tag) {
        const tagEntity = this.toTagEntity(tag);
        const result = await this.insert(tagEntity);
        console.log(result.generatedMaps);
        return this.toTag(result.generatedMaps[0]);
    }
    async findAll() {
        const tagsEntity = await this.find();
        return tagsEntity.map((tagEntity) => this.toTag(tagEntity));
    }
    async findById(id) {
        const tagEntity = await this.findOneOrFail(id);
        return this.toTag(tagEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toTag(tagEntity) {
        const tag = new tag_1.Tag();
        tag.id = tagEntity.id;
        tag.name = tagEntity.name;
        tag.description = tagEntity.description;
        tag.createdAt = tagEntity.createdAt;
        tag.updatedAt = tagEntity.updatedAt;
        return tag;
    }
    toTagEntity(tag) {
        const tagEntity = new tag_entity_1.TagEntity();
        tagEntity.id = tag.id;
        tagEntity.name = tag.name;
        tagEntity.description = tag.description;
        tagEntity.createdAt = tag.createdAt;
        tagEntity.updatedAt = tag.updatedAt;
        return tagEntity;
    }
};
TagRepository = __decorate([
    (0, typeorm_1.EntityRepository)(tag_entity_1.TagEntity),
    __metadata("design:paramtypes", [])
], TagRepository);
exports.TagRepository = TagRepository;
//# sourceMappingURL=tag.repository.js.map