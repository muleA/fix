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
exports.CreateServiceEntryDto = exports.UpdateServiceEntryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const ServiceEntry_1 = require("../../domain/serviceCollections/ServiceEntry");
class UpdateServiceEntryDto {
    static fromDTO(serviceEntryDto) {
        const serviceEntry = new ServiceEntry_1.ServiceEntry();
        serviceEntry.id = serviceEntryDto.id;
        serviceEntry.serviceId = serviceEntryDto.serviceId;
        serviceEntry.serviceCollectionId = serviceEntryDto.serviceCollectionId;
        return serviceEntry;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateServiceEntryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateServiceEntryDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateServiceEntryDto.prototype, "serviceCollectionId", void 0);
exports.UpdateServiceEntryDto = UpdateServiceEntryDto;
class CreateServiceEntryDto {
    static fromDTO(serviceEntryDto) {
        const serviceEntry = new ServiceEntry_1.ServiceEntry();
        serviceEntry.id = serviceEntryDto.id;
        serviceEntry.serviceId = serviceEntryDto.serviceId;
        serviceEntry.serviceCollectionId = serviceEntryDto.serviceCollectionId;
        return serviceEntry;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceEntryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceEntryDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateServiceEntryDto.prototype, "serviceCollectionId", void 0);
exports.CreateServiceEntryDto = CreateServiceEntryDto;
//# sourceMappingURL=ServiceEntry.dto.js.map