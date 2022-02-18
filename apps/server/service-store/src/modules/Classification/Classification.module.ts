import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerModule } from "src/infrastructure/logger/logger.module";
import { LoggerService } from "src/infrastructure/logger/logger.service";
//import { ControllersModule } from "./controllers/controllers.module";
import { TagsController } from "./controllers/Tags/Tag.controller";
import { TagEntity } from "./persistence/Tags/Tag.entity";
import { TagRepository } from "./persistence/Tags/Tag.repository";
import { TagUseCases } from "./usecases/Tag.usecases";

@Module({
  imports: [TypeOrmModule.forFeature([TagRepository])],
  providers: [TagUseCases],
  controllers: [TagsController],
})
export class ClassificationsModule {}