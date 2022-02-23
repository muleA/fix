import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerModule } from "src/infrastructure/logger/logger.module";
import { LoggerService } from "src/infrastructure/logger/logger.service";
import { ServiceOwnersController } from "./controllers/ServiceOwners/ServiceOwner.controller";
//import { ControllersModule } from "./controllers/controllers.module";
///import { ServicePromotionsController } from "./controllers/ServicePromotions/ServicePromotion.controller";
import { ServiceProvidersController } from "./controllers/ServiceProviders/ServiceProvider.controller";
import { ServicesController } from "./controllers/Services/Service.controller";
import { ServicePromotionEntity } from "./persistence/Services/ServicePromotion.entity";
import { ServiceUseCases } from "./usecases/service.usecases";
import { ServiceOwnerUseCases } from "./usecases/serviceOwner.usecases";
import { ServiceProviderUseCases } from "./usecases/serviceProvider.usecases";
//import { ServicePromotionEntity } from "./persistence/ServicePromotions/ServicePromotion.entity";
//import { ServicePromotionRepository } from "./persistence/ServicePromotions/ServicePromotion.repository";
//import { ServicePromotionUseCases } from "./usecases/ServicePromotion.usecases";
@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [ServiceUseCases, ServiceOwnerUseCases, ServiceProviderUseCases],
  controllers: [ ServiceOwnersController, ServiceProvidersController, ServicesController],
})
export class ServicesModule {}