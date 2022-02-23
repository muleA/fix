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
exports.ServiceOwnersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const serviceOwner_presenter_1 = require("./serviceOwner.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const serviceOwner_dto_1 = require("../serviceOwners/serviceOwner.dto");
const serviceOwner_usecases_1 = require("../../usecases/serviceOwner.usecases");
let ServiceOwnersController = class ServiceOwnersController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getServiceOwner(id) {
        const serviceOwner = await this.useCase.getServiceOwner(id);
        return new serviceOwner_presenter_1.ServiceOwnerPresenter(serviceOwner);
    }
    async getServiceOwners() {
        const serviceOwners = await this.useCase.fetServiceOwners();
        return serviceOwners.map((serviceOwner) => new serviceOwner_presenter_1.ServiceOwnerPresenter(serviceOwner));
    }
    async updateServiceOwner(updateServiceOwnerDto) {
        await this.useCase.updateServiceOwner(updateServiceOwnerDto);
        return 'success';
    }
    async deleteServiceOwner(id) {
        await this.useCase.deleteServiceOwner(id);
        return 'success';
    }
    async createServiceOwner(createServiceOwnerDto) {
        const serviceOwnerCreated = await this.useCase.createServiceOwner(createServiceOwnerDto);
        return new serviceOwner_presenter_1.ServiceOwnerPresenter(serviceOwnerCreated);
    }
};
__decorate([
    (0, common_1.Get)('get-serviceOwner'),
    (0, response_decorator_1.ApiResponseType)(serviceOwner_presenter_1.ServiceOwnerPresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceOwnersController.prototype, "getServiceOwner", null);
__decorate([
    (0, common_1.Get)('get-serviceOwners'),
    (0, response_decorator_1.ApiResponseType)(serviceOwner_presenter_1.ServiceOwnerPresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServiceOwnersController.prototype, "getServiceOwners", null);
__decorate([
    (0, common_1.Put)('update-serviceOwner'),
    (0, response_decorator_1.ApiResponseType)(serviceOwner_presenter_1.ServiceOwnerPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [serviceOwner_dto_1.UpdateServiceOwnerDto]),
    __metadata("design:returntype", Promise)
], ServiceOwnersController.prototype, "updateServiceOwner", null);
__decorate([
    (0, common_1.Delete)('delete-serviceOwner'),
    (0, response_decorator_1.ApiResponseType)(serviceOwner_presenter_1.ServiceOwnerPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceOwnersController.prototype, "deleteServiceOwner", null);
__decorate([
    (0, common_1.Post)('create-serviceOwner'),
    (0, response_decorator_1.ApiResponseType)(serviceOwner_presenter_1.ServiceOwnerPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [serviceOwner_dto_1.CreateServiceOwnerDto]),
    __metadata("design:returntype", Promise)
], ServiceOwnersController.prototype, "createServiceOwner", null);
ServiceOwnersController = __decorate([
    (0, common_1.Controller)('serviceOwners'),
    (0, swagger_1.ApiTags)('serviceOwners'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(serviceOwner_presenter_1.ServiceOwnerPresenter),
    __metadata("design:paramtypes", [serviceOwner_usecases_1.ServiceOwnerUseCases])
], ServiceOwnersController);
exports.ServiceOwnersController = ServiceOwnersController;
//# sourceMappingURL=ServiceOwner.controller.js.map