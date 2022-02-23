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
exports.CreateServiceProviderDto = exports.UpdateServiceProviderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const address_1 = require("../../domain/ServiceOwners/address");
const ProviderLocation_1 = require("../../domain/ServiceProviders/ProviderLocation");
const serviceProvider_1 = require("../../domain/ServiceProviders/serviceProvider");
const ContactInfo_dto_1 = require("../ServiceOwners/ContactInfo.dto");
const DelegatedService_dto_1 = require("./DelegatedService.dto");
class UpdateServiceProviderDto {
    static fromDTO(serviceProviderDto) {
        const serviceProvider = new serviceProvider_1.ServiceProvider();
        serviceProvider.id = serviceProviderDto.id;
        serviceProvider.shortName = serviceProviderDto.shortName;
        serviceProvider.fullName = serviceProviderDto.fullName;
        serviceProvider.sector = serviceProviderDto.sector;
        serviceProvider.contactInfo = ContactInfo_dto_1.UpdateContactInfoDto.fromDTO(serviceProviderDto.contactInfo);
        serviceProvider.location = serviceProviderDto.location;
        serviceProvider.address = serviceProviderDto.address;
        serviceProvider.delegatedServices =
            serviceProviderDto.delegatedServices.map((item) => DelegatedService_dto_1.UpdateDelegatedServiceDto.fromDTO(item));
        serviceProvider.code = serviceProviderDto.code;
        serviceProvider.organizationId = serviceProviderDto.organizationId;
        serviceProvider.organizationName = serviceProviderDto.organizationName;
        return serviceProvider;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateServiceProviderDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceProviderDto.prototype, "shortName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceProviderDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceProviderDto.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", ProviderLocation_1.ProviderLocation)
], UpdateServiceProviderDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", address_1.Address)
], UpdateServiceProviderDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UpdateServiceProviderDto.prototype, "delegatedServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceProviderDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateServiceProviderDto.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceProviderDto.prototype, "organizationName", void 0);
exports.UpdateServiceProviderDto = UpdateServiceProviderDto;
class CreateServiceProviderDto {
    static fromDTO(serviceProviderDto) {
        const serviceProvider = new serviceProvider_1.ServiceProvider();
        serviceProvider.shortName = serviceProviderDto.shortName;
        serviceProvider.fullName = serviceProviderDto.fullName;
        serviceProvider.sector = serviceProviderDto.sector;
        serviceProvider.contactInfo = ContactInfo_dto_1.CreateContactInfoDto.fromDTO(serviceProviderDto.contactInfo);
        serviceProvider.location = serviceProviderDto.location;
        serviceProvider.address = serviceProviderDto.address;
        serviceProvider.delegatedServices =
            serviceProviderDto.delegatedServices.map((item) => DelegatedService_dto_1.CreateDelegatedServiceDto.fromDTO(item));
        serviceProvider.code = serviceProviderDto.code;
        serviceProvider.organizationId = serviceProviderDto.organizationId;
        serviceProvider.organizationName = serviceProviderDto.organizationName;
        return serviceProvider;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceProviderDto.prototype, "shortName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceProviderDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceProviderDto.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", ProviderLocation_1.ProviderLocation)
], CreateServiceProviderDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", address_1.Address)
], CreateServiceProviderDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateServiceProviderDto.prototype, "delegatedServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceProviderDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceProviderDto.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceProviderDto.prototype, "organizationName", void 0);
exports.CreateServiceProviderDto = CreateServiceProviderDto;
//# sourceMappingURL=serviceProvider.dto.js.map