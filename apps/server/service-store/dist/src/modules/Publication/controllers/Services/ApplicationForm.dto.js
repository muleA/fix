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
exports.CreateApplicationFormDto = exports.UpdateApplicationFormDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const ApplicationForm_1 = require("../../domain/services/ApplicationForm");
class UpdateApplicationFormDto {
    static fromDTO(applicationFormDto) {
        const applicationForm = new ApplicationForm_1.ApplicationForm();
        applicationForm.title = applicationFormDto.title;
        applicationForm.formUrl = applicationFormDto.formUrl;
        applicationForm.status = applicationFormDto.status;
        applicationForm.taskName = applicationFormDto.taskName;
        return applicationForm;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateApplicationFormDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsFQDN)(),
    __metadata("design:type", String)
], UpdateApplicationFormDto.prototype, "formUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateApplicationFormDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateApplicationFormDto.prototype, "taskName", void 0);
exports.UpdateApplicationFormDto = UpdateApplicationFormDto;
class CreateApplicationFormDto {
    static fromDTO(applicationFormDto) {
        const applicationForm = new ApplicationForm_1.ApplicationForm();
        applicationForm.title = applicationFormDto.title;
        applicationForm.formUrl = applicationFormDto.formUrl;
        applicationForm.status = applicationFormDto.status;
        applicationForm.taskName = applicationFormDto.taskName;
        return applicationForm;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateApplicationFormDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsFQDN)(),
    __metadata("design:type", String)
], CreateApplicationFormDto.prototype, "formUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateApplicationFormDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateApplicationFormDto.prototype, "taskName", void 0);
exports.CreateApplicationFormDto = CreateApplicationFormDto;
//# sourceMappingURL=ApplicationForm.dto.js.map