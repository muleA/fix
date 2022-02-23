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
exports.ServiceProviderPresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
const address_1 = require("../../domain/ServiceOwners/address");
const ProviderLocation_1 = require("../../domain/ServiceProviders/ProviderLocation");
const ContactInfo_presenter_1 = require("../ServiceOwners/ContactInfo.presenter");
const DelegatedService_presenter_1 = require("./DelegatedService.presenter");
class ServiceProviderPresenter {
    constructor(serviceProvider) {
        this.id = serviceProvider.id;
        this.shortName = serviceProvider.shortName;
        this.fullName = serviceProvider.fullName;
        this.sector = serviceProvider.sector;
        this.contactInfo = new ContactInfo_presenter_1.ContactInfoPresenter(serviceProvider.contactInfo);
        this.location = serviceProvider.location;
        this.address = serviceProvider.address;
        this.delegatedServices = serviceProvider.delegatedServices.map((item) => new DelegatedService_presenter_1.DelegatedServicePresenter(item));
        this.code = serviceProvider.code;
        this.organizationId = serviceProvider.organizationId;
        this.organizationName = serviceProvider.organizationName;
        this.createdAt = serviceProvider.createdAt;
        this.updatedAt = serviceProvider.updatedAt;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceProviderPresenter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceProviderPresenter.prototype, "shortName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceProviderPresenter.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceProviderPresenter.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", ProviderLocation_1.ProviderLocation)
], ServiceProviderPresenter.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", address_1.Address)
], ServiceProviderPresenter.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ServiceProviderPresenter.prototype, "delegatedServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceProviderPresenter.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceProviderPresenter.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceProviderPresenter.prototype, "organizationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServiceProviderPresenter.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServiceProviderPresenter.prototype, "updatedAt", void 0);
exports.ServiceProviderPresenter = ServiceProviderPresenter;
//# sourceMappingURL=serviceProvider.presenter.js.map