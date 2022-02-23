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
exports.ServiceCollectionEntity = void 0;
const ServiceResource_entity_1 = require("../../../Publication/persistence/services/ServiceResource.entity");
const CommonEntity_1 = require("../../../shared/CommonEntity");
const typeorm_1 = require("typeorm");
const ServiceEntry_entity_1 = require("./ServiceEntry.entity");
let ServiceCollectionEntity = class ServiceCollectionEntity extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ServiceCollectionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], ServiceCollectionEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description' }),
    __metadata("design:type", String)
], ServiceCollectionEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code' }),
    __metadata("design:type", String)
], ServiceCollectionEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ServiceEntry_entity_1.ServiceEntryEntity, serviceEntry => serviceEntry.serviceCollectionId),
    __metadata("design:type", Array)
], ServiceCollectionEntity.prototype, "serviceEntries", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'supportedQualifications' }),
    __metadata("design:type", String)
], ServiceCollectionEntity.prototype, "supportedQualifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'version' }),
    __metadata("design:type", Number)
], ServiceCollectionEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'procedure' }),
    __metadata("design:type", String)
], ServiceCollectionEntity.prototype, "procedure", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isPublic' }),
    __metadata("design:type", Boolean)
], ServiceCollectionEntity.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tags' }),
    __metadata("design:type", String)
], ServiceCollectionEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ServiceResource_entity_1.ServiceResourceEntity, resource => resource.service),
    __metadata("design:type", Array)
], ServiceCollectionEntity.prototype, "resources", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'targetCustomers' }),
    __metadata("design:type", String)
], ServiceCollectionEntity.prototype, "targetCustomers", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isArchived' }),
    __metadata("design:type", Boolean)
], ServiceCollectionEntity.prototype, "isArchived", void 0);
ServiceCollectionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "serviceCollection" })
], ServiceCollectionEntity);
exports.ServiceCollectionEntity = ServiceCollectionEntity;
//# sourceMappingURL=serviceCollection.entity.js.map