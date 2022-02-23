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
exports.RatingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const rating_presenter_1 = require("./rating.presenter");
const response_decorator_1 = require("../../../../infrastructure/swagger/response.decorator");
const rating_dto_1 = require("../ratings/rating.dto");
const rating_usecases_1 = require("../../usecases/rating.usecases");
let RatingsController = class RatingsController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getRating(id) {
        const rating = await this.useCase.getRating(id);
        return new rating_presenter_1.RatingPresenter(rating);
    }
    async getRatings() {
        const ratings = await this.useCase.fetRatings();
        return ratings.map((rating) => new rating_presenter_1.RatingPresenter(rating));
    }
    async updateRating(updateRatingDto) {
        await this.useCase.updateRating(updateRatingDto);
        return 'success';
    }
    async deleteRating(id) {
        await this.useCase.deleteRating(id);
        return 'success';
    }
    async createRating(createRatingDto) {
        const ratingCreated = await this.useCase.createRating(createRatingDto);
        return new rating_presenter_1.RatingPresenter(ratingCreated);
    }
};
__decorate([
    (0, common_1.Get)('get-rating'),
    (0, response_decorator_1.ApiResponseType)(rating_presenter_1.RatingPresenter, false),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingsController.prototype, "getRating", null);
__decorate([
    (0, common_1.Get)('get-ratings'),
    (0, response_decorator_1.ApiResponseType)(rating_presenter_1.RatingPresenter, true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RatingsController.prototype, "getRatings", null);
__decorate([
    (0, common_1.Put)('update-rating'),
    (0, response_decorator_1.ApiResponseType)(rating_presenter_1.RatingPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rating_dto_1.UpdateRatingDto]),
    __metadata("design:returntype", Promise)
], RatingsController.prototype, "updateRating", null);
__decorate([
    (0, common_1.Delete)('delete-rating'),
    (0, response_decorator_1.ApiResponseType)(rating_presenter_1.RatingPresenter, true),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingsController.prototype, "deleteRating", null);
__decorate([
    (0, common_1.Post)('create-rating'),
    (0, response_decorator_1.ApiResponseType)(rating_presenter_1.RatingPresenter, true),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rating_dto_1.CreateRatingDto]),
    __metadata("design:returntype", Promise)
], RatingsController.prototype, "createRating", null);
RatingsController = __decorate([
    (0, common_1.Controller)('ratings'),
    (0, swagger_1.ApiTags)('ratings'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(rating_presenter_1.RatingPresenter),
    __metadata("design:paramtypes", [rating_usecases_1.RatingUseCases])
], RatingsController);
exports.RatingsController = RatingsController;
//# sourceMappingURL=Rating.controller.js.map