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
exports.CreateServiceCollectionDto = exports.UpdateServiceCollectionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const serviceCollection_1 = require("../../domain/ServiceCollections/serviceCollection");
const ServiceEntry_dto_1 = require("./ServiceEntry.dto");
const ServiceResource_dto_1 = require("./ServiceResource.dto");
class UpdateServiceCollectionDto {
    static fromDTO(serviceCollectionDto) {
        const serviceCollection = new serviceCollection_1.ServiceCollection();
        serviceCollection.id = serviceCollectionDto.id;
        serviceCollection.name = serviceCollectionDto.name;
        serviceCollection.description = serviceCollectionDto.description;
        serviceCollection.code = serviceCollectionDto.code;
        serviceCollection.serviceEntries = serviceCollectionDto.serviceEntries.map(item => ServiceEntry_dto_1.UpdateServiceEntryDto.fromDTO(item));
        serviceCollection.supportedQualifications = serviceCollectionDto.supportedQualifications;
        serviceCollection.version = serviceCollectionDto.version;
        serviceCollection.procedure = serviceCollectionDto.procedure;
        serviceCollection.isPublic = serviceCollectionDto.isPublic;
        serviceCollection.tags = serviceCollectionDto.tags;
        serviceCollection.serviceResources = serviceCollectionDto.serviceResources.map(item => { return ServiceResource_dto_1.UpdateServiceResourceDto.fromDTO(item); });
        serviceCollection.targetCustomers = serviceCollectionDto.targetCustomers;
        serviceCollection.isArchived = serviceCollectionDto.isArchived;
        return serviceCollection;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateServiceCollectionDto.prototype, "serviceEntries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "supportedQualifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], UpdateServiceCollectionDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "procedure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateServiceCollectionDto.prototype, "isPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateServiceCollectionDto.prototype, "serviceResources", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "targetCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateServiceCollectionDto.prototype, "isArchived", void 0);
exports.UpdateServiceCollectionDto = UpdateServiceCollectionDto;
class CreateServiceCollectionDto {
    static fromDTO(serviceCollectionDto) {
        const serviceCollection = new serviceCollection_1.ServiceCollection();
        serviceCollection.id = serviceCollectionDto.id;
        serviceCollection.name = serviceCollectionDto.name;
        serviceCollection.description = serviceCollectionDto.description;
        serviceCollection.code = serviceCollectionDto.code;
        serviceCollection.serviceEntries = serviceCollectionDto.serviceEntries.map(item => ServiceEntry_dto_1.CreateServiceEntryDto.fromDTO(item));
        serviceCollection.supportedQualifications = serviceCollectionDto.supportedQualifications;
        serviceCollection.version = serviceCollectionDto.version;
        serviceCollection.procedure = serviceCollectionDto.procedure;
        serviceCollection.isPublic = serviceCollectionDto.isPublic;
        serviceCollection.tags = serviceCollectionDto.tags;
        serviceCollection.serviceResources = serviceCollectionDto.serviceResources.map(item => ServiceResource_dto_1.CreateServiceResourceDto.fromDTO(item));
        serviceCollection.targetCustomers = serviceCollectionDto.targetCustomers;
        serviceCollection.isArchived = serviceCollectionDto.isArchived;
        return serviceCollection;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateServiceCollectionDto.prototype, "serviceEntries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "supportedQualifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], CreateServiceCollectionDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "procedure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateServiceCollectionDto.prototype, "isPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateServiceCollectionDto.prototype, "serviceResources", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "targetCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateServiceCollectionDto.prototype, "isArchived", void 0);
exports.CreateServiceCollectionDto = CreateServiceCollectionDto;
//# sourceMappingURL=serviceCollection.dto.js.map