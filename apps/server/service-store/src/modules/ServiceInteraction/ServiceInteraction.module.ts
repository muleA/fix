import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
//import { LoggerModule } from "src/infrastructure/logger/logger.module";
//import { LoggerService } from "src/infrastructure/logger/logger.service";
import { FavoritesController } from "./controllers/Favorites/Favorite.controller";
import { RatingsController } from "./controllers/Ratings/Rating.controller";
import { ReviewsController } from "./controllers/Reviews/Review.controller";
import { SearchHistorysController } from "./controllers/SearchHistorys/SearchHistory.controller";
import { FavoriteUseCases } from "./usecases/favorite.usecases";
import { RatingUseCases } from "./usecases/rating.usecases";
import { ReviewUseCases } from "./usecases/review.usecases";
import { SearchHistoryUseCases } from "./usecases/searchHistory.usecases";

//import { ControllersModule } from "./controllers/controllers.module";
//import { LikesController } from "./controllers/Likes/Like.controller";
//import { LikeEntity } from "./persistence/Likes/Like.entity";
//import { LikeRepository } from "./persistence/Likes/Like.repository";
//import { LikeUseCases } from "./usecases/Like.usecases";

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [FavoriteUseCases, RatingUseCases,SearchHistoryUseCases,ReviewUseCases ],
  controllers: [
    FavoritesController,
    RatingsController,
    ReviewsController,
    SearchHistorysController],
})
export class InteractionsModule { }