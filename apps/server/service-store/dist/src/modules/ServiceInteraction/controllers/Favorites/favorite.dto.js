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
exports.CreateFavoriteDto = exports.UpdateFavoriteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const favorite_1 = require("../../domain/Favorites/favorite");
class UpdateFavoriteDto {
    static fromDTO(favoriteDto) {
        const favorite = new favorite_1.Favorite();
        favorite.id = favoriteDto.id;
        favorite.serviceName = favoriteDto.serviceName;
        favorite.serviceId = favoriteDto.serviceId;
        favorite.userId = favoriteDto.userId;
        return favorite;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateFavoriteDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateFavoriteDto.prototype, "serviceName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateFavoriteDto.prototype, "serviceId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateFavoriteDto.prototype, "userId", void 0);
exports.UpdateFavoriteDto = UpdateFavoriteDto;
class CreateFavoriteDto {
    static fromDTO(favoriteDto) {
        const favorite = new favorite_1.Favorite();
        favorite.serviceName = favoriteDto.serviceName;
        favorite.serviceId = favoriteDto.serviceId;
        favorite.userId = favoriteDto.userId;
        return favorite;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFavoriteDto.prototype, "serviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFavoriteDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFavoriteDto.prototype, "userId", void 0);
exports.CreateFavoriteDto = CreateFavoriteDto;
//# sourceMappingURL=favorite.dto.js.map