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
exports.ServiceCollectionUseCases = void 0;
const ServiceEntry_dto_1 = require("../controllers/serviceCollections/ServiceEntry.dto");
const ServiceEntry_1 = require("../domain/serviceCollections/ServiceEntry");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const serviceCollection_1 = require("../domain/serviceCollections/serviceCollection");
const serviceCollection_repository_1 = require("../persistence/serviceCollections/serviceCollection.repository");
const serviceCollection_dto_1 = require("../controllers/serviceCollections/serviceCollection.dto");
const ServiceResource_dto_1 = require("../controllers/ServiceCollections/ServiceResource.dto");
const ServiceResource_1 = require("../domain/serviceCollections/ServiceResource");
let ServiceCollectionUseCases = class ServiceCollectionUseCases {
    constructor(serviceCollectionRepository) {
        this.serviceCollectionRepository = serviceCollectionRepository;
        this.serviceCollectiondomain = new serviceCollection_1.ServiceCollection();
        this.logger = new logger_service_1.LoggerService('ServiceCollectionService');
    }
    async createServiceCollection(serviceCollectionDto) {
        var serviceCollection = new serviceCollection_1.ServiceCollection();
        serviceCollection = serviceCollection_dto_1.CreateServiceCollectionDto.fromDTO(serviceCollectionDto);
        const result = await this.serviceCollectionRepository.insertServiceCollection(serviceCollection);
        this.logger.log('CreateServiceCollectionUseCases execute', 'New serviceCollection have been inserted');
        return result;
    }
    async deleteServiceCollection(id) {
        await this.serviceCollectionRepository.deleteById(id);
        this.logger.log('DeleteServiceCollectionUseCases execute', `ServiceCollection ${id} have been deleted`);
    }
    async getServiceCollection(id) {
        return await this.serviceCollectionRepository.findById(id);
    }
    async fetServiceCollections() {
        return await this.serviceCollectionRepository.findAll();
    }
    async updateServiceCollection(serviceCollectionDto) {
        var serviceCollection = await this.serviceCollectionRepository.findById(serviceCollectionDto.id);
        if (serviceCollection != null) {
            serviceCollection = serviceCollection_dto_1.UpdateServiceCollectionDto.fromDTO(serviceCollectionDto);
            await this.serviceCollectionRepository.updateServiceCollection(serviceCollection.id, serviceCollection);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateServiceCollectionUseCases execute', `ServiceCollection ${serviceCollection.id} have been updated`);
    }
    async addServiceEntry(createServiceEntryDto) {
        var serviceEntry = new ServiceEntry_1.ServiceEntry();
        serviceEntry = ServiceEntry_dto_1.CreateServiceEntryDto.fromDTO(createServiceEntryDto);
        this.serviceCollectiondomain = await this.serviceCollectionRepository.findById(createServiceEntryDto.id);
        this.serviceCollectiondomain.addServiceEntry(serviceEntry);
        const result = await this.serviceCollectionRepository.insertServiceCollection(this.serviceCollectiondomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async updateServiceEntry(updateServiceEntryDto) {
        var serviceEntry = new ServiceEntry_1.ServiceEntry();
        serviceEntry = ServiceEntry_dto_1.UpdateServiceEntryDto.fromDTO(updateServiceEntryDto);
        this.serviceCollectiondomain = await this.serviceCollectionRepository.findById(updateServiceEntryDto.id);
        this.serviceCollectiondomain.updateServiceEntry(serviceEntry);
        const result = await this.serviceCollectionRepository.updateServiceCollection(this.serviceCollectiondomain.id, this.serviceCollectiondomain);
        this.logger.log('CreateServiceEntryUseCases execute', 'New Media have been inserted');
        return result;
    }
    async deleteServiceEntry(id) {
        await this.serviceCollectiondomain.removeServiceEntry(id);
        this.logger.log('DeleteServiceEntryUseCases execute', `ServiceEntry ${id} have been deleted`);
    }
    async updateServiceEntries(createServiceEntryDto) {
        var serviceEntry;
        serviceEntry = createServiceEntryDto.map(item => {
            return ServiceEntry_dto_1.CreateServiceEntryDto.fromDTO(item);
        });
        this.serviceCollectiondomain = await this.serviceCollectionRepository.findById(createServiceEntryDto[0].id);
        await this.serviceCollectiondomain.updateServiceEntries(serviceEntry);
        await this.serviceCollectionRepository.updateServiceCollection(this.serviceCollectiondomain.id, this.serviceCollectiondomain);
    }
    async addServiceResource(createServiceResourceDto) {
        var serviceResource = new ServiceResource_1.ServiceResource();
        serviceResource = ServiceResource_dto_1.CreateServiceResourceDto.fromDTO(createServiceResourceDto);
        this.serviceCollectiondomain = await this.serviceCollectionRepository.findById(createServiceResourceDto.id);
        this.serviceCollectiondomain.addServiceResource(serviceResource);
        const result = await this.serviceCollectionRepository.insertServiceCollection(this.serviceCollectiondomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async updateServiceResource(updateServiceResourceDto) {
        var serviceResource = new ServiceResource_1.ServiceResource();
        serviceResource = ServiceResource_dto_1.UpdateServiceResourceDto.fromDTO(updateServiceResourceDto);
        this.serviceCollectiondomain = await this.serviceCollectionRepository.findById(updateServiceResourceDto.id);
        this.serviceCollectiondomain.updateServiceResource(serviceResource);
        const result = await this.serviceCollectionRepository.updateServiceCollection(this.serviceCollectiondomain.id, this.serviceCollectiondomain);
        this.logger.log('CreateServiceResourceUseCases execute', 'New Media have been inserted');
        return result;
    }
    async deleteServiceResource(id) {
        await this.serviceCollectiondomain.removeServiceResource(id);
        this.logger.log('DeleteServiceResourceUseCases execute', `ServiceResource ${id} have been deleted`);
    }
    async updateResources(createServiceResourceDto) {
        var serviceResource;
        serviceResource = createServiceResourceDto.map(item => {
            return ServiceResource_dto_1.CreateServiceResourceDto.fromDTO(item);
        });
        this.serviceCollectiondomain = await this.serviceCollectionRepository.findById(createServiceResourceDto[0].id);
        await this.serviceCollectiondomain.updateResources(serviceResource);
        await this.serviceCollectionRepository.updateServiceCollection(this.serviceCollectiondomain.id, this.serviceCollectiondomain);
    }
};
ServiceCollectionUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(serviceCollection_repository_1.ServiceCollectionRepository)),
    __metadata("design:paramtypes", [Object])
], ServiceCollectionUseCases);
exports.ServiceCollectionUseCases = ServiceCollectionUseCases;
//# sourceMappingURL=serviceCollection.usecases.js.map