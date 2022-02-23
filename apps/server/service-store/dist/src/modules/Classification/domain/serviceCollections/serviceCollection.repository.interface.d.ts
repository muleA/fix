import { ServiceCollection } from './serviceCollection';
export interface IServiceCollectionRepository {
    insertServiceCollection(serviceCollection: ServiceCollection): Promise<ServiceCollection>;
    findAll(): Promise<ServiceCollection[]>;
    findById(id: string): Promise<ServiceCollection>;
    updateServiceCollection(id: string, serviceCollection: ServiceCollection): Promise<void>;
    deleteById(id: string): Promise<void>;
}
