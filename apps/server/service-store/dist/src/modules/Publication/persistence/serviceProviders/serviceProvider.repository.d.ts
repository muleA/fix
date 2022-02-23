import { Repository } from 'typeorm';
import { ServiceProvider } from '../../domain/serviceProviders/serviceProvider';
import { IServiceProviderRepository } from '../../domain/serviceProviders/serviceProvider.repository.interface';
import { ServiceProviderEntity } from './serviceProvider.entity';
export declare class ServiceProviderRepository extends Repository<ServiceProviderEntity> implements IServiceProviderRepository {
    constructor();
    updateServiceProvider(id: string, serviceProvider: ServiceProvider): Promise<void>;
    insertServiceProvider(serviceProvider: ServiceProvider): Promise<ServiceProvider>;
    findAll(): Promise<ServiceProvider[]>;
    findById(id: string): Promise<ServiceProvider>;
    deleteById(id: string): Promise<void>;
    private toServiceProvider;
    private toServiceProviderEntity;
}
