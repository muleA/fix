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
exports.DelegatedServicePresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
class DelegatedServicePresenter {
    constructor(delegatedService) {
        this.id = delegatedService.id;
        this.providerId = delegatedService.providerId;
        this.serviceId = delegatedService.serviceId;
        this.title = delegatedService.title;
        this.dispatchingRule = delegatedService.dispatchingRule;
        this.status = delegatedService.status;
        this.createdAt = delegatedService.createdAt;
        this.updatedAt = delegatedService.updatedAt;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DelegatedServicePresenter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DelegatedServicePresenter.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DelegatedServicePresenter.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DelegatedServicePresenter.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DelegatedServicePresenter.prototype, "dispatchingRule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DelegatedServicePresenter.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], DelegatedServicePresenter.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], DelegatedServicePresenter.prototype, "updatedAt", void 0);
exports.DelegatedServicePresenter = DelegatedServicePresenter;
//# sourceMappingURL=DelegatedService.presenter.js.map