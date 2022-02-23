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
exports.ServicePromotionPresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
class ServicePromotionPresenter {
    constructor(servicePromotion) {
        this.id = servicePromotion.id;
        this.serviceId = servicePromotion.serviceId;
        this.from = servicePromotion.from;
        this.to = servicePromotion.to;
        this.createdAt = servicePromotion.createdAt;
        this.updatedAt = servicePromotion.updatedAt;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePromotionPresenter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePromotionPresenter.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServicePromotionPresenter.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServicePromotionPresenter.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServicePromotionPresenter.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServicePromotionPresenter.prototype, "updatedAt", void 0);
exports.ServicePromotionPresenter = ServicePromotionPresenter;
//# sourceMappingURL=ServicePromotion.presenter.js.map