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
var ServiceProviderRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProviderRepository = void 0;
serviceProvider_1.ServiceProvider;
const typeorm_1 = require("typeorm");
const serviceProvider_1 = require("../../domain/serviceProviders/serviceProvider");
const serviceProvider_entity_1 = require("./serviceProvider.entity");
let ServiceProviderRepository = ServiceProviderRepository_1 = class ServiceProviderRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateServiceProvider(id, serviceProvider) {
        const serviceProviderEntity = this.toServiceProviderEntity(serviceProvider);
        await this.update({ id: serviceProvider.id }, serviceProviderEntity);
    }
    async insertServiceProvider(serviceProvider) {
        const serviceProviderEntity = this.toServiceProviderEntity(serviceProvider);
        const result = await this.insert(serviceProviderEntity);
        console.log(result.generatedMaps);
        return this.toServiceProvider(result.generatedMaps[0]);
    }
    async findAll() {
        const serviceProvidersEntity = await this.find();
        return serviceProvidersEntity.map((serviceProviderEntity) => this.toServiceProvider(serviceProviderEntity));
    }
    async findById(id) {
        const serviceProviderEntity = await this.findOneOrFail(id);
        return this.toServiceProvider(serviceProviderEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toServiceProvider(serviceProviderEntity) {
        const serviceProvider = new serviceProvider_1.ServiceProvider();
        serviceProvider.id = serviceProviderEntity.id;
        serviceProvider.shortName = serviceProviderEntity.shortName;
        serviceProvider.fullName = serviceProviderEntity.fullName;
        serviceProvider.sector = serviceProviderEntity.sector;
        serviceProvider.contactInfo = serviceProviderEntity.contactInfo;
        serviceProvider.location = serviceProviderEntity.location;
        serviceProvider.address = serviceProviderEntity.address;
        serviceProvider.delegatedServices = serviceProviderEntity.delegatedServices;
        serviceProvider.code = serviceProviderEntity.code;
        serviceProvider.organizationId = serviceProviderEntity.organizationId;
        serviceProvider.organizationName = serviceProviderEntity.organizationName;
        serviceProvider.createdAt = serviceProviderEntity.createdAt;
        serviceProvider.updatedAt = serviceProviderEntity.updatedAt;
        return serviceProvider;
    }
    toServiceProviderEntity(serviceProvider) {
        const serviceProviderEntity = new serviceProvider_entity_1.ServiceProviderEntity();
        serviceProviderEntity.id = serviceProvider.id;
        serviceProviderEntity.shortName = serviceProvider.shortName;
        serviceProviderEntity.fullName = serviceProvider.fullName;
        serviceProviderEntity.sector = serviceProvider.sector;
        serviceProviderEntity.contactInfo = serviceProvider.contactInfo;
        serviceProviderEntity.location = serviceProvider.location;
        serviceProviderEntity.address = serviceProvider.address;
        serviceProviderEntity.code = serviceProvider.code;
        serviceProviderEntity.organizationId = serviceProvider.organizationId;
        serviceProviderEntity.organizationName = serviceProvider.organizationName;
        return serviceProviderEntity;
    }
};
ServiceProviderRepository = ServiceProviderRepository_1 = __decorate([
    (0, typeorm_1.EntityRepository)(ServiceProviderRepository_1),
    __metadata("design:paramtypes", [])
], ServiceProviderRepository);
exports.ServiceProviderRepository = ServiceProviderRepository;
//# sourceMappingURL=serviceProvider.repository.js.map