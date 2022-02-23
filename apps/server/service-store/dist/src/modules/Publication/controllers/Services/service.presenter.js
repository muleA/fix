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
exports.ServicePresenter = void 0;
const swagger_1 = require("@nestjs/swagger");
const Media_presenter_1 = require("./Media.presenter");
class ServicePresenter {
    constructor(service) {
        this.id = service.id;
        this.name = service.name;
        this.description = service.description;
        this.code = service.code;
        this.fullyQualifiedName = service.fullyQualifiedName;
        this.medias = service.medias.map(item => new Media_presenter_1.MediaPresenter(item));
        this.supportedQualifications = service.supportedQualifications;
        this.version = service.version;
        this.procedure = service.procedure;
        this.targetCustomers = service.targetCustomers;
        this.status = service.status;
        this.isPublic = service.isPublic;
        this.isPublished = service.isPublished;
        this.isArchived = service.isArchived;
        this.tags = service.tags;
        this.deliveryMethod = service.deliveryMethod;
        this.serviceOwnerId = service.serviceOwnerId;
        this.averageRating = service.averageRating;
        this.enableReview = service.enableReview;
        this.policy = service.policy;
        this.publishedOn = service.publishedOn;
        this.createdAt = service.createdAt;
        this.updatedAt = service.updatedAt;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "fullyQualifiedName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ServicePresenter.prototype, "medias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "supportedQualifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ServicePresenter.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "procedure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ServicePresenter.prototype, "serviceFees", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ServicePresenter.prototype, "processingTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ServicePresenter.prototype, "serviceDependencies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ServicePresenter.prototype, "languages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ServicePresenter.prototype, "resources", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "targetCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ServicePresenter.prototype, "isPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ServicePresenter.prototype, "isPublished", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ServicePresenter.prototype, "isArchived", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "deliveryMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "serviceOwnerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ServicePresenter.prototype, "averageRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ServicePresenter.prototype, "enableReview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ServicePresenter.prototype, "policy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServicePresenter.prototype, "publishedOn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServicePresenter.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ServicePresenter.prototype, "updatedAt", void 0);
exports.ServicePresenter = ServicePresenter;
//# sourceMappingURL=service.presenter.js.map