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
exports.ServiceEntryPresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
class ServiceEntryPresenter {
    constructor(serviceEntry) {
        this.id = serviceEntry.id;
        this.serviceId = serviceEntry.serviceId;
        this.serviceCollectionId = serviceEntry.serviceCollectionId;
        this.createdAt = serviceEntry.createdAt;
        this.updatedAt = serviceEntry.updatedAt;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceEntryPresenter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceEntryPresenter.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceEntryPresenter.prototype, "serviceCollectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServiceEntryPresenter.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServiceEntryPresenter.prototype, "updatedAt", void 0);
exports.ServiceEntryPresenter = ServiceEntryPresenter;
//# sourceMappingURL=ServiceEntry.presenter.js.map