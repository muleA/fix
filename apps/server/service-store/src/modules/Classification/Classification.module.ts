import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategorysController } from "./controllers/Categorys/category.controller";
import { ServiceCollectionsController } from "./controllers/serviceCollections/ServiceCollection.controller";
//import { ControllersModule } from "./controllers/controllers.module";
import { TagsController } from "./controllers/tags/tag.controller";
import { CategoryRepository } from "./persistence/categorys/category.repository";
import { ServiceCollectionRepository } from "./persistence/serviceCollections/serviceCollection.repository";
//import { TagsEntity } from "./persistence/Categorys/ServiceTags.entity";
//import { TagEntity } from "./persistence/Tags/Tags.entity";

import { TagRepository } from "./persistence/tags/tag.repository";
import { CategoryUseCases } from "./usecases/category.usecases";
import { ServiceCollectionUseCases } from "./usecases/serviceCollection.usecases";
import { TagUseCases } from "./usecases/tag.usecases";

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository,TagRepository, ServiceCollectionRepository])],
  providers: [CategoryUseCases, ServiceCollectionUseCases,TagUseCases],
  controllers: [CategorysController, ServiceCollectionsController, TagsController]
})
export class ClassificationsModule { }