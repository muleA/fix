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
var ServiceRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRepository = void 0;
const typeorm_1 = require("typeorm");
const service_1 = require("../../domain/services/service");
const service_entity_1 = require("./service.entity");
let ServiceRepository = ServiceRepository_1 = class ServiceRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateService(id, service) {
        const serviceEntity = this.toServiceEntity(service);
        await this.update({ id: service.id }, serviceEntity);
    }
    async insertService(service) {
        const serviceEntity = this.toServiceEntity(service);
        const result = await this.insert(serviceEntity);
        console.log(result.generatedMaps);
        return this.toService(result.generatedMaps[0]);
    }
    async findAll() {
        const servicesEntity = await this.find();
        return servicesEntity.map((serviceEntity) => this.toService(serviceEntity));
    }
    async findById(id) {
        const serviceEntity = await this.findOneOrFail(id);
        return this.toService(serviceEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toService(serviceEntity) {
        const service = new service_1.Service();
        service.id = serviceEntity.id;
        service.name = serviceEntity.name;
        service.description = serviceEntity.description;
        service.code = serviceEntity.code;
        service.fullyQualifiedName = serviceEntity.fullyQualifiedName;
        service.supportedQualifications = serviceEntity.supportedQualifications;
        service.version = serviceEntity.version;
        service.procedure = serviceEntity.procedure;
        service.applicationForm = serviceEntity.applicationForm;
        service.targetCustomers = serviceEntity.targetCustomers;
        service.status = serviceEntity.status;
        service.isPublic = serviceEntity.isPublic;
        service.isPublished = serviceEntity.isPublished;
        service.isArchived = serviceEntity.isArchived;
        service.tags = serviceEntity.tags;
        service.deliveryMethod = serviceEntity.deliveryMethod;
        service.serviceOwnerId = serviceEntity.serviceOwnerId;
        service.averageRating = serviceEntity.averageRating;
        service.enableReview = serviceEntity.enableReview;
        service.policy = serviceEntity.policy;
        service.publishedOn = serviceEntity.publishedOn;
        service.createdAt = serviceEntity.createdAt;
        service.updatedAt = serviceEntity.updatedAt;
        return service;
    }
    toServiceEntity(service) {
        const serviceEntity = new service_entity_1.ServiceEntity();
        serviceEntity.id = service.id;
        serviceEntity.name = service.name;
        serviceEntity.description = service.description;
        serviceEntity.code = service.code;
        serviceEntity.fullyQualifiedName = service.fullyQualifiedName;
        serviceEntity.supportedQualifications = service.supportedQualifications;
        serviceEntity.version = service.version;
        serviceEntity.procedure = service.procedure;
        serviceEntity.applicationForm = service.applicationForm;
        serviceEntity.targetCustomers = service.targetCustomers;
        serviceEntity.status = service.status;
        serviceEntity.isPublic = service.isPublic;
        serviceEntity.isPublished = service.isPublished;
        serviceEntity.isArchived = service.isArchived;
        serviceEntity.tags = service.tags;
        serviceEntity.deliveryMethod = service.deliveryMethod;
        serviceEntity.serviceOwnerId = service.serviceOwnerId;
        serviceEntity.averageRating = service.averageRating;
        serviceEntity.enableReview = service.enableReview;
        serviceEntity.policy = service.policy;
        serviceEntity.publishedOn = service.publishedOn;
        serviceEntity.createdAt = service.createdAt;
        serviceEntity.updatedAt = service.updatedAt;
        return serviceEntity;
    }
};
ServiceRepository = ServiceRepository_1 = __decorate([
    typeorm_1.EntityRepository(ServiceRepository_1),
    __metadata("design:paramtypes", [])
], ServiceRepository);
exports.ServiceRepository = ServiceRepository;
//# sourceMappingURL=service.repository.js.map