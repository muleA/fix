import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceOwnersController } from "./controllers/ServiceOwners/ServiceOwner.controller";
//import { ControllersModule } from "./controllers/controllers.module";
///import { ServicePromotionsController } from "./controllers/ServicePromotions/ServicePromotion.controller";
import { ServiceProvidersController } from "./controllers/ServiceProviders/ServiceProvider.controller";
import { ServicesController } from "./controllers/Services/Service.controller";
import { ServiceOwnerRepository } from "./persistence/serviceOwners/serviceOwner.repository";
import { ServiceProviderRepository } from "./persistence/serviceProviders/serviceProvider.repository";
import { ServiceRepository } from "./persistence/services/service.repository";
import { ServiceUseCases } from "./usecases/service.usecases";
import { ServiceOwnerUseCases } from "./usecases/serviceOwner.usecases";
import { ServiceProviderUseCases } from "./usecases/serviceProvider.usecases";
//import { ServicePromotionEntity } from "./persistence/ServicePromotions/ServicePromotion.entity";
//import { ServicePromotionRepository } from "./persistence/ServicePromotions/ServicePromotion.repository";
//import { ServicePromotionUseCases } from "./usecases/ServicePromotion.usecases";
@Module({

  imports: [TypeOrmModule.forFeature([ServiceProviderRepository, ServiceOwnerRepository, ServiceRepository])],
  providers: [ServiceUseCases, ServiceOwnerUseCases, ServiceProviderUseCases],
  controllers: [ServicesController, ServiceOwnersController, ServiceProvidersController],
})
export class ServicesModule { }