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
exports.ServiceCollectionRepository = void 0;
const typeorm_1 = require("typeorm");
const serviceCollection_1 = require("../../domain/serviceCollections/serviceCollection");
const serviceCollection_entity_1 = require("./serviceCollection.entity");
let ServiceCollectionRepository = class ServiceCollectionRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateServiceCollection(id, serviceCollection) {
        const serviceCollectionEntity = this.toServiceCollectionEntity(serviceCollection);
        await this.update({ id: serviceCollection.id }, serviceCollectionEntity);
    }
    async insertServiceCollection(serviceCollection) {
        const serviceCollectionEntity = this.toServiceCollectionEntity(serviceCollection);
        const result = await this.insert(serviceCollectionEntity);
        console.log(result.generatedMaps);
        return this.toServiceCollection(result.generatedMaps[0]);
    }
    async findAll() {
        const serviceCollectionsEntity = await this.find();
        return serviceCollectionsEntity.map((serviceCollectionEntity) => this.toServiceCollection(serviceCollectionEntity));
    }
    async findById(id) {
        const serviceCollectionEntity = await this.findOneOrFail(id);
        return this.toServiceCollection(serviceCollectionEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toServiceCollection(serviceCollectionEntity) {
        const serviceCollection = new serviceCollection_1.ServiceCollection();
        serviceCollection.id = serviceCollectionEntity.id;
        serviceCollection.name = serviceCollectionEntity.name;
        serviceCollection.description = serviceCollectionEntity.description;
        serviceCollection.code = serviceCollectionEntity.code;
        serviceCollection.supportedQualifications = serviceCollectionEntity.supportedQualifications;
        serviceCollection.version = serviceCollectionEntity.version;
        serviceCollection.procedure = serviceCollectionEntity.procedure;
        serviceCollection.isPublic = serviceCollectionEntity.isPublic;
        serviceCollection.tags = serviceCollectionEntity.tags;
        serviceCollection.targetCustomers = serviceCollectionEntity.targetCustomers;
        serviceCollection.isArchived = serviceCollectionEntity.isArchived;
        serviceCollection.createdAt = serviceCollectionEntity.createdAt;
        serviceCollection.updatedAt = serviceCollectionEntity.updatedAt;
        return serviceCollection;
    }
    toServiceCollectionEntity(serviceCollection) {
        const serviceCollectionEntity = new serviceCollection_entity_1.ServiceCollectionEntity();
        serviceCollectionEntity.id = serviceCollection.id;
        serviceCollectionEntity.name = serviceCollection.name;
        serviceCollectionEntity.description = serviceCollection.description;
        serviceCollectionEntity.code = serviceCollection.code;
        serviceCollectionEntity.supportedQualifications = serviceCollection.supportedQualifications;
        serviceCollectionEntity.version = serviceCollection.version;
        serviceCollectionEntity.procedure = serviceCollection.procedure;
        serviceCollectionEntity.isPublic = serviceCollection.isPublic;
        serviceCollectionEntity.tags = serviceCollection.tags;
        serviceCollectionEntity.targetCustomers = serviceCollection.targetCustomers;
        serviceCollectionEntity.isArchived = serviceCollection.isArchived;
        serviceCollectionEntity.createdAt = serviceCollection.createdAt;
        serviceCollectionEntity.updatedAt = serviceCollection.updatedAt;
        return serviceCollectionEntity;
    }
};
ServiceCollectionRepository = __decorate([
    (0, typeorm_1.EntityRepository)(serviceCollection_entity_1.ServiceCollectionEntity),
    __metadata("design:paramtypes", [])
], ServiceCollectionRepository);
exports.ServiceCollectionRepository = ServiceCollectionRepository;
//# sourceMappingURL=serviceCollection.repository.js.map