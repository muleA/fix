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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOwnerUseCases = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const serviceOwner_1 = require("../domain/serviceOwners/serviceOwner");
const serviceOwner_repository_1 = require("../persistence/serviceOwners/serviceOwner.repository");
const serviceOwner_dto_1 = require("../controllers/serviceOwners/serviceOwner.dto");
let ServiceOwnerUseCases = class ServiceOwnerUseCases {
    constructor(serviceOwnerRepository) {
        this.serviceOwnerRepository = serviceOwnerRepository;
        this.serviceOwnerdomain = new serviceOwner_1.ServiceOwner();
        this.logger = new logger_service_1.LoggerService('ServiceOwnerService');
    }
    async createServiceOwner(serviceOwnerDto) {
        var serviceOwner = new serviceOwner_1.ServiceOwner();
        serviceOwner = serviceOwner_dto_1.CreateServiceOwnerDto.fromDTO(serviceOwnerDto);
        const result = await this.serviceOwnerRepository.insertServiceOwner(serviceOwner);
        this.logger.log('CreateServiceOwnerUseCases execute', 'New serviceOwner have been inserted');
        return result;
    }
    async deleteServiceOwner(id) {
        await this.serviceOwnerRepository.deleteById(id);
        this.logger.log('DeleteServiceOwnerUseCases execute', `ServiceOwner ${id} have been deleted`);
    }
    async getServiceOwner(id) {
        return await this.serviceOwnerRepository.findById(id);
    }
    async fetServiceOwners() {
        return await this.serviceOwnerRepository.findAll();
    }
    async updateServiceOwner(serviceOwnerDto) {
        var serviceOwner = await this.serviceOwnerRepository.findById(serviceOwnerDto.id);
        if (serviceOwner != null) {
            serviceOwner = serviceOwner_dto_1.UpdateServiceOwnerDto.fromDTO(serviceOwnerDto);
            await this.serviceOwnerRepository.updateServiceOwner(serviceOwner.id, serviceOwner);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateServiceOwnerUseCases execute', `ServiceOwner ${serviceOwner.id} have been updated`);
    }
};
ServiceOwnerUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(serviceOwner_repository_1.ServiceOwnerRepository)),
    __metadata("design:paramtypes", [Object])
], ServiceOwnerUseCases);
exports.ServiceOwnerUseCases = ServiceOwnerUseCases;
//# sourceMappingURL=serviceOwner.usecases.js.map