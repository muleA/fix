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
exports.SearchHistoryRepository = void 0;
const typeorm_1 = require("typeorm");
const searchHistory_1 = require("../../domain/searchHistorys/searchHistory");
const searchHistory_entity_1 = require("./searchHistory.entity");
let SearchHistoryRepository = class SearchHistoryRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateSearchHistory(id, searchHistory) {
        const searchHistoryEntity = this.toSearchHistoryEntity(searchHistory);
        await this.update({ id: searchHistory.id }, searchHistoryEntity);
    }
    async insertSearchHistory(searchHistory) {
        const searchHistoryEntity = this.toSearchHistoryEntity(searchHistory);
        const result = await this.insert(searchHistoryEntity);
        console.log(result.generatedMaps);
        return this.toSearchHistory(result.generatedMaps[0]);
    }
    async findAll() {
        const searchHistorysEntity = await this.find();
        return searchHistorysEntity.map((searchHistoryEntity) => this.toSearchHistory(searchHistoryEntity));
    }
    async findById(id) {
        const searchHistoryEntity = await this.findOneOrFail(id);
        return this.toSearchHistory(searchHistoryEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toSearchHistory(searchHistoryEntity) {
        const searchHistory = new searchHistory_1.SearchHistory();
        searchHistory.id = searchHistoryEntity.id;
        searchHistory.serviceName = searchHistoryEntity.serviceName;
        searchHistory.serviceId = searchHistoryEntity.serviceId;
        searchHistory.userId = searchHistoryEntity.userId;
        searchHistory.createdAt = searchHistoryEntity.createdAt;
        searchHistory.updatedAt = searchHistoryEntity.updatedAt;
        return searchHistory;
    }
    toSearchHistoryEntity(searchHistory) {
        const searchHistoryEntity = new searchHistory_entity_1.SearchHistoryEntity();
        searchHistoryEntity.id = searchHistory.id;
        searchHistoryEntity.serviceName = searchHistory.serviceName;
        searchHistoryEntity.serviceId = searchHistory.serviceId;
        searchHistoryEntity.userId = searchHistory.userId;
        searchHistoryEntity.createdAt = searchHistory.createdAt;
        searchHistoryEntity.updatedAt = searchHistory.updatedAt;
        return searchHistoryEntity;
    }
};
SearchHistoryRepository = __decorate([
    (0, typeorm_1.EntityRepository)(searchHistory_entity_1.SearchHistoryEntity),
    __metadata("design:paramtypes", [])
], SearchHistoryRepository);
exports.SearchHistoryRepository = SearchHistoryRepository;
//# sourceMappingURL=searchHistory.repository.js.map