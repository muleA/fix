import { ServiceProvider } from './serviceProvider';
export interface IServiceProviderRepository {
    insertServiceProvider(serviceProvider: ServiceProvider): Promise<ServiceProvider>;
    findAll(): Promise<ServiceProvider[]>;
    findById(id: string): Promise<ServiceProvider>;
    updateServiceProvider(id: string, serviceProvider: ServiceProvider): Promise<void>;
    deleteById(id: string): Promise<void>;
}
