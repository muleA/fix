"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificationsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Category_controller_1 = require("./controllers/Categorys/Category.controller");
const ServiceCollection_controller_1 = require("./controllers/ServiceCollections/ServiceCollection.controller");
const Tag_controller_1 = require("./controllers/Tags/Tag.controller");
const category_repository_1 = require("./persistence/categorys/category.repository");
const serviceCollection_repository_1 = require("./persistence/serviceCollections/serviceCollection.repository");
const Tag_repository_1 = require("./persistence/Tags/Tag.repository");
const category_usecases_1 = require("./usecases/category.usecases");
const serviceCollection_usecases_1 = require("./usecases/serviceCollection.usecases");
const Tag_usecases_1 = require("./usecases/Tag.usecases");
let ClassificationsModule = class ClassificationsModule {
};
ClassificationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Tag_repository_1.TagRepository, category_repository_1.CategoryRepository, serviceCollection_repository_1.ServiceCollectionRepository,])],
        providers: [Tag_usecases_1.TagUseCases, category_usecases_1.CategoryUseCases, serviceCollection_usecases_1.ServiceCollectionUseCases, category_usecases_1.CategoryUseCases],
        controllers: [Tag_controller_1.TagsController, Category_controller_1.CategorysController, ServiceCollection_controller_1.ServiceCollectionsController],
    })
], ClassificationsModule);
exports.ClassificationsModule = ClassificationsModule;
//# sourceMappingURL=Classification.module.js.map