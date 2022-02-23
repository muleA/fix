import { Repository } from 'typeorm';
import { ServiceCollection } from '../../domain/serviceCollections/serviceCollection';
import { IServiceCollectionRepository } from '../../domain/serviceCollections/serviceCollection.repository.interface';
import { ServiceCollectionEntity } from './serviceCollection.entity';
export declare class ServiceCollectionRepository extends Repository<ServiceCollectionEntity> implements IServiceCollectionRepository {
    constructor();
    updateServiceCollection(id: string, serviceCollection: ServiceCollection): Promise<void>;
    insertServiceCollection(serviceCollection: ServiceCollection): Promise<ServiceCollection>;
    findAll(): Promise<ServiceCollection[]>;
    findById(id: string): Promise<ServiceCollection>;
    deleteById(id: string): Promise<void>;
    private toServiceCollection;
    private toServiceCollectionEntity;
}
