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
exports.ServicesController = void 0;
const Media_presenter_1 = require("./Media.presenter");
const Media_dto_1 = require("./Media.dto");
const ServiceFee_presenter_1 = require("./ServiceFee.presenter");
const ServiceFee_dto_1 = require("./ServiceFee.dto");
const ProcessingTime_presenter_1 = require("./ProcessingTime.presenter");
const ProcessingTime_dto_1 = require("./ProcessingTime.dto");
const ServiceDependency_presenter_1 = require("./ServiceDependency.presenter");
const ServiceDependency_dto_1 = require("./ServiceDependency.dto");
const Language_presenter_1 = require("./Language.presenter");
const Language_dto_1 = require("./Language.dto");
const ServiceResource_presenter_1 = require("./ServiceResource.presenter");
const ServiceResource_dto_1 = require("./ServiceResource.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const service_presenter_1 = require("./service.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const service_dto_1 = require("../services/service.dto");
const service_usecases_1 = require("../../usecases/service.usecases");
let ServicesController = class ServicesController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getService(id) {
        const service = await this.useCase.getService(id);
        return new service_presenter_1.ServicePresenter(service);
    }
    async getServices() {
        const services = await this.useCase.fetServices();
        return services.map((service) => new service_presenter_1.ServicePresenter(service));
    }
    async updateService(updateServiceDto) {
        await this.useCase.updateService(updateServiceDto);
        return 'success';
    }
    async deleteService(id) {
        await this.useCase.deleteService(id);
        return 'success';
    }
    async createService(createServiceDto) {
        const serviceCreated = await this.useCase.createService(createServiceDto);
        return new service_presenter_1.ServicePresenter(serviceCreated);
    }
    async addMedia(createMediaDto) {
        const mediaCreated = await this.useCase.addMedia(createMediaDto);
        return new service_presenter_1.ServicePresenter(mediaCreated);
    }
    async editMedia(createMediaDto) {
        await this.useCase.updateMedia(createMediaDto);
        return 'success';
    }
    async removeMedia(id) {
        await this.useCase.deleteMedia(id);
        return 'success';
    }
    async updateMedia(createMediaDto) {
        await this.useCase.updateMedias(createMediaDto);
        return 'success';
    }
    async addServiceFee(createServiceFeeDto) {
        const serviceFeeCreated = await this.useCase.addServiceFee(createServiceFeeDto);
        return new service_presenter_1.ServicePresenter(serviceFeeCreated);
    }
    async editServiceFee(createServiceFeeDto) {
        await this.useCase.updateServiceFee(createServiceFeeDto);
        return 'success';
    }
    async removeServiceFee(id) {
        await this.useCase.deleteServiceFee(id);
        return 'success';
    }
    async updateServiceFee(createServiceFeeDto) {
        await this.useCase.updateServiceFees(createServiceFeeDto);
        return 'success';
    }
    async addProcessingTime(createProcessingTimeDto) {
        const processingTimeCreated = await this.useCase.addProcessingTime(createProcessingTimeDto);
        return new service_presenter_1.ServicePresenter(processingTimeCreated);
    }
    async editProcessingTime(createProcessingTimeDto) {
        await this.useCase.updateProcessingTime(createProcessingTimeDto);
        return 'success';
    }
    async removeProcessingTime(id) {
        await this.useCase.deleteProcessingTime(id);
        return 'success';
    }
    async updateProcessingTime(createProcessingTimeDto) {
        await this.useCase.updateProcessingTimes(createProcessingTimeDto);
        return 'success';
    }
    async addServiceDependency(createServiceDependencyDto) {
        const serviceDependencyCreated = await this.useCase.addServiceDependency(createServiceDependencyDto);
        return new service_presenter_1.ServicePresenter(serviceDependencyCreated);
    }
    async editServiceDependency(createServiceDependencyDto) {
        await this.useCase.updateServiceDependency(createServiceDependencyDto);
        return 'success';
    }
    async removeServiceDependency(id) {
        await this.useCase.deleteServiceDependency(id);
        return 'success';
    }
    async updateServiceDependency(createServiceDependencyDto) {
        await this.useCase.updateServiceDependencies(createServiceDependencyDto);
        return 'success';
    }
    async addLanguage(createLanguageDto) {
        const languageCreated = await this.useCase.addLanguage(createLanguageDto);
        return new service_presenter_1.ServicePresenter(languageCreated);
    }
    async editLanguage(createLanguageDto) {
        await this.useCase.updateLanguage(createLanguageDto);
        return 'success';
    }
    async removeLanguage(id) {
        await this.useCase.deleteLanguage(id);
        return 'success';
    }
    async updateLanguage(createLanguageDto) {
        await this.useCase.updateLanguages(createLanguageDto);
        return 'success';
    }
    async addServiceResource(createServiceResourceDto) {
        const serviceResourceCreated = await this.useCase.addServiceResource(createServiceResourceDto);
        return new service_presenter_1.ServicePresenter(serviceResourceCreated);
    }
    async editServiceResource(createServiceResourceDto) {
        await this.useCase.updateServiceResource(createServiceResourceDto);
        return 'success';
    }
    async removeServiceResource(id) {
        await this.useCase.deleteServiceResource(id);
        return 'success';
    }
    async updateServiceResource(createServiceResourceDto) {
        await this.useCase.updateResources(createServiceResourceDto);
        return 'success';
    }
};
__decorate([
    (0, common_1.Get)('get-service'),
    (0, response_decorator_1.ApiResponseType)(service_presenter_1.ServicePresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "getService", null);
__decorate([
    (0, common_1.Get)('get-services'),
    (0, response_decorator_1.ApiResponseType)(service_presenter_1.ServicePresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "getServices", null);
__decorate([
    (0, common_1.Put)('update-service'),
    (0, response_decorator_1.ApiResponseType)(service_presenter_1.ServicePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [service_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "updateService", null);
__decorate([
    (0, common_1.Delete)('delete-service'),
    (0, response_decorator_1.ApiResponseType)(service_presenter_1.ServicePresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "deleteService", null);
__decorate([
    (0, common_1.Post)('create-service'),
    (0, response_decorator_1.ApiResponseType)(service_presenter_1.ServicePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [service_dto_1.CreateServiceDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "createService", null);
__decorate([
    (0, common_1.Post)('add-Media'),
    (0, response_decorator_1.ApiResponseType)(Media_presenter_1.MediaPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Media_dto_1.CreateMediaDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "addMedia", null);
__decorate([
    (0, common_1.Put)('edit-Media'),
    (0, response_decorator_1.ApiResponseType)(Media_presenter_1.MediaPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Media_dto_1.UpdateMediaDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "editMedia", null);
__decorate([
    (0, common_1.Delete)('remove-Media'),
    (0, response_decorator_1.ApiResponseType)(Media_presenter_1.MediaPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "removeMedia", null);
__decorate([
    (0, common_1.Put)('update-Medias'),
    (0, response_decorator_1.ApiResponseType)(Media_presenter_1.MediaPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "updateMedia", null);
__decorate([
    (0, common_1.Post)('add-ServiceFee'),
    (0, response_decorator_1.ApiResponseType)(ServiceFee_presenter_1.ServiceFeePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceFee_dto_1.CreateServiceFeeDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "addServiceFee", null);
__decorate([
    (0, common_1.Put)('edit-ServiceFee'),
    (0, response_decorator_1.ApiResponseType)(ServiceFee_presenter_1.ServiceFeePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceFee_dto_1.UpdateServiceFeeDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "editServiceFee", null);
__decorate([
    (0, common_1.Delete)('remove-ServiceFee'),
    (0, response_decorator_1.ApiResponseType)(ServiceFee_presenter_1.ServiceFeePresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "removeServiceFee", null);
__decorate([
    (0, common_1.Put)('update-ServiceFees'),
    (0, response_decorator_1.ApiResponseType)(ServiceFee_presenter_1.ServiceFeePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "updateServiceFee", null);
__decorate([
    (0, common_1.Post)('add-ProcessingTime'),
    (0, response_decorator_1.ApiResponseType)(ProcessingTime_presenter_1.ProcessingTimePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcessingTime_dto_1.CreateProcessingTimeDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "addProcessingTime", null);
__decorate([
    (0, common_1.Put)('edit-ProcessingTime'),
    (0, response_decorator_1.ApiResponseType)(ProcessingTime_presenter_1.ProcessingTimePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcessingTime_dto_1.UpdateProcessingTimeDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "editProcessingTime", null);
__decorate([
    (0, common_1.Delete)('remove-ProcessingTime'),
    (0, response_decorator_1.ApiResponseType)(ProcessingTime_presenter_1.ProcessingTimePresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "removeProcessingTime", null);
__decorate([
    (0, common_1.Put)('update-ProcessingTimes'),
    (0, response_decorator_1.ApiResponseType)(ProcessingTime_presenter_1.ProcessingTimePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "updateProcessingTime", null);
__decorate([
    (0, common_1.Post)('add-ServiceDependency'),
    (0, response_decorator_1.ApiResponseType)(ServiceDependency_presenter_1.ServiceDependencyPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceDependency_dto_1.CreateServiceDependencyDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "addServiceDependency", null);
__decorate([
    (0, common_1.Put)('edit-ServiceDependency'),
    (0, response_decorator_1.ApiResponseType)(ServiceDependency_presenter_1.ServiceDependencyPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceDependency_dto_1.UpdateServiceDependencyDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "editServiceDependency", null);
__decorate([
    (0, common_1.Delete)('remove-ServiceDependency'),
    (0, response_decorator_1.ApiResponseType)(ServiceDependency_presenter_1.ServiceDependencyPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "removeServiceDependency", null);
__decorate([
    (0, common_1.Put)('update-ServiceDependencies'),
    (0, response_decorator_1.ApiResponseType)(ServiceDependency_presenter_1.ServiceDependencyPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "updateServiceDependency", null);
__decorate([
    (0, common_1.Post)('add-Language'),
    (0, response_decorator_1.ApiResponseType)(Language_presenter_1.LanguagePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Language_dto_1.CreateLanguageDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "addLanguage", null);
__decorate([
    (0, common_1.Put)('edit-Language'),
    (0, response_decorator_1.ApiResponseType)(Language_presenter_1.LanguagePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Language_dto_1.UpdateLanguageDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "editLanguage", null);
__decorate([
    (0, common_1.Delete)('remove-Language'),
    (0, response_decorator_1.ApiResponseType)(Language_presenter_1.LanguagePresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "removeLanguage", null);
__decorate([
    (0, common_1.Put)('update-Languages'),
    (0, response_decorator_1.ApiResponseType)(Language_presenter_1.LanguagePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "updateLanguage", null);
__decorate([
    (0, common_1.Post)('add-ServiceResource'),
    (0, response_decorator_1.ApiResponseType)(ServiceResource_presenter_1.ServiceResourcePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceResource_dto_1.CreateServiceResourceDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "addServiceResource", null);
__decorate([
    (0, common_1.Put)('edit-ServiceResource'),
    (0, response_decorator_1.ApiResponseType)(ServiceResource_presenter_1.ServiceResourcePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceResource_dto_1.UpdateServiceResourceDto]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "editServiceResource", null);
__decorate([
    (0, common_1.Delete)('remove-ServiceResource'),
    (0, response_decorator_1.ApiResponseType)(ServiceResource_presenter_1.ServiceResourcePresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "removeServiceResource", null);
__decorate([
    (0, common_1.Put)('update-Resources'),
    (0, response_decorator_1.ApiResponseType)(ServiceResource_presenter_1.ServiceResourcePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "updateServiceResource", null);
ServicesController = __decorate([
    (0, common_1.Controller)('services'),
    (0, swagger_1.ApiTags)('services'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(service_presenter_1.ServicePresenter),
    __metadata("design:paramtypes", [service_usecases_1.ServiceUseCases])
], ServicesController);
exports.ServicesController = ServicesController;
//# sourceMappingURL=Service.controller.js.map