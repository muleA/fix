import { ServiceCollectionEntity } from "./serviceCollection.entity";
export declare class ServiceEntryEntity {
    id: string;
    serviceId: string;
    serviceCollectionId: string;
    serviceCollection: ServiceCollectionEntity;
}
