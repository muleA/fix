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
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const review_presenter_1 = require("./review.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const review_dto_1 = require("../reviews/review.dto");
const review_usecases_1 = require("../../usecases/review.usecases");
let ReviewsController = class ReviewsController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getReview(id) {
        const review = await this.useCase.getReview(id);
        return new review_presenter_1.ReviewPresenter(review);
    }
    async getReviews() {
        const reviews = await this.useCase.fetReviews();
        return reviews.map((review) => new review_presenter_1.ReviewPresenter(review));
    }
    async updateReview(updateReviewDto) {
        await this.useCase.updateReview(updateReviewDto);
        return 'success';
    }
    async deleteReview(id) {
        await this.useCase.deleteReview(id);
        return 'success';
    }
    async createReview(createReviewDto) {
        const reviewCreated = await this.useCase.createReview(createReviewDto);
        return new review_presenter_1.ReviewPresenter(reviewCreated);
    }
};
__decorate([
    (0, common_1.Get)('get-review'),
    (0, response_decorator_1.ApiResponseType)(review_presenter_1.ReviewPresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "getReview", null);
__decorate([
    (0, common_1.Get)('get-reviews'),
    (0, response_decorator_1.ApiResponseType)(review_presenter_1.ReviewPresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "getReviews", null);
__decorate([
    (0, common_1.Put)('update-review'),
    (0, response_decorator_1.ApiResponseType)(review_presenter_1.ReviewPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.UpdateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "updateReview", null);
__decorate([
    (0, common_1.Delete)('delete-review'),
    (0, response_decorator_1.ApiResponseType)(review_presenter_1.ReviewPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "deleteReview", null);
__decorate([
    (0, common_1.Post)('create-review'),
    (0, response_decorator_1.ApiResponseType)(review_presenter_1.ReviewPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "createReview", null);
ReviewsController = __decorate([
    (0, common_1.Controller)('reviews'),
    (0, swagger_1.ApiTags)('reviews'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(review_presenter_1.ReviewPresenter),
    __metadata("design:paramtypes", [review_usecases_1.ReviewUseCases])
], ReviewsController);
exports.ReviewsController = ReviewsController;
//# sourceMappingURL=Review.controller.js.map