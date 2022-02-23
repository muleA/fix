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
exports.FavoriteUseCases = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const favorite_1 = require("../domain/favorites/favorite");
const favorite_repository_1 = require("../persistence/favorites/favorite.repository");
const favorite_dto_1 = require("../controllers/favorites/favorite.dto");
let FavoriteUseCases = class FavoriteUseCases {
    constructor(favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
        this.favoritedomain = new favorite_1.Favorite();
        this.logger = new logger_service_1.LoggerService('FavoriteService');
    }
    async createFavorite(favoriteDto) {
        var favorite = new favorite_1.Favorite();
        favorite = favorite_dto_1.CreateFavoriteDto.fromDTO(favoriteDto);
        const result = await this.favoriteRepository.insertFavorite(favorite);
        this.logger.log('CreateFavoriteUseCases execute', 'New favorite have been inserted');
        return result;
    }
    async deleteFavorite(id) {
        await this.favoriteRepository.deleteById(id);
        this.logger.log('DeleteFavoriteUseCases execute', `Favorite ${id} have been deleted`);
    }
    async getFavorite(id) {
        return await this.favoriteRepository.findById(id);
    }
    async fetFavorites() {
        return await this.favoriteRepository.findAll();
    }
    async updateFavorite(favoriteDto) {
        var favorite = await this.favoriteRepository.findById(favoriteDto.id);
        if (favorite != null) {
            favorite = favorite_dto_1.UpdateFavoriteDto.fromDTO(favoriteDto);
            await this.favoriteRepository.updateFavorite(favorite.id, favorite);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateFavoriteUseCases execute', `Favorite ${favorite.id} have been updated`);
    }
};
FavoriteUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favorite_repository_1.FavoriteRepository)),
    __metadata("design:paramtypes", [Object])
], FavoriteUseCases);
exports.FavoriteUseCases = FavoriteUseCases;
//# sourceMappingURL=favorite.usecases.js.map