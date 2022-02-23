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
        serviceCollection.serviceEntries = serviceCollectionDto.serviceEntries.map(item => { return ServiceEntry_dto_1.UpdateServiceEntryDto.fromDTO(item); });
        serviceCollection.supportedQualifications = serviceCollectionDto.supportedQualifications;
        serviceCollection.version = serviceCollectionDto.version;
        serviceCollection.procedure = serviceCollectionDto.procedure;
        serviceCollection.isPublic = serviceCollectionDto.isPublic;
        serviceCollection.tags = serviceCollectionDto.tags;
        serviceCollection.resources = serviceCollectionDto.resources.map(item => { return ServiceResource_dto_1.UpdateServiceResourceDto.fromDTO(item); });
        serviceCollection.targetCustomers = serviceCollectionDto.targetCustomers;
        serviceCollection.isArchived = serviceCollectionDto.isArchived;
        serviceCollection.createdAt = serviceCollectionDto.createdAt;
        serviceCollection.updatedAt = serviceCollectionDto.updatedAt;
        return serviceCollection;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UpdateServiceCollectionDto.prototype, "serviceEntries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "supportedQualifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateServiceCollectionDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "procedure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UpdateServiceCollectionDto.prototype, "isPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UpdateServiceCollectionDto.prototype, "resources", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateServiceCollectionDto.prototype, "targetCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UpdateServiceCollectionDto.prototype, "isArchived", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UpdateServiceCollectionDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UpdateServiceCollectionDto.prototype, "updatedAt", void 0);
exports.UpdateServiceCollectionDto = UpdateServiceCollectionDto;
class CreateServiceCollectionDto {
    static fromDTO(serviceCollectionDto) {
        const serviceCollection = new serviceCollection_1.ServiceCollection();
        serviceCollection.id = serviceCollectionDto.id;
        serviceCollection.name = serviceCollectionDto.name;
        serviceCollection.description = serviceCollectionDto.description;
        serviceCollection.code = serviceCollectionDto.code;
        serviceCollection.serviceEntries = serviceCollectionDto.serviceEntries.map(item => { return ServiceEntry_dto_1.CreateServiceEntryDto.fromDTO(item); });
        serviceCollection.supportedQualifications = serviceCollectionDto.supportedQualifications;
        serviceCollection.version = serviceCollectionDto.version;
        serviceCollection.procedure = serviceCollectionDto.procedure;
        serviceCollection.isPublic = serviceCollectionDto.isPublic;
        serviceCollection.tags = serviceCollectionDto.tags;
        serviceCollection.resources = serviceCollectionDto.resources.map(item => { return ServiceResource_dto_1.CreateServiceResourceDto.fromDTO(item); });
        serviceCollection.targetCustomers = serviceCollectionDto.targetCustomers;
        serviceCollection.isArchived = serviceCollectionDto.isArchived;
        serviceCollection.createdAt = serviceCollectionDto.createdAt;
        serviceCollection.updatedAt = serviceCollectionDto.updatedAt;
        return serviceCollection;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateServiceCollectionDto.prototype, "serviceEntries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "supportedQualifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateServiceCollectionDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "procedure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateServiceCollectionDto.prototype, "isPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateServiceCollectionDto.prototype, "resources", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateServiceCollectionDto.prototype, "targetCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateServiceCollectionDto.prototype, "isArchived", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateServiceCollectionDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateServiceCollectionDto.prototype, "updatedAt", void 0);
exports.CreateServiceCollectionDto = CreateServiceCollectionDto;
//# sourceMappingURL=serviceCollection.dto.js.map