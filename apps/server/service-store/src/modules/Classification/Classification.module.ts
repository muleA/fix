import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerModule } from "src/infrastructure/logger/logger.module";
import { LoggerService } from "src/infrastructure/logger/logger.service";
import { CategorysController } from "./controllers/Categorys/Category.controller";
import { ServiceCollectionsController } from "./controllers/ServiceCollections/ServiceCollection.controller";
//import { ControllersModule } from "./controllers/controllers.module";
import { TagsController } from "./controllers/Tags/Tag.controller";
import { CategoryRepository } from "./persistence/categorys/category.repository";
import { ServiceCollectionRepository } from "./persistence/serviceCollections/serviceCollection.repository";
import { TagEntity } from "./persistence/Tags/Tag.entity";
import { TagRepository } from "./persistence/Tags/Tag.repository";
import { CategoryUseCases } from "./usecases/category.usecases";
import { ServiceCollectionUseCases } from "./usecases/serviceCollection.usecases";
import { TagUseCases } from "./usecases/Tag.usecases";

@Module({
  imports: [TypeOrmModule.forFeature([TagRepository,CategoryRepository, ServiceCollectionRepository, ])],
  providers: [TagUseCases, CategoryUseCases, ServiceCollectionUseCases, CategoryUseCases],
  controllers: [TagsController, CategorysController, ServiceCollectionsController ],
})
export class ClassificationsModule {}