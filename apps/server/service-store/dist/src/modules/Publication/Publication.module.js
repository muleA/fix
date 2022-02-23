"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ServiceOwner_controller_1 = require("./controllers/ServiceOwners/ServiceOwner.controller");
const ServiceProvider_controller_1 = require("./controllers/ServiceProviders/ServiceProvider.controller");
const Service_controller_1 = require("./controllers/Services/Service.controller");
const service_usecases_1 = require("./usecases/service.usecases");
const serviceOwner_usecases_1 = require("./usecases/serviceOwner.usecases");
const serviceProvider_usecases_1 = require("./usecases/serviceProvider.usecases");
let ServicesModule = class ServicesModule {
};
ServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([])],
        providers: [service_usecases_1.ServiceUseCases, serviceOwner_usecases_1.ServiceOwnerUseCases, serviceProvider_usecases_1.ServiceProviderUseCases],
        controllers: [ServiceOwner_controller_1.ServiceOwnersController, ServiceProvider_controller_1.ServiceProvidersController, Service_controller_1.ServicesController],
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=Publication.module.js.map