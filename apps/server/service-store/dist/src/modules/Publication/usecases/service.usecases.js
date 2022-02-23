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
exports.ServiceUseCases = void 0;
const Media_dto_1 = require("../controllers/services/Media.dto");
const Media_1 = require("../domain/services/Media");
const ServiceFee_dto_1 = require("../controllers/services/ServiceFee.dto");
const ServiceFee_1 = require("../domain/services/ServiceFee");
const ProcessingTime_dto_1 = require("../controllers/services/ProcessingTime.dto");
const ProcessingTime_1 = require("../domain/services/ProcessingTime");
const ServiceDependency_dto_1 = require("../controllers/services/ServiceDependency.dto");
const ServiceDependency_1 = require("../domain/services/ServiceDependency");
const Language_dto_1 = require("../controllers/services/Language.dto");
const Language_1 = require("../domain/services/Language");
const ServiceResource_dto_1 = require("../controllers/services/ServiceResource.dto");
const ServiceResource_1 = require("../domain/services/ServiceResource");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const service_1 = require("../domain/services/service");
const service_repository_1 = require("../persistence/services/service.repository");
const service_dto_1 = require("../controllers/services/service.dto");
let ServiceUseCases = class ServiceUseCases {
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
        this.servicedomain = new service_1.Service();
        this.logger = new logger_service_1.LoggerService('ServiceService');
    }
    async createService(serviceDto) {
        var service = new service_1.Service();
        service = service_dto_1.CreateServiceDto.fromDTO(serviceDto);
        const result = await this.serviceRepository.insertService(service);
        this.logger.log('CreateServiceUseCases execute', 'New service have been inserted');
        return result;
    }
    async deleteService(id) {
        await this.serviceRepository.deleteById(id);
        this.logger.log('DeleteServiceUseCases execute', `Service ${id} have been deleted`);
    }
    async getService(id) {
        return await this.serviceRepository.findById(id);
    }
    async fetServices() {
        return await this.serviceRepository.findAll();
    }
    async updateService(serviceDto) {
        var service = await this.serviceRepository.findById(serviceDto.id);
        if (service != null) {
            service = service_dto_1.UpdateServiceDto.fromDTO(serviceDto);
            await this.serviceRepository.updateService(service.id, service);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateServiceUseCases execute', `Service ${service.id} have been updated`);
    }
    async addMedia(createMediaDto) {
        var media = new Media_1.Media();
        media = Media_dto_1.CreateMediaDto.fromDTO(createMediaDto);
        this.servicedomain = await this.serviceRepository.findById(createMediaDto.id);
        this.servicedomain.addMedia(media);
        const result = await this.serviceRepository.insertService(this.servicedomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async updateMedia(updateMediaDto) {
        var media = new Media_1.Media();
        media = Media_dto_1.UpdateMediaDto.fromDTO(updateMediaDto);
        this.servicedomain = await this.serviceRepository.findById(updateMediaDto.id);
        this.servicedomain.updateMedia(media);
        const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async deleteMedia(id) {
        await this.servicedomain.removeMedia(id);
        this.logger.log('DeleteMediaUseCases execute', `Media ${id} have been deleted`);
    }
    async updateMedias(createMediaDto) {
        var media;
        media = createMediaDto.map(item => {
            return Media_dto_1.CreateMediaDto.fromDTO(item);
        });
        this.servicedomain = await this.serviceRepository.findById(createMediaDto[0].id);
        await this.servicedomain.updateMedias(media);
        await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    }
    async addServiceFee(createServiceFeeDto) {
        var serviceFee = new ServiceFee_1.ServiceFee();
        serviceFee = ServiceFee_dto_1.CreateServiceFeeDto.fromDTO(createServiceFeeDto);
        this.servicedomain = await this.serviceRepository.findById(createServiceFeeDto.id);
        this.servicedomain.addServiceFee(serviceFee);
        const result = await this.serviceRepository.insertService(this.servicedomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async updateServiceFee(updateServiceFeeDto) {
        var serviceFee = new ServiceFee_1.ServiceFee();
        serviceFee = ServiceFee_dto_1.UpdateServiceFeeDto.fromDTO(updateServiceFeeDto);
        this.servicedomain = await this.serviceRepository.findById(updateServiceFeeDto.id);
        this.servicedomain.updateServiceFee(serviceFee);
        const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
        this.logger.log('CreateServiceFeeUseCases execute', 'New Media have been inserted');
        return result;
    }
    async deleteServiceFee(id) {
        await this.servicedomain.removeServiceFee(id);
        this.logger.log('DeleteServiceFeeUseCases execute', `ServiceFee ${id} have been deleted`);
    }
    async updateServiceFees(createServiceFeeDto) {
        var serviceFee;
        serviceFee = createServiceFeeDto.map(item => {
            return ServiceFee_dto_1.CreateServiceFeeDto.fromDTO(item);
        });
        this.servicedomain = await this.serviceRepository.findById(createServiceFeeDto[0].id);
        await this.servicedomain.updateServiceFees(serviceFee);
        await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    }
    async addProcessingTime(createProcessingTimeDto) {
        var processingTime = new ProcessingTime_1.ProcessingTime();
        processingTime = ProcessingTime_dto_1.CreateProcessingTimeDto.fromDTO(createProcessingTimeDto);
        this.servicedomain = await this.serviceRepository.findById(createProcessingTimeDto.id);
        this.servicedomain.addProcessingTime(processingTime);
        const result = await this.serviceRepository.insertService(this.servicedomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async updateProcessingTime(updateProcessingTimeDto) {
        var processingTime = new ProcessingTime_1.ProcessingTime();
        processingTime = ProcessingTime_dto_1.UpdateProcessingTimeDto.fromDTO(updateProcessingTimeDto);
        this.servicedomain = await this.serviceRepository.findById(updateProcessingTimeDto.id);
        this.servicedomain.updateProcessingTime(processingTime);
        const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
        this.logger.log('CreateProcessingTimeUseCases execute', 'New Media have been inserted');
        return result;
    }
    async deleteProcessingTime(id) {
        await this.servicedomain.removeProcessingTime(id);
        this.logger.log('DeleteProcessingTimeUseCases execute', `ProcessingTime ${id} have been deleted`);
    }
    async updateProcessingTimes(createProcessingTimeDto) {
        var processingTime;
        processingTime = createProcessingTimeDto.map(item => {
            return ProcessingTime_dto_1.CreateProcessingTimeDto.fromDTO(item);
        });
        this.servicedomain = await this.serviceRepository.findById(createProcessingTimeDto[0].id);
        await this.servicedomain.updateProcessingTimes(processingTime);
        await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    }
    async addServiceDependency(createServiceDependencyDto) {
        var serviceDependency = new ServiceDependency_1.ServiceDependency();
        serviceDependency = ServiceDependency_dto_1.CreateServiceDependencyDto.fromDTO(createServiceDependencyDto);
        this.servicedomain = await this.serviceRepository.findById(createServiceDependencyDto.id);
        this.servicedomain.addServiceDependency(serviceDependency);
        const result = await this.serviceRepository.insertService(this.servicedomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async updateServiceDependency(updateServiceDependencyDto) {
        var serviceDependency = new ServiceDependency_1.ServiceDependency();
        serviceDependency = ServiceDependency_dto_1.UpdateServiceDependencyDto.fromDTO(updateServiceDependencyDto);
        this.servicedomain = await this.serviceRepository.findById(updateServiceDependencyDto.id);
        this.servicedomain.updateServiceDependency(serviceDependency);
        const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
        this.logger.log('CreateServiceDependencyUseCases execute', 'New Media have been inserted');
        return result;
    }
    async deleteServiceDependency(id) {
        await this.servicedomain.removeServiceDependency(id);
        this.logger.log('DeleteServiceDependencyUseCases execute', `ServiceDependency ${id} have been deleted`);
    }
    async updateServiceDependencies(createServiceDependencyDto) {
        var serviceDependency;
        serviceDependency = createServiceDependencyDto.map(item => {
            return ServiceDependency_dto_1.CreateServiceDependencyDto.fromDTO(item);
        });
        this.servicedomain = await this.serviceRepository.findById(createServiceDependencyDto[0].id);
        await this.servicedomain.updateServiceDependencies(serviceDependency);
        await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    }
    async addLanguage(createLanguageDto) {
        var language = new Language_1.Language();
        language = Language_dto_1.CreateLanguageDto.fromDTO(createLanguageDto);
        this.servicedomain = await this.serviceRepository.findById(createLanguageDto.id);
        this.servicedomain.addLanguage(language);
        const result = await this.serviceRepository.insertService(this.servicedomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async updateLanguage(updateLanguageDto) {
        var language = new Language_1.Language();
        language = Language_dto_1.UpdateLanguageDto.fromDTO(updateLanguageDto);
        this.servicedomain = await this.serviceRepository.findById(updateLanguageDto.id);
        this.servicedomain.updateLanguage(language);
        const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
        this.logger.log('CreateLanguageUseCases execute', 'New Media have been inserted');
        return result;
    }
    async deleteLanguage(id) {
        await this.servicedomain.removeLanguage(id);
        this.logger.log('DeleteLanguageUseCases execute', `Language ${id} have been deleted`);
    }
    async updateLanguages(createLanguageDto) {
        var language;
        language = createLanguageDto.map(item => {
            return Language_dto_1.CreateLanguageDto.fromDTO(item);
        });
        this.servicedomain = await this.serviceRepository.findById(createLanguageDto[0].id);
        await this.servicedomain.updateLanguages(language);
        await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    }
    async addServiceResource(createServiceResourceDto) {
        var serviceResource = new ServiceResource_1.ServiceResource();
        serviceResource = ServiceResource_dto_1.CreateServiceResourceDto.fromDTO(createServiceResourceDto);
        this.servicedomain = await this.serviceRepository.findById(createServiceResourceDto.id);
        this.servicedomain.addServiceResource(serviceResource);
        const result = await this.serviceRepository.insertService(this.servicedomain);
        this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
        return result;
    }
    async updateServiceResource(updateServiceResourceDto) {
        var serviceResource = new ServiceResource_1.ServiceResource();
        serviceResource = ServiceResource_dto_1.UpdateServiceResourceDto.fromDTO(updateServiceResourceDto);
        this.servicedomain = await this.serviceRepository.findById(updateServiceResourceDto.id);
        this.servicedomain.updateServiceResource(serviceResource);
        const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
        this.logger.log('CreateServiceResourceUseCases execute', 'New Media have been inserted');
        return result;
    }
    async deleteServiceResource(id) {
        await this.servicedomain.removeServiceResource(id);
        this.logger.log('DeleteServiceResourceUseCases execute', `ServiceResource ${id} have been deleted`);
    }
    async updateResources(createServiceResourceDto) {
        var serviceResource;
        serviceResource = createServiceResourceDto.map(item => {
            return ServiceResource_dto_1.CreateServiceResourceDto.fromDTO(item);
        });
        this.servicedomain = await this.serviceRepository.findById(createServiceResourceDto[0].id);
        await this.servicedomain.updateResources(serviceResource);
        await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    }
};
ServiceUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(service_repository_1.ServiceRepository)),
    __metadata("design:paramtypes", [service_repository_1.ServiceRepository])
], ServiceUseCases);
exports.ServiceUseCases = ServiceUseCases;
//# sourceMappingURL=service.usecases.js.map