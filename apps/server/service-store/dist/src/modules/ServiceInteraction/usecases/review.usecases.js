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
exports.ReviewUseCases = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_service_1 = require("../../../infrastructure/logger/logger.service");
const review_1 = require("../domain/reviews/review");
const review_repository_1 = require("../persistence/reviews/review.repository");
const review_dto_1 = require("../controllers/reviews/review.dto");
let ReviewUseCases = class ReviewUseCases {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
        this.reviewdomain = new review_1.Review();
        this.logger = new logger_service_1.LoggerService('ReviewService');
    }
    async createReview(reviewDto) {
        var review = new review_1.Review();
        review = review_dto_1.CreateReviewDto.fromDTO(reviewDto);
        const result = await this.reviewRepository.insertReview(review);
        this.logger.log('CreateReviewUseCases execute', 'New review have been inserted');
        return result;
    }
    async deleteReview(id) {
        await this.reviewRepository.deleteById(id);
        this.logger.log('DeleteReviewUseCases execute', `Review ${id} have been deleted`);
    }
    async getReview(id) {
        return await this.reviewRepository.findById(id);
    }
    async fetReviews() {
        return await this.reviewRepository.findAll();
    }
    async updateReview(reviewDto) {
        var review = await this.reviewRepository.findById(reviewDto.id);
        if (review != null) {
            review = review_dto_1.UpdateReviewDto.fromDTO(reviewDto);
            await this.reviewRepository.updateReview(review.id, review);
        }
        else {
            throw new Error("Not Found");
        }
        this.logger.log('UpdateReviewUseCases execute', `Review ${review.id} have been updated`);
    }
};
ReviewUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_repository_1.ReviewRepository)),
    __metadata("design:paramtypes", [Object])
], ReviewUseCases);
exports.ReviewUseCases = ReviewUseCases;
//# sourceMappingURL=review.usecases.js.map