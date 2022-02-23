"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Favorite_controller_1 = require("./controllers/Favorites/Favorite.controller");
const Rating_controller_1 = require("./controllers/Ratings/Rating.controller");
const Review_controller_1 = require("./controllers/Reviews/Review.controller");
const SearchHistory_controller_1 = require("./controllers/SearchHistorys/SearchHistory.controller");
const favorite_repository_1 = require("./persistence/favorites/favorite.repository");
const rating_repository_1 = require("./persistence/ratings/rating.repository");
const review_repository_1 = require("./persistence/reviews/review.repository");
const searchHistory_repository_1 = require("./persistence/searchHistorys/searchHistory.repository");
const favorite_usecases_1 = require("./usecases/favorite.usecases");
const rating_usecases_1 = require("./usecases/rating.usecases");
const review_usecases_1 = require("./usecases/review.usecases");
const searchHistory_usecases_1 = require("./usecases/searchHistory.usecases");
let InteractionsModule = class InteractionsModule {
};
InteractionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([favorite_repository_1.FavoriteRepository, rating_repository_1.RatingRepository, review_repository_1.ReviewRepository, searchHistory_repository_1.SearchHistoryRepository])],
        providers: [favorite_usecases_1.FavoriteUseCases, rating_usecases_1.RatingUseCases, searchHistory_usecases_1.SearchHistoryUseCases, review_usecases_1.ReviewUseCases],
        controllers: [
            Favorite_controller_1.FavoritesController,
            Rating_controller_1.RatingsController,
            Review_controller_1.ReviewsController,
            SearchHistory_controller_1.SearchHistorysController
        ],
    })
], InteractionsModule);
exports.InteractionsModule = InteractionsModule;
//# sourceMappingURL=ServiceInteraction.module.js.map