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
exports.LanguageEntity = void 0;
const CommonEntity_1 = require("../../../shared/CommonEntity");
const typeorm_1 = require("typeorm");
const service_entity_1 = require("./service.entity");
let LanguageEntity = class LanguageEntity extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], LanguageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => service_entity_1.ServiceEntity, service => service.languages),
    (0, typeorm_1.JoinColumn)({ name: 'serviceId' }),
    __metadata("design:type", service_entity_1.ServiceEntity)
], LanguageEntity.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LanguageEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LanguageEntity.prototype, "code", void 0);
LanguageEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "languages" })
], LanguageEntity);
exports.LanguageEntity = LanguageEntity;
//# sourceMappingURL=Language.entity.js.map