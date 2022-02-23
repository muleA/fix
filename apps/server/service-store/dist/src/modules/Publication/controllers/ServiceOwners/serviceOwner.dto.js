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
exports.CreateServiceOwnerDto = exports.UpdateServiceOwnerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const address_1 = require("../../domain/ServiceOwners/address");
const serviceOwner_1 = require("../../domain/ServiceOwners/serviceOwner");
const ContactInfo_dto_1 = require("./ContactInfo.dto");
class UpdateServiceOwnerDto {
    static fromDTO(serviceOwnerDto) {
        const serviceOwner = new serviceOwner_1.ServiceOwner();
        serviceOwner.id = serviceOwnerDto.id;
        serviceOwner.shortName = serviceOwnerDto.shortName;
        serviceOwner.fullName = serviceOwnerDto.fullName;
        serviceOwner.sector = serviceOwnerDto.sector;
        serviceOwner.contactInfo = ContactInfo_dto_1.UpdateContactInfoDto.fromDTO(serviceOwnerDto.contactInfo);
        serviceOwner.address = serviceOwnerDto.address;
        serviceOwner.code = serviceOwnerDto.code;
        serviceOwner.organizationId = serviceOwnerDto.organizationId;
        serviceOwner.organizationName = serviceOwnerDto.organizationName;
        return serviceOwner;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateServiceOwnerDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceOwnerDto.prototype, "shortName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceOwnerDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceOwnerDto.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", address_1.Address)
], UpdateServiceOwnerDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceOwnerDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceOwnerDto.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceOwnerDto.prototype, "organizationName", void 0);
exports.UpdateServiceOwnerDto = UpdateServiceOwnerDto;
class CreateServiceOwnerDto {
    static fromDTO(serviceOwnerDto) {
        const serviceOwner = new serviceOwner_1.ServiceOwner();
        serviceOwner.shortName = serviceOwnerDto.shortName;
        serviceOwner.fullName = serviceOwnerDto.fullName;
        serviceOwner.sector = serviceOwnerDto.sector;
        serviceOwner.contactInfo = ContactInfo_dto_1.CreateContactInfoDto.fromDTO(serviceOwnerDto.contactInfo);
        serviceOwner.address = serviceOwnerDto.address;
        serviceOwner.code = serviceOwnerDto.code;
        serviceOwner.organizationId = serviceOwnerDto.organizationId;
        serviceOwner.organizationName = serviceOwnerDto.organizationName;
        return serviceOwner;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceOwnerDto.prototype, "shortName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceOwnerDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceOwnerDto.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", address_1.Address)
], CreateServiceOwnerDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceOwnerDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceOwnerDto.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceOwnerDto.prototype, "organizationName", void 0);
exports.CreateServiceOwnerDto = CreateServiceOwnerDto;
//# sourceMappingURL=serviceOwner.dto.js.map