export declare const DbConfig: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    schema: string;
    autoLoadEntities: boolean;
    entities: string[];
    synchronize: boolean;
    migrationsRun: boolean;
    logging: boolean;
    logger: string;
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
};
