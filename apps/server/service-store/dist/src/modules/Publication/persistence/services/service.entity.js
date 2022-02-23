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
exports.ServiceEntity = void 0;
const typeorm_1 = require("typeorm");
const ServiceFee_entity_1 = require("./ServiceFee.entity");
const Language_entity_1 = require("./Language.entity");
const ProcessingTime_entity_1 = require("./ProcessingTime.entity");
const ServiceDependency_entity_1 = require("./ServiceDependency.entity");
const ServiceResource_entity_1 = require("./ServiceResource.entity");
const CommonEntity_1 = require("../../../shared/CommonEntity");
const ApplicationForm_1 = require("../../domain/services/ApplicationForm");
const Media_entity_1 = require("./Media.entity");
let ServiceEntity = class ServiceEntity extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ServiceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "fullyQualifiedName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Media_entity_1.MediaEntity, media => media.service, { cascade: true }),
    __metadata("design:type", Array)
], ServiceEntity.prototype, "medias", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "supportedQualifications", void 0);
__decorate([
    (0, typeorm_1.Column)('double precision'),
    __metadata("design:type", Number)
], ServiceEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "procedure", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ServiceFee_entity_1.ServiceFeeEntity, serviceFee => serviceFee.service, { cascade: true }),
    __metadata("design:type", Array)
], ServiceEntity.prototype, "serviceFees", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProcessingTime_entity_1.ProcessingTimeEntity, processingTime => processingTime.service, { cascade: true }),
    __metadata("design:type", Array)
], ServiceEntity.prototype, "processingTimes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ServiceDependency_entity_1.ServiceDependencyEntity, serviceDependency => serviceDependency.service, { cascade: true }),
    __metadata("design:type", Array)
], ServiceEntity.prototype, "serviceDependencies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Language_entity_1.LanguageEntity, language => language.service, { cascade: true }),
    __metadata("design:type", Array)
], ServiceEntity.prototype, "languages", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb'),
    __metadata("design:type", ApplicationForm_1.ApplicationForm)
], ServiceEntity.prototype, "applicationForm", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ServiceResource_entity_1.ServiceResourceEntity, serviceResource => serviceResource.service, { cascade: true }),
    __metadata("design:type", Array)
], ServiceEntity.prototype, "serviceResources", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "targetCustomers", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ServiceEntity.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ServiceEntity.prototype, "isPublished", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ServiceEntity.prototype, "isArchived", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "deliveryMethod", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "serviceOwnerId", void 0);
__decorate([
    (0, typeorm_1.Column)('double precision'),
    __metadata("design:type", Number)
], ServiceEntity.prototype, "averageRating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ServiceEntity.prototype, "enableReview", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceEntity.prototype, "policy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ServiceEntity.prototype, "publishedOn", void 0);
ServiceEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "services" })
], ServiceEntity);
exports.ServiceEntity = ServiceEntity;
//# sourceMappingURL=service.entity.js.map