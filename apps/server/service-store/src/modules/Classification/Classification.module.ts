import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategorysController } from "./controllers/Categorys/Category.controller";
import { ServiceCollectionsController } from "./controllers/ServiceCollections/ServiceCollection.controller";
//import { ControllersModule } from "./controllers/controllers.module";
import { TagsController } from "./controllers/Tags/Tag.controller";
import { CategoryRepository } from "./persistence/categorys/category.repository";
import { ServiceCollectionRepository } from "./persistence/serviceCollections/serviceCollection.repository";
import { TagRepository } from "./persistence/Tags/Tag.repository";
//import { TagRepository } from "./persistence/Tags/Tag.repository";
import { CategoryUseCases } from "./usecases/category.usecases";
import { ServiceCollectionUseCases } from "./usecases/serviceCollection.usecases";
import { TagUseCases } from "./usecases/Tag.usecases";


@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository, ServiceCollectionRepository])],
  providers: [CategoryUseCases, ServiceCollectionUseCases],
  controllers: [CategorysController, ServiceCollectionsController]
})
export class ClassificationsModule { }