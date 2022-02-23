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
exports.CreateTagDto = exports.UpdateTagDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const tag_1 = require("../../domain/Tags/tag");
class UpdateTagDto {
    static fromDTO(tagDto) {
        const tag = new tag_1.Tag();
        tag.id = tagDto.id;
        tag.name = tagDto.name;
        tag.description = tagDto.description;
        tag.createdAt = tagDto.createdAt;
        tag.updatedAt = tagDto.updatedAt;
        return tag;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateTagDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateTagDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateTagDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UpdateTagDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UpdateTagDto.prototype, "updatedAt", void 0);
exports.UpdateTagDto = UpdateTagDto;
class CreateTagDto {
    static fromDTO(tagDto) {
        const tag = new tag_1.Tag();
        tag.id = tagDto.id;
        tag.name = tagDto.name;
        tag.description = tagDto.description;
        tag.createdAt = tagDto.createdAt;
        tag.updatedAt = tagDto.updatedAt;
        return tag;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTagDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTagDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTagDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateTagDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateTagDto.prototype, "updatedAt", void 0);
exports.CreateTagDto = CreateTagDto;
//# sourceMappingURL=tag.dto.js.map