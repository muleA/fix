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
exports.RatingUseCases = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const rating_1 = require("../domain/ratings/rating");
const rating_repository_1 = require("../persistence/ratings/rating.repository");
const rating_dto_1 = require("../controllers/ratings/rating.dto");
let RatingUseCases = class RatingUseCases {
    constructor(ratingRepository) {
        this.ratingRepository = ratingRepository;
        this.ratingdomain = new rating_1.Rating();
        this.logger = new logger_service_1.LoggerService('RatingService');
    }
    async createRating(ratingDto) {
        var rating = new rating_1.Rating();
        rating = rating_dto_1.CreateRatingDto.fromDTO(ratingDto);
        const result = await this.ratingRepository.insertRating(rating);
        this.logger.log('CreateRatingUseCases execute', 'New rating have been inserted');
        return result;
    }
    async deleteRating(id) {
        await this.ratingRepository.deleteById(id);
        this.logger.log('DeleteRatingUseCases execute', `Rating ${id} have been deleted`);
    }
    async getRating(id) {
        return await this.ratingRepository.findById(id);
    }
    async fetRatings() {
        return await this.ratingRepository.findAll();
    }
    async updateRating(ratingDto) {
        var rating = await this.ratingRepository.findById(ratingDto.id);
        if (rating != null) {
            rating = rating_dto_1.UpdateRatingDto.fromDTO(ratingDto);
            await this.ratingRepository.updateRating(rating.id, rating);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateRatingUseCases execute', `Rating ${rating.id} have been updated`);
    }
};
RatingUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rating_repository_1.RatingRepository)),
    __metadata("design:paramtypes", [Object])
], RatingUseCases);
exports.RatingUseCases = RatingUseCases;
//# sourceMappingURL=rating.usecases.js.map