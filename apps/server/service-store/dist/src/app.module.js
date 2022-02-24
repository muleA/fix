"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const logger_module_1 = require("./infrastructure/logger/logger.module");
const exceptions_module_1 = require("./infrastructure/exceptions/exceptions.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeormconfig_1 = require("../typeormconfig");
const ServiceInteraction_module_1 = require("./modules/ServiceInteraction/ServiceInteraction.module");
const Classification_module_1 = require("./modules/Classification/Classification.module");
const Publication_module_1 = require("./modules/Publication/Publication.module");
let AppModule = class AppModule {
    constructor() {
        console.log(typeormconfig_1.DbConfig);
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: typeormconfig_1.DbConfig.host,
                username: typeormconfig_1.DbConfig.username,
                password: typeormconfig_1.DbConfig.password,
                database: typeormconfig_1.DbConfig.database,
                schema: typeormconfig_1.DbConfig.schema,
                port: typeormconfig_1.DbConfig.port,
                entities: typeormconfig_1.DbConfig.entities,
                synchronize: typeormconfig_1.DbConfig.synchronize,
            }),
            logger_module_1.LoggerModule,
            exceptions_module_1.ExceptionsModule,
            Publication_module_1.ServicesModule,
            ServiceInteraction_module_1.InteractionsModule,
            Classification_module_1.ClassificationsModule
        ],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map