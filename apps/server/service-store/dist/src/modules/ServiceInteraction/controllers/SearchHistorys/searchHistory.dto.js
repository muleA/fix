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
exports.CreateSearchHistoryDto = exports.UpdateSearchHistoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const searchHistory_1 = require("../../domain/SearchHistorys/searchHistory");
class UpdateSearchHistoryDto {
    static fromDTO(searchHistoryDto) {
        const searchHistory = new searchHistory_1.SearchHistory();
        searchHistory.id = searchHistoryDto.id;
        searchHistory.serviceName = searchHistoryDto.serviceName;
        searchHistory.serviceId = searchHistoryDto.serviceId;
        searchHistory.userId = searchHistoryDto.userId;
        return searchHistory;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateSearchHistoryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateSearchHistoryDto.prototype, "serviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateSearchHistoryDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateSearchHistoryDto.prototype, "userId", void 0);
exports.UpdateSearchHistoryDto = UpdateSearchHistoryDto;
class CreateSearchHistoryDto {
    static fromDTO(searchHistoryDto) {
        const searchHistory = new searchHistory_1.SearchHistory();
        searchHistory.id = searchHistoryDto.id;
        searchHistory.serviceName = searchHistoryDto.serviceName;
        searchHistory.serviceId = searchHistoryDto.serviceId;
        searchHistory.userId = searchHistoryDto.userId;
        return searchHistory;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateSearchHistoryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSearchHistoryDto.prototype, "serviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSearchHistoryDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSearchHistoryDto.prototype, "userId", void 0);
exports.CreateSearchHistoryDto = CreateSearchHistoryDto;
//# sourceMappingURL=searchHistory.dto.js.map