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
exports.SearchHistorysController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const searchHistory_presenter_1 = require("./searchHistory.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const searchHistory_dto_1 = require("../searchHistorys/searchHistory.dto");
const searchHistory_usecases_1 = require("../../usecases/searchHistory.usecases");
let SearchHistorysController = class SearchHistorysController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getSearchHistory(id) {
        const searchHistory = await this.useCase.getSearchHistory(id);
        return new searchHistory_presenter_1.SearchHistoryPresenter(searchHistory);
    }
    async getSearchHistorys() {
        const searchHistorys = await this.useCase.fetSearchHistorys();
        return searchHistorys.map((searchHistory) => new searchHistory_presenter_1.SearchHistoryPresenter(searchHistory));
    }
    async updateSearchHistory(updateSearchHistoryDto) {
        await this.useCase.updateSearchHistory(updateSearchHistoryDto);
        return 'success';
    }
    async deleteSearchHistory(id) {
        await this.useCase.deleteSearchHistory(id);
        return 'success';
    }
    async createSearchHistory(createSearchHistoryDto) {
        const searchHistoryCreated = await this.useCase.createSearchHistory(createSearchHistoryDto);
        return new searchHistory_presenter_1.SearchHistoryPresenter(searchHistoryCreated);
    }
};
__decorate([
    (0, common_1.Get)('get-searchHistory'),
    (0, response_decorator_1.ApiResponseType)(searchHistory_presenter_1.SearchHistoryPresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchHistorysController.prototype, "getSearchHistory", null);
__decorate([
    (0, common_1.Get)('get-searchHistorys'),
    (0, response_decorator_1.ApiResponseType)(searchHistory_presenter_1.SearchHistoryPresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchHistorysController.prototype, "getSearchHistorys", null);
__decorate([
    (0, common_1.Put)('update-searchHistory'),
    (0, response_decorator_1.ApiResponseType)(searchHistory_presenter_1.SearchHistoryPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchHistory_dto_1.UpdateSearchHistoryDto]),
    __metadata("design:returntype", Promise)
], SearchHistorysController.prototype, "updateSearchHistory", null);
__decorate([
    (0, common_1.Delete)('delete-searchHistory'),
    (0, response_decorator_1.ApiResponseType)(searchHistory_presenter_1.SearchHistoryPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchHistorysController.prototype, "deleteSearchHistory", null);
__decorate([
    (0, common_1.Post)('create-searchHistory'),
    (0, response_decorator_1.ApiResponseType)(searchHistory_presenter_1.SearchHistoryPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchHistory_dto_1.CreateSearchHistoryDto]),
    __metadata("design:returntype", Promise)
], SearchHistorysController.prototype, "createSearchHistory", null);
SearchHistorysController = __decorate([
    (0, common_1.Controller)('searchHistorys'),
    (0, swagger_1.ApiTags)('searchHistorys'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(searchHistory_presenter_1.SearchHistoryPresenter),
    __metadata("design:paramtypes", [searchHistory_usecases_1.SearchHistoryUseCases])
], SearchHistorysController);
exports.SearchHistorysController = SearchHistorysController;
//# sourceMappingURL=SearchHistory.controller.js.map