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
exports.CreateProcessingTimeDto = exports.UpdateProcessingTimeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const ProcessingTime_1 = require("../../domain/services/ProcessingTime");
class UpdateProcessingTimeDto {
    static fromDTO(processingTimeDto) {
        const processingTime = new ProcessingTime_1.ProcessingTime();
        processingTime.id = processingTimeDto.id;
        processingTime.serviceId = processingTimeDto.serviceId;
        processingTime.time = processingTimeDto.time;
        processingTime.currency = processingTimeDto.currency;
        processingTime.description = processingTimeDto.description;
        return processingTime;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProcessingTimeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProcessingTimeDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProcessingTimeDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProcessingTimeDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProcessingTimeDto.prototype, "description", void 0);
exports.UpdateProcessingTimeDto = UpdateProcessingTimeDto;
class CreateProcessingTimeDto {
    static fromDTO(processingTimeDto) {
        const processingTime = new ProcessingTime_1.ProcessingTime();
        processingTime.id = processingTimeDto.id;
        processingTime.serviceId = processingTimeDto.serviceId;
        processingTime.time = processingTimeDto.time;
        processingTime.currency = processingTimeDto.currency;
        processingTime.description = processingTimeDto.description;
        return processingTime;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessingTimeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessingTimeDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProcessingTimeDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessingTimeDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessingTimeDto.prototype, "description", void 0);
exports.CreateProcessingTimeDto = CreateProcessingTimeDto;
//# sourceMappingURL=ProcessingTime.dto.js.map