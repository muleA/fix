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
const class_validator_1 = require("class-validator");
const ServiceResource_1 = require("../../domain/services/ServiceResource");
class UpdateServiceResourceDto {
    static fromDTO(serviceResourceDto) {
        const serviceResource = new ServiceResource_1.ServiceResource();
        serviceResource.id = serviceResourceDto.id;
        serviceResource.serviceId = serviceResourceDto.serviceId;
        serviceResource.attachmentUrl = serviceResourceDto.attachmentUrl;
        serviceResource.content = serviceResourceDto.content;
        return serviceResource;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateServiceResourceDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateServiceResourceDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceResourceDto.prototype, "attachmentUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceResourceDto.prototype, "content", void 0);
exports.UpdateServiceResourceDto = UpdateServiceResourceDto;
class CreateServiceResourceDto {
    static fromDTO(serviceResourceDto) {
        const serviceResource = new ServiceResource_1.ServiceResource();
        serviceResource.id = serviceResourceDto.id;
        serviceResource.serviceId = serviceResourceDto.serviceId;
        serviceResource.attachmentUrl = serviceResourceDto.attachmentUrl;
        serviceResource.content = serviceResourceDto.content;
        return serviceResource;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceResourceDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceResourceDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceResourceDto.prototype, "attachmentUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceResourceDto.prototype, "content", void 0);
exports.CreateServiceResourceDto = CreateServiceResourceDto;
//# sourceMappingURL=ServiceResource.dto.js.map