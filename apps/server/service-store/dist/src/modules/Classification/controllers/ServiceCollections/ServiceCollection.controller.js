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
exports.ServiceCollectionsController = void 0;
const ServiceEntry_presenter_1 = require("./ServiceEntry.presenter");
const ServiceEntry_dto_1 = require("./ServiceEntry.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const serviceCollection_presenter_1 = require("./serviceCollection.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const serviceCollection_dto_1 = require("../serviceCollections/serviceCollection.dto");
const serviceCollection_usecases_1 = require("../../usecases/serviceCollection.usecases");
const ServiceResource_presenter_1 = require("./ServiceResource.presenter");
const ServiceResource_dto_1 = require("./ServiceResource.dto");
let ServiceCollectionsController = class ServiceCollectionsController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getServiceCollection(id) {
        const serviceCollection = await this.useCase.getServiceCollection(id);
        return new serviceCollection_presenter_1.ServiceCollectionPresenter(serviceCollection);
    }
    async getServiceCollections() {
        const serviceCollections = await this.useCase.fetServiceCollections();
        return serviceCollections.map((serviceCollection) => new serviceCollection_presenter_1.ServiceCollectionPresenter(serviceCollection));
    }
    async updateServiceCollection(updateServiceCollectionDto) {
        await this.useCase.updateServiceCollection(updateServiceCollectionDto);
        return 'success';
    }
    async deleteServiceCollection(id) {
        await this.useCase.deleteServiceCollection(id);
        return 'success';
    }
    async createServiceCollection(createServiceCollectionDto) {
        const serviceCollectionCreated = await this.useCase.createServiceCollection(createServiceCollectionDto);
        return new serviceCollection_presenter_1.ServiceCollectionPresenter(serviceCollectionCreated);
    }
    async addServiceEntry(createServiceEntryDto) {
        const serviceEntryCreated = await this.useCase.addServiceEntry(createServiceEntryDto);
        return new serviceCollection_presenter_1.ServiceCollectionPresenter(serviceEntryCreated);
    }
    async editServiceEntry(createServiceEntryDto) {
        await this.useCase.updateServiceEntry(createServiceEntryDto);
        return 'success';
    }
    async removeServiceEntry(id) {
        await this.useCase.deleteServiceEntry(id);
        return 'success';
    }
    async updateServiceEntry(createServiceEntryDto) {
        await this.useCase.updateServiceEntries(createServiceEntryDto);
        return 'success';
    }
    async addServiceResource(createServiceResourceDto) {
        const serviceResourceCreated = await this.useCase.addServiceResource(createServiceResourceDto);
        return new serviceCollection_presenter_1.ServiceCollectionPresenter(serviceResourceCreated);
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
    (0, common_1.Get)('get-serviceCollection'),
    (0, response_decorator_1.ApiResponseType)(serviceCollection_presenter_1.ServiceCollectionPresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "getServiceCollection", null);
__decorate([
    (0, common_1.Get)('get-serviceCollections'),
    (0, response_decorator_1.ApiResponseType)(serviceCollection_presenter_1.ServiceCollectionPresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "getServiceCollections", null);
__decorate([
    (0, common_1.Put)('update-serviceCollection'),
    (0, response_decorator_1.ApiResponseType)(serviceCollection_presenter_1.ServiceCollectionPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [serviceCollection_dto_1.UpdateServiceCollectionDto]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "updateServiceCollection", null);
__decorate([
    (0, common_1.Delete)('delete-serviceCollection'),
    (0, response_decorator_1.ApiResponseType)(serviceCollection_presenter_1.ServiceCollectionPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "deleteServiceCollection", null);
__decorate([
    (0, common_1.Post)('create-serviceCollection'),
    (0, response_decorator_1.ApiResponseType)(serviceCollection_presenter_1.ServiceCollectionPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [serviceCollection_dto_1.CreateServiceCollectionDto]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "createServiceCollection", null);
__decorate([
    (0, common_1.Post)('add-ServiceEntry'),
    (0, response_decorator_1.ApiResponseType)(ServiceEntry_presenter_1.ServiceEntryPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceEntry_dto_1.CreateServiceEntryDto]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "addServiceEntry", null);
__decorate([
    (0, common_1.Put)('edit-ServiceEntry'),
    (0, response_decorator_1.ApiResponseType)(ServiceEntry_presenter_1.ServiceEntryPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceEntry_dto_1.UpdateServiceEntryDto]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "editServiceEntry", null);
__decorate([
    (0, common_1.Delete)('remove-ServiceEntry'),
    (0, response_decorator_1.ApiResponseType)(ServiceEntry_presenter_1.ServiceEntryPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "removeServiceEntry", null);
__decorate([
    (0, common_1.Put)('update-ServiceEntries'),
    (0, response_decorator_1.ApiResponseType)(ServiceEntry_presenter_1.ServiceEntryPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "updateServiceEntry", null);
__decorate([
    (0, common_1.Post)('add-ServiceResource'),
    (0, response_decorator_1.ApiResponseType)(ServiceResource_presenter_1.ServiceResourcePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceResource_dto_1.CreateServiceResourceDto]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "addServiceResource", null);
__decorate([
    (0, common_1.Put)('edit-ServiceResource'),
    (0, response_decorator_1.ApiResponseType)(ServiceResource_presenter_1.ServiceResourcePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceResource_dto_1.UpdateServiceResourceDto]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "editServiceResource", null);
__decorate([
    (0, common_1.Delete)('remove-ServiceResource'),
    (0, response_decorator_1.ApiResponseType)(ServiceResource_presenter_1.ServiceResourcePresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "removeServiceResource", null);
__decorate([
    (0, common_1.Put)('update-Resources'),
    (0, response_decorator_1.ApiResponseType)(ServiceResource_presenter_1.ServiceResourcePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ServiceCollectionsController.prototype, "updateServiceResource", null);
ServiceCollectionsController = __decorate([
    (0, common_1.Controller)('serviceCollections'),
    (0, swagger_1.ApiTags)('serviceCollections'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(serviceCollection_presenter_1.ServiceCollectionPresenter),
    __metadata("design:paramtypes", [serviceCollection_usecases_1.ServiceCollectionUseCases])
], ServiceCollectionsController);
exports.ServiceCollectionsController = ServiceCollectionsController;
//# sourceMappingURL=ServiceCollection.controller.js.map