import { Module } from "@nestjs/common";
import { LoggerModule } from "./infrastructure/logger/logger.module";
import { ExceptionsModule } from "./infrastructure/exceptions/exceptions.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DbConfig } from '../typeormconfig';
import { InteractionsModule } from "./modules/ServiceInteraction/ServiceInteraction.module";
import { ClassificationsModule } from "./modules/Classification/Classification.module";
import { ServicesModule } from "./modules/Publication/Publication.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: DbConfig.host,
      username: DbConfig.username,
      password: DbConfig.password,
      database: DbConfig.database,
      schema: DbConfig.schema,
      port: DbConfig.port,
      entities: DbConfig.entities, // getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      synchronize: DbConfig.synchronize, //, JSON.parse(DbConfig.DATABASE_SYNCHRONIZE), //DbConfig.ENV === 'DEV',
    }),
    LoggerModule,
    ExceptionsModule,
    ServicesModule,
    InteractionsModule,
    ClassificationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log(DbConfig);
  }
}