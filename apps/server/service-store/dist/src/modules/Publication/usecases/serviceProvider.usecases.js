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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProviderUseCases = void 0;
const DelegatedService_dto_1 = require("../controllers/serviceProviders/DelegatedService.dto");
const DelegatedService_1 = require("../domain/serviceProviders/DelegatedService");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const serviceProvider_1 = require("../domain/serviceProviders/serviceProvider");
const serviceProvider_dto_1 = require("../controllers/serviceProviders/serviceProvider.dto");
const serviceProvider_entity_1 = require("../persistence/serviceProviders/serviceProvider.entity");
let ServiceProviderUseCases = class ServiceProviderUseCases {
    constructor(serviceProviderRepository) {
        this.serviceProviderRepository = serviceProviderRepository;
        this.serviceProviderdomain = new serviceProvider_1.ServiceProvider();
        this.logger = new logger_service_1.LoggerService('ServiceProviderService');
    }
    async createServiceProvider(serviceProviderDto) {
        var serviceProvider = new serviceProvider_1.ServiceProvider();
        serviceProvider = serviceProvider_dto_1.CreateServiceProviderDto.fromDTO(serviceProviderDto);
        const result = await this.serviceProviderRepository.insertServiceProvider(serviceProvider);
        this.logger.log('CreateServiceProviderUseCases execute', 'New serviceProvider have been inserted');
        return result;
    }
    async deleteServiceProvider(id) {
        await this.serviceProviderRepository.deleteById(id);
        this.logger.log('DeleteServiceProviderUseCases execute', `ServiceProvider ${id} have been deleted`);
    }
    async getServiceProvider(id) {
        return await this.serviceProviderRepository.findById(id);
    }
    async fetServiceProviders() {
        return await this.serviceProviderRepository.findAll();
    }
    async updateServiceProvider(serviceProviderDto) {
        var serviceProvider = await this.serviceProviderRepository.findById(serviceProviderDto.id);
        if (serviceProvider != null) {
            serviceProvider = serviceProvider_dto_1.UpdateServiceProviderDto.fromDTO(serviceProviderDto);
            await this.serviceProviderRepository.updateServiceProvider(serviceProvider.id, serviceProvider);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateServiceProviderUseCases execute', `ServiceProvider ${serviceProvider.id} have been updated`);
    }
    async addDelegatedService(createDelegatedServiceDto) {
        var delegatedService = new DelegatedService_1.DelegatedService();
        delegatedService = DelegatedService_dto_1.CreateDelegatedServiceDto.fromDTO(createDelegatedServiceDto);
        this.serviceProviderdomain = await this.serviceProviderRepository.findById(createDelegatedServiceDto.providerId);
        this.serviceProviderdomain.addDelegatedService(delegatedService);
        const result = await this.serviceProviderRepository.insertServiceProvider(this.serviceProviderdomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async updateDelegatedService(updateDelegatedServiceDto) {
        var delegatedService = new DelegatedService_1.DelegatedService();
        delegatedService = DelegatedService_dto_1.UpdateDelegatedServiceDto.fromDTO(updateDelegatedServiceDto);
        this.serviceProviderdomain = await this.serviceProviderRepository.findById(updateDelegatedServiceDto.id);
        this.serviceProviderdomain.updateDelegatedService(delegatedService);
        const result = await this.serviceProviderRepository.updateServiceProvider(this.serviceProviderdomain.id, this.serviceProviderdomain);
        this.logger.log('CreateDelegatedServiceUseCases execute', 'New Media have been inserted');
        return result;
    }
    async deleteDelegatedService(id) {
        await this.serviceProviderdomain.removeDelegatedService(id);
        this.logger.log('DeleteDelegatedServiceUseCases execute', `DelegatedService ${id} have been deleted`);
    }
    async updateDelegatedServices(createDelegatedServiceDto) {
        var delegatedService;
        delegatedService = createDelegatedServiceDto.map(item => {
            return DelegatedService_dto_1.CreateDelegatedServiceDto.fromDTO(item);
        });
        this.serviceProviderdomain = await this.serviceProviderRepository.findById(createDelegatedServiceDto[0].providerId);
        await this.serviceProviderdomain.updateDelegatedServices(delegatedService);
        await this.serviceProviderRepository.updateServiceProvider(this.serviceProviderdomain.id, this.serviceProviderdomain);
    }
};
ServiceProviderUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(serviceProvider_entity_1.ServiceProviderEntity)),
    __metadata("design:paramtypes", [Object])
], ServiceProviderUseCases);
exports.ServiceProviderUseCases = ServiceProviderUseCases;
//# sourceMappingURL=serviceProvider.usecases.js.map