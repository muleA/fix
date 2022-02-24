"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConfig = void 0;
require("dotenv").config();
exports.DbConfig = {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    schema: process.env.DATABASE_SCHEMA,
    entities: [__dirname + "/src/**/**/**/**/*.entity{.ts,.js}"],
    synchronize: false,
    migrationsRun: false,
    logging: true,
    logger: "file",
    migrations: ["src/migrations/**/*{.ts,.js}"],
    cli: {
        migrationsDir: "src/migrations",
    },
};
//# sourceMappingURL=typeormconfig.js.map