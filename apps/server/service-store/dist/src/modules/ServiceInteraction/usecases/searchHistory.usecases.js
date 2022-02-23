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
exports.SearchHistoryUseCases = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const searchHistory_1 = require("../domain/searchHistorys/searchHistory");
const searchHistory_repository_1 = require("../persistence/searchHistorys/searchHistory.repository");
const searchHistory_dto_1 = require("../controllers/searchHistorys/searchHistory.dto");
let SearchHistoryUseCases = class SearchHistoryUseCases {
    constructor(searchHistoryRepository) {
        this.searchHistoryRepository = searchHistoryRepository;
        this.searchHistorydomain = new searchHistory_1.SearchHistory();
        this.logger = new logger_service_1.LoggerService('SearchHistoryService');
    }
    async createSearchHistory(searchHistoryDto) {
        var searchHistory = new searchHistory_1.SearchHistory();
        searchHistory = searchHistory_dto_1.CreateSearchHistoryDto.fromDTO(searchHistoryDto);
        const result = await this.searchHistoryRepository.insertSearchHistory(searchHistory);
        this.logger.log('CreateSearchHistoryUseCases execute', 'New searchHistory have been inserted');
        return result;
    }
    async deleteSearchHistory(id) {
        await this.searchHistoryRepository.deleteById(id);
        this.logger.log('DeleteSearchHistoryUseCases execute', `SearchHistory ${id} have been deleted`);
    }
    async getSearchHistory(id) {
        return await this.searchHistoryRepository.findById(id);
    }
    async fetSearchHistorys() {
        return await this.searchHistoryRepository.findAll();
    }
    async updateSearchHistory(searchHistoryDto) {
        var searchHistory = await this.searchHistoryRepository.findById(searchHistoryDto.id);
        if (searchHistory != null) {
            searchHistory = searchHistory_dto_1.UpdateSearchHistoryDto.fromDTO(searchHistoryDto);
            await this.searchHistoryRepository.updateSearchHistory(searchHistory.id, searchHistory);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateSearchHistoryUseCases execute', `SearchHistory ${searchHistory.id} have been updated`);
    }
};
SearchHistoryUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(searchHistory_repository_1.SearchHistoryRepository)),
    __metadata("design:paramtypes", [Object])
], SearchHistoryUseCases);
exports.SearchHistoryUseCases = SearchHistoryUseCases;
//# sourceMappingURL=searchHistory.usecases.js.map