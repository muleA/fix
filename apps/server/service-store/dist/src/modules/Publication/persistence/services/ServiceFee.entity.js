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
exports.ServiceFeeEntity = void 0;
const service_entity_1 = require("./service.entity");
const typeorm_1 = require("typeorm");
const CommonEntity_1 = require("../../../shared/CommonEntity");
let ServiceFeeEntity = class ServiceFeeEntity extends CommonEntity_1.CommonEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ServiceFeeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => service_entity_1.ServiceEntity, service => service.serviceFees),
    typeorm_1.JoinColumn({ name: 'serviceId' }),
    __metadata("design:type", service_entity_1.ServiceEntity)
], ServiceFeeEntity.prototype, "service", void 0);
__decorate([
    typeorm_1.Column('double precision'),
    __metadata("design:type", Number)
], ServiceFeeEntity.prototype, "fee", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServiceFeeEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], ServiceFeeEntity.prototype, "description", void 0);
ServiceFeeEntity = __decorate([
    typeorm_1.Entity({ name: "serviceFees" })
], ServiceFeeEntity);
exports.ServiceFeeEntity = ServiceFeeEntity;
//# sourceMappingURL=ServiceFee.entity.js.map