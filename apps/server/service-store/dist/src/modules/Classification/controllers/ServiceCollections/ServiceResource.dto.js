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
exports.CreateServiceResourceDto = exports.UpdateServiceResourceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const ServiceResource_1 = require("../../domain/serviceCollections/ServiceResource");
class UpdateServiceResourceDto {
    static fromDTO(serviceResourceDto) {
        const serviceResource = new ServiceResource_1.ServiceResource();
        serviceResource.id = serviceResourceDto.id;
        serviceResource.serviceCollectionId = serviceResourceDto.serviceCollectionId;
        serviceResource.attachmentUrl = serviceResourceDto.attachmentUrl;
        serviceResource.content = serviceResourceDto.content;
        return serviceResource;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceResourceDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceResourceDto.prototype, "serviceCollectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceResourceDto.prototype, "attachmentUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceResourceDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UpdateServiceResourceDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UpdateServiceResourceDto.prototype, "updatedAt", void 0);
exports.UpdateServiceResourceDto = UpdateServiceResourceDto;
class CreateServiceResourceDto {
    static fromDTO(serviceResourceDto) {
        const serviceResource = new ServiceResource_1.ServiceResource();
        serviceResource.id = serviceResourceDto.id;
        serviceResource.serviceCollectionId = serviceResourceDto.serviceCollectionId;
        serviceResource.attachmentUrl = serviceResourceDto.attachmentUrl;
        serviceResource.content = serviceResourceDto.content;
        return serviceResource;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceResourceDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceResourceDto.prototype, "serviceCollectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceResourceDto.prototype, "attachmentUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceResourceDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateServiceResourceDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateServiceResourceDto.prototype, "updatedAt", void 0);
exports.CreateServiceResourceDto = CreateServiceResourceDto;
//# sourceMappingURL=ServiceResource.dto.js.map