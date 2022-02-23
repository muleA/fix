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
exports.FavoritesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const favorite_presenter_1 = require("./favorite.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const favorite_dto_1 = require("../favorites/favorite.dto");
const favorite_usecases_1 = require("../../usecases/favorite.usecases");
let FavoritesController = class FavoritesController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getFavorite(id) {
        const favorite = await this.useCase.getFavorite(id);
        return new favorite_presenter_1.FavoritePresenter(favorite);
    }
    async getFavorites() {
        const favorites = await this.useCase.fetFavorites();
        return favorites.map((favorite) => new favorite_presenter_1.FavoritePresenter(favorite));
    }
    async updateFavorite(updateFavoriteDto) {
        await this.useCase.updateFavorite(updateFavoriteDto);
        return 'success';
    }
    async deleteFavorite(id) {
        await this.useCase.deleteFavorite(id);
        return 'success';
    }
    async createFavorite(createFavoriteDto) {
        const favoriteCreated = await this.useCase.createFavorite(createFavoriteDto);
        return new favorite_presenter_1.FavoritePresenter(favoriteCreated);
    }
};
__decorate([
    (0, common_1.Get)(':id/get-favorite'),
    (0, response_decorator_1.ApiResponseType)(favorite_presenter_1.FavoritePresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "getFavorite", null);
__decorate([
    (0, common_1.Get)('get-favorites'),
    (0, response_decorator_1.ApiResponseType)(favorite_presenter_1.FavoritePresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "getFavorites", null);
__decorate([
    (0, common_1.Put)('update-favorite'),
    (0, response_decorator_1.ApiResponseType)(favorite_presenter_1.FavoritePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [favorite_dto_1.UpdateFavoriteDto]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "updateFavorite", null);
__decorate([
    (0, common_1.Delete)(':id/delete-favorite'),
    (0, response_decorator_1.ApiResponseType)(favorite_presenter_1.FavoritePresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "deleteFavorite", null);
__decorate([
    (0, common_1.Post)('create-favorite'),
    (0, response_decorator_1.ApiResponseType)(favorite_presenter_1.FavoritePresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [favorite_dto_1.CreateFavoriteDto]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "createFavorite", null);
FavoritesController = __decorate([
    (0, common_1.Controller)('favorites'),
    (0, swagger_1.ApiTags)('favorites'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(favorite_presenter_1.FavoritePresenter),
    __metadata("design:paramtypes", [favorite_usecases_1.FavoriteUseCases])
], FavoritesController);
exports.FavoritesController = FavoritesController;
//# sourceMappingURL=Favorite.controller.js.map