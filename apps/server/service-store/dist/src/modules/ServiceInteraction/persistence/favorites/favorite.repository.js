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
exports.FavoriteRepository = void 0;
const typeorm_1 = require("typeorm");
const Favorite_1 = require("../../domain/Favorites/Favorite");
const favorite_entity_1 = require("./favorite.entity");
let FavoriteRepository = class FavoriteRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateFavorite(id, favorite) {
        const favoriteEntity = this.toFavoriteEntity(favorite);
        await this.update({ id: favorite.id }, favoriteEntity);
    }
    async insertFavorite(favorite) {
        const favoriteEntity = this.toFavoriteEntity(favorite);
        const result = await this.insert(favoriteEntity);
        console.log(result.generatedMaps);
        return this.toFavorite(result.generatedMaps[0]);
    }
    async findAll() {
        const favoritesEntity = await this.find();
        return favoritesEntity.map((favoriteEntity) => this.toFavorite(favoriteEntity));
    }
    async findById(id) {
        const favoriteEntity = await this.findOneOrFail(id);
        return this.toFavorite(favoriteEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toFavorite(favoriteEntity) {
        const favorite = new Favorite_1.Favorite();
        favorite.id = favoriteEntity.id;
        favorite.serviceName = favoriteEntity.serviceName;
        favorite.serviceId = favoriteEntity.serviceId;
        favorite.userId = favoriteEntity.userId;
        favorite.updatedAt = favoriteEntity.updatedAt;
        return favorite;
    }
    toFavoriteEntity(favorite) {
        const favoriteEntity = new favorite_entity_1.FavoriteEntity();
        favoriteEntity.id = favorite.id;
        favoriteEntity.serviceName = favorite.serviceName;
        favoriteEntity.serviceId = favorite.serviceId;
        favoriteEntity.userId = favorite.userId;
        return favoriteEntity;
    }
};
FavoriteRepository = __decorate([
    (0, typeorm_1.EntityRepository)(favorite_entity_1.FavoriteEntity),
    __metadata("design:paramtypes", [])
], FavoriteRepository);
exports.FavoriteRepository = FavoriteRepository;
//# sourceMappingURL=favorite.repository.js.map