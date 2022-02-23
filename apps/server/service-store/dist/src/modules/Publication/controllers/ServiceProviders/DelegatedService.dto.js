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
exports.CreateDelegatedServiceDto = exports.UpdateDelegatedServiceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const DelegatedService_1 = require("../../domain/serviceProviders/DelegatedService");
class UpdateDelegatedServiceDto {
    static fromDTO(delegatedServiceDto) {
        const delegatedService = new DelegatedService_1.DelegatedService();
        delegatedService.id = delegatedServiceDto.id;
        delegatedService.providerId = delegatedServiceDto.providerId;
        delegatedService.serviceId = delegatedServiceDto.serviceId;
        delegatedService.title = delegatedServiceDto.title;
        delegatedService.dispatchingRule = delegatedServiceDto.dispatchingRule;
        delegatedService.status = delegatedServiceDto.status;
        return delegatedService;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateDelegatedServiceDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateDelegatedServiceDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateDelegatedServiceDto.prototype, "serviceId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateDelegatedServiceDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateDelegatedServiceDto.prototype, "dispatchingRule", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateDelegatedServiceDto.prototype, "status", void 0);
exports.UpdateDelegatedServiceDto = UpdateDelegatedServiceDto;
class CreateDelegatedServiceDto {
    static fromDTO(delegatedServiceDto) {
        const delegatedService = new DelegatedService_1.DelegatedService();
        delegatedService.providerId = delegatedServiceDto.providerId;
        delegatedService.serviceId = delegatedServiceDto.serviceId;
        delegatedService.title = delegatedServiceDto.title;
        delegatedService.dispatchingRule = delegatedServiceDto.dispatchingRule;
        delegatedService.status = delegatedServiceDto.status;
        return delegatedService;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateDelegatedServiceDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateDelegatedServiceDto.prototype, "serviceId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateDelegatedServiceDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateDelegatedServiceDto.prototype, "dispatchingRule", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateDelegatedServiceDto.prototype, "status", void 0);
exports.CreateDelegatedServiceDto = CreateDelegatedServiceDto;
//# sourceMappingURL=DelegatedService.dto.js.map