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
exports.ServiceProviderEntity = void 0;
const CommonEntity_1 = require("../../../shared/CommonEntity");
const typeorm_1 = require("typeorm");
const DelegatedService_entity_1 = require("./DelegatedService.entity");
const ContactInfo_1 = require("../../domain/serviceOwners/ContactInfo");
const address_1 = require("../../domain/ServiceOwners/address");
const ProviderLocation_1 = require("../../domain/ServiceProviders/ProviderLocation");
let ServiceProviderEntity = class ServiceProviderEntity extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ServiceProviderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceProviderEntity.prototype, "shortName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceProviderEntity.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceProviderEntity.prototype, "sector", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb'),
    __metadata("design:type", ContactInfo_1.ContactInfo)
], ServiceProviderEntity.prototype, "contactInfo", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb'),
    __metadata("design:type", ProviderLocation_1.ProviderLocation)
], ServiceProviderEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb'),
    __metadata("design:type", address_1.Address)
], ServiceProviderEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => DelegatedService_entity_1.DelegatedServiceEntity, (delegatedService) => delegatedService.serviceProvider, { cascade: true }),
    __metadata("design:type", Array)
], ServiceProviderEntity.prototype, "delegatedServices", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceProviderEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceProviderEntity.prototype, "organizationId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceProviderEntity.prototype, "organizationName", void 0);
ServiceProviderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'serviceProvider' })
], ServiceProviderEntity);
exports.ServiceProviderEntity = ServiceProviderEntity;
//# sourceMappingURL=serviceProvider.entity.js.map