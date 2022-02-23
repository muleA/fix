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
exports.ServiceEntryEntity = void 0;
const typeorm_1 = require("typeorm");
const serviceCollection_entity_1 = require("./serviceCollection.entity");
let ServiceEntryEntity = class ServiceEntryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ServiceEntryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'serviceId' }),
    __metadata("design:type", String)
], ServiceEntryEntity.prototype, "serviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'serviceCollectionId' }),
    __metadata("design:type", String)
], ServiceEntryEntity.prototype, "serviceCollectionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => serviceCollection_entity_1.ServiceCollectionEntity, serviceCollection => serviceCollection.serviceEntries),
    (0, typeorm_1.JoinColumn)({ name: 'serviceCollectionId' }),
    __metadata("design:type", serviceCollection_entity_1.ServiceCollectionEntity)
], ServiceEntryEntity.prototype, "serviceCollection", void 0);
ServiceEntryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "serviceEntry" })
], ServiceEntryEntity);
exports.ServiceEntryEntity = ServiceEntryEntity;
//# sourceMappingURL=ServiceEntry.entity.js.map