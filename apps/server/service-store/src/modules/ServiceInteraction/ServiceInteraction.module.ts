import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerModule } from "src/infrastructure/logger/logger.module";
import { LoggerService } from "src/infrastructure/logger/logger.service";
//import { ControllersModule } from "./controllers/controllers.module";
import { LikesController } from "./controllers/Likes/Like.controller";
import { LikeEntity } from "./persistence/Likes/Like.entity";
import { LikeRepository } from "./persistence/Likes/Like.repository";
import { LikeUseCases } from "./usecases/Like.usecases";

@Module({
  imports: [TypeOrmModule.forFeature([LikeRepository])],
  providers: [LikeUseCases],
  controllers: [LikesController],
})
export class InteractionsModule {}