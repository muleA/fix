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
exports.ReviewRepository = void 0;
const typeorm_1 = require("typeorm");
const review_1 = require("../../domain/reviews/review");
const review_entity_1 = require("./review.entity");
let ReviewRepository = class ReviewRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async updateReview(id, review) {
        const reviewEntity = this.toReviewEntity(review);
        await this.update({ id: review.id }, reviewEntity);
    }
    async insertReview(review) {
        const reviewEntity = this.toReviewEntity(review);
        const result = await this.insert(reviewEntity);
        console.log(result.generatedMaps);
        return this.toReview(result.generatedMaps[0]);
    }
    async findAll() {
        const reviewsEntity = await this.find();
        return reviewsEntity.map((reviewEntity) => this.toReview(reviewEntity));
    }
    async findById(id) {
        const reviewEntity = await this.findOneOrFail(id);
        return this.toReview(reviewEntity);
    }
    async deleteById(id) {
        await this.delete({ id: id });
    }
    toReview(reviewEntity) {
        const review = new review_1.Review();
        review.id = reviewEntity.id;
        review.title = reviewEntity.title;
        review.body = reviewEntity.body;
        review.serviceId = reviewEntity.serviceId;
        review.userId = reviewEntity.userId;
        review.status = reviewEntity.status;
        review.likes = reviewEntity.likes;
        review.createdAt = reviewEntity.createdAt;
        review.updatedAt = reviewEntity.updatedAt;
        return review;
    }
    toReviewEntity(review) {
        const reviewEntity = new review_entity_1.ReviewEntity();
        reviewEntity.id = review.id;
        reviewEntity.title = review.title;
        reviewEntity.body = review.body;
        reviewEntity.serviceId = review.serviceId;
        reviewEntity.userId = review.userId;
        reviewEntity.status = review.status;
        reviewEntity.likes = review.likes;
        return reviewEntity;
    }
};
ReviewRepository = __decorate([
    (0, typeorm_1.EntityRepository)(review_entity_1.ReviewEntity),
    __metadata("design:paramtypes", [])
], ReviewRepository);
exports.ReviewRepository = ReviewRepository;
//# sourceMappingURL=review.repository.js.map