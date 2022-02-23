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
exports.ServiceOwnerRepository = void 0;
const typeorm_1 = require("typeorm");
const serviceOwner_1 = require("../../domain/serviceOwners/serviceOwner");
const serviceOwner_entity_1 = require("./serviceOwner.entity");
let ServiceOwnerRepository = class ServiceOwnerRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateServiceOwner(id, serviceOwner) {
        const serviceOwnerEntity = this.toServiceOwnerEntity(serviceOwner);
        await this.update({ id: serviceOwner.id }, serviceOwnerEntity);
    }
    async insertServiceOwner(serviceOwner) {
        const serviceOwnerEntity = this.toServiceOwnerEntity(serviceOwner);
        const result = await this.insert(serviceOwnerEntity);
        console.log(result.generatedMaps);
        return this.toServiceOwner(result.generatedMaps[0]);
    }
    async findAll() {
        const serviceOwnersEntity = await this.find();
        return serviceOwnersEntity.map((serviceOwnerEntity) => this.toServiceOwner(serviceOwnerEntity));
    }
    async findById(id) {
        const serviceOwnerEntity = await this.findOneOrFail(id);
        return this.toServiceOwner(serviceOwnerEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toServiceOwner(serviceOwnerEntity) {
        const serviceOwner = new serviceOwner_1.ServiceOwner();
        serviceOwner.id = serviceOwnerEntity.id;
        serviceOwner.shortName = serviceOwnerEntity.shortName;
        serviceOwner.fullName = serviceOwnerEntity.fullName;
        serviceOwner.sector = serviceOwnerEntity.sector;
        serviceOwner.code = serviceOwnerEntity.code;
        serviceOwner.organizationId = serviceOwnerEntity.organizationId;
        serviceOwner.organizationName = serviceOwnerEntity.organizationName;
        serviceOwner.createdAt = serviceOwnerEntity.createdAt;
        serviceOwner.updatedAt = serviceOwnerEntity.updatedAt;
        return serviceOwner;
    }
    toServiceOwnerEntity(serviceOwner) {
        const serviceOwnerEntity = new serviceOwner_entity_1.ServiceOwnerEntity();
        serviceOwnerEntity.id = serviceOwner.id;
        serviceOwnerEntity.shortName = serviceOwner.shortName;
        serviceOwnerEntity.fullName = serviceOwner.fullName;
        serviceOwnerEntity.sector = serviceOwner.sector;
        serviceOwnerEntity.code = serviceOwner.code;
        serviceOwnerEntity.organizationId = serviceOwner.organizationId;
        serviceOwnerEntity.organizationName = serviceOwner.organizationName;
        serviceOwnerEntity.createdAt = serviceOwner.createdAt;
        serviceOwnerEntity.updatedAt = serviceOwner.updatedAt;
        return serviceOwnerEntity;
    }
};
ServiceOwnerRepository = __decorate([
    (0, typeorm_1.EntityRepository)(serviceOwner_entity_1.ServiceOwnerEntity),
    __metadata("design:paramtypes", [])
], ServiceOwnerRepository);
exports.ServiceOwnerRepository = ServiceOwnerRepository;
//# sourceMappingURL=serviceOwner.repository.js.map