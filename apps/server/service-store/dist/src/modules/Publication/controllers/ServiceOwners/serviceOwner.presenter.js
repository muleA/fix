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
exports.ServiceOwnerPresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
const address_1 = require("../../domain/ServiceOwners/address");
const ContactInfo_presenter_1 = require("./ContactInfo.presenter");
class ServiceOwnerPresenter {
    constructor(serviceOwner) {
        this.id = serviceOwner.id;
        this.shortName = serviceOwner.shortName;
        this.fullName = serviceOwner.fullName;
        this.sector = serviceOwner.sector;
        this.contactInfo = new ContactInfo_presenter_1.ContactInfoPresenter(serviceOwner.contactInfo);
        this.address = serviceOwner.address;
        this.code = serviceOwner.code;
        this.organizationId = serviceOwner.organizationId;
        this.organizationName = serviceOwner.organizationName;
        this.createdAt = serviceOwner.createdAt;
        this.updatedAt = serviceOwner.updatedAt;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceOwnerPresenter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceOwnerPresenter.prototype, "shortName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceOwnerPresenter.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceOwnerPresenter.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", address_1.Address)
], ServiceOwnerPresenter.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceOwnerPresenter.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceOwnerPresenter.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceOwnerPresenter.prototype, "organizationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServiceOwnerPresenter.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServiceOwnerPresenter.prototype, "updatedAt", void 0);
exports.ServiceOwnerPresenter = ServiceOwnerPresenter;
//# sourceMappingURL=serviceOwner.presenter.js.map