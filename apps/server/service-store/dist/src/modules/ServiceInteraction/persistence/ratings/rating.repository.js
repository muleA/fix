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
exports.RatingRepository = void 0;
const typeorm_1 = require("typeorm");
const rating_1 = require("../../domain/ratings/rating");
const rating_entity_1 = require("./rating.entity");
let RatingRepository = class RatingRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateRating(id, rating) {
        const ratingEntity = this.toRatingEntity(rating);
        await this.update({ id: rating.id }, ratingEntity);
    }
    async insertRating(rating) {
        const ratingEntity = this.toRatingEntity(rating);
        const result = await this.insert(ratingEntity);
        console.log(result.generatedMaps);
        return this.toRating(result.generatedMaps[0]);
    }
    async findAll() {
        const ratingsEntity = await this.find();
        return ratingsEntity.map((ratingEntity) => this.toRating(ratingEntity));
    }
    async findById(id) {
        const ratingEntity = await this.findOneOrFail(id);
        return this.toRating(ratingEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toRating(ratingEntity) {
        const rating = new rating_1.Rating();
        rating.id = ratingEntity.id;
        rating.serviceId = ratingEntity.serviceId;
        rating.userId = ratingEntity.userId;
        rating.score = ratingEntity.score;
        rating.createdAt = ratingEntity.createdAt;
        rating.updatedAt = ratingEntity.updatedAt;
        return rating;
    }
    toRatingEntity(rating) {
        const ratingEntity = new rating_entity_1.RatingEntity();
        ratingEntity.id = rating.id;
        ratingEntity.serviceId = rating.serviceId;
        ratingEntity.userId = rating.userId;
        ratingEntity.score = rating.score;
        return ratingEntity;
    }
};
RatingRepository = __decorate([
    (0, typeorm_1.EntityRepository)(rating_entity_1.RatingEntity),
    __metadata("design:paramtypes", [])
], RatingRepository);
exports.RatingRepository = RatingRepository;
//# sourceMappingURL=rating.repository.js.map