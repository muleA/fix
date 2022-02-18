import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerModule } from "src/infrastructure/logger/logger.module";
import { LoggerService } from "src/infrastructure/logger/logger.service";
//import { ControllersModule } from "./controllers/controllers.module";
import { ServicePromotionsController } from "./controllers/ServicePromotions/ServicePromotion.controller";
import { ServicePromotionEntity } from "./persistence/ServicePromotions/ServicePromotion.entity";
import { ServicePromotionRepository } from "./persistence/ServicePromotions/ServicePromotion.repository";
import { ServicePromotionUseCases } from "./usecases/ServicePromotion.usecases";

@Module({
  imports: [TypeOrmModule.forFeature([ServicePromotionRepository])],
  providers: [ServicePromotionUseCases],
  controllers: [ServicePromotionsController],
})
export class ServicesModule {}