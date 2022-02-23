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
exports.ServiceProvidersController = void 0;
const DelegatedService_presenter_1 = require("./DelegatedService.presenter");
const DelegatedService_dto_1 = require("./DelegatedService.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const serviceProvider_presenter_1 = require("./serviceProvider.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const serviceProvider_dto_1 = require("../serviceProviders/serviceProvider.dto");
const serviceProvider_usecases_1 = require("../../usecases/serviceProvider.usecases");
let ServiceProvidersController = class ServiceProvidersController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getServiceProvider(id) {
        const serviceProvider = await this.useCase.getServiceProvider(id);
        return new serviceProvider_presenter_1.ServiceProviderPresenter(serviceProvider);
    }
    async getServiceProviders() {
        const serviceProviders = await this.useCase.fetServiceProviders();
        return serviceProviders.map((serviceProvider) => new serviceProvider_presenter_1.ServiceProviderPresenter(serviceProvider));
    }
    async updateServiceProvider(updateServiceProviderDto) {
        await this.useCase.updateServiceProvider(updateServiceProviderDto);
        return 'success';
    }
    async deleteServiceProvider(id) {
        await this.useCase.deleteServiceProvider(id);
        return 'success';
    }
    async createServiceProvider(createServiceProviderDto) {
        const serviceProviderCreated = await this.useCase.createServiceProvider(createServiceProviderDto);
        return new serviceProvider_presenter_1.ServiceProviderPresenter(serviceProviderCreated);
    }
    async addDelegatedService(createDelegatedServiceDto) {
        const delegatedServiceCreated = await this.useCase.addDelegatedService(createDelegatedServiceDto);
        return new serviceProvider_presenter_1.ServiceProviderPresenter(delegatedServiceCreated);
    }
    async editDelegatedService(createDelegatedServiceDto) {
        await this.useCase.updateDelegatedService(createDelegatedServiceDto);
        return 'success';
    }
    async removeDelegatedService(id) {
        await this.useCase.deleteDelegatedService(id);
        return 'success';
    }
    async updateDelegatedService(createDelegatedServiceDto) {
        await this.useCase.updateDelegatedServices(createDelegatedServiceDto);
        return 'success';
    }
};
__decorate([
    (0, common_1.Get)('get-serviceProvider'),
    (0, response_decorator_1.ApiResponseType)(serviceProvider_presenter_1.ServiceProviderPresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceProvidersController.prototype, "getServiceProvider", null);
__decorate([
    (0, common_1.Get)('get-serviceProviders'),
    (0, response_decorator_1.ApiResponseType)(serviceProvider_presenter_1.ServiceProviderPresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServiceProvidersController.prototype, "getServiceProviders", null);
__decorate([
    (0, common_1.Put)('update-serviceProvider'),
    (0, response_decorator_1.ApiResponseType)(serviceProvider_presenter_1.ServiceProviderPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [serviceProvider_dto_1.UpdateServiceProviderDto]),
    __metadata("design:returntype", Promise)
], ServiceProvidersController.prototype, "updateServiceProvider", null);
__decorate([
    (0, common_1.Delete)('delete-serviceProvider'),
    (0, response_decorator_1.ApiResponseType)(serviceProvider_presenter_1.ServiceProviderPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceProvidersController.prototype, "deleteServiceProvider", null);
__decorate([
    (0, common_1.Post)('create-serviceProvider'),
    (0, response_decorator_1.ApiResponseType)(serviceProvider_presenter_1.ServiceProviderPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [serviceProvider_dto_1.CreateServiceProviderDto]),
    __metadata("design:returntype", Promise)
], ServiceProvidersController.prototype, "createServiceProvider", null);
__decorate([
    (0, common_1.Post)('add-DelegatedService'),
    (0, response_decorator_1.ApiResponseType)(DelegatedService_presenter_1.DelegatedServicePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DelegatedService_dto_1.CreateDelegatedServiceDto]),
    __metadata("design:returntype", Promise)
], ServiceProvidersController.prototype, "addDelegatedService", null);
__decorate([
    (0, common_1.Put)('edit-DelegatedService'),
    (0, response_decorator_1.ApiResponseType)(DelegatedService_presenter_1.DelegatedServicePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DelegatedService_dto_1.UpdateDelegatedServiceDto]),
    __metadata("design:returntype", Promise)
], ServiceProvidersController.prototype, "editDelegatedService", null);
__decorate([
    (0, common_1.Delete)('remove-DelegatedService'),
    (0, response_decorator_1.ApiResponseType)(DelegatedService_presenter_1.DelegatedServicePresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceProvidersController.prototype, "removeDelegatedService", null);
__decorate([
    (0, common_1.Put)('update-DelegatedServices'),
    (0, response_decorator_1.ApiResponseType)(DelegatedService_presenter_1.DelegatedServicePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ServiceProvidersController.prototype, "updateDelegatedService", null);
ServiceProvidersController = __decorate([
    (0, common_1.Controller)('serviceProviders'),
    (0, swagger_1.ApiTags)('serviceProviders'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(serviceProvider_presenter_1.ServiceProviderPresenter),
    __metadata("design:paramtypes", [serviceProvider_usecases_1.ServiceProviderUseCases])
], ServiceProvidersController);
exports.ServiceProvidersController = ServiceProvidersController;
//# sourceMappingURL=ServiceProvider.controller.js.map