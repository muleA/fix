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
exports.ServiceCollectionPresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
const ServiceEntry_presenter_1 = require("./ServiceEntry.presenter");
const ServiceResource_presenter_1 = require("./ServiceResource.presenter");
class ServiceCollectionPresenter {
    constructor(serviceCollection) {
        this.id = serviceCollection.id;
        this.name = serviceCollection.name;
        this.description = serviceCollection.description;
        this.code = serviceCollection.code;
        this.serviceEntries = serviceCollection.serviceEntries.map(item => { return new ServiceEntry_presenter_1.ServiceEntryPresenter(item); });
        this.supportedQualifications = serviceCollection.supportedQualifications;
        this.version = serviceCollection.version;
        this.procedure = serviceCollection.procedure;
        this.isPublic = serviceCollection.isPublic;
        this.tags = serviceCollection.tags;
        this.resources = serviceCollection.resources.map(item => { return new ServiceResource_presenter_1.ServiceResourcePresenter(item); });
        this.targetCustomers = serviceCollection.targetCustomers;
        this.isArchived = serviceCollection.isArchived;
        this.createdAt = serviceCollection.createdAt;
        this.updatedAt = serviceCollection.updatedAt;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceCollectionPresenter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceCollectionPresenter.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceCollectionPresenter.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceCollectionPresenter.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ServiceCollectionPresenter.prototype, "serviceEntries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceCollectionPresenter.prototype, "supportedQualifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ServiceCollectionPresenter.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceCollectionPresenter.prototype, "procedure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ServiceCollectionPresenter.prototype, "isPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceCollectionPresenter.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ServiceCollectionPresenter.prototype, "resources", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServiceCollectionPresenter.prototype, "targetCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ServiceCollectionPresenter.prototype, "isArchived", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServiceCollectionPresenter.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServiceCollectionPresenter.prototype, "updatedAt", void 0);
exports.ServiceCollectionPresenter = ServiceCollectionPresenter;
//# sourceMappingURL=serviceCollection.presenter.js.map