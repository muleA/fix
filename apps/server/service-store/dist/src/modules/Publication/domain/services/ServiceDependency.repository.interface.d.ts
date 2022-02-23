import { ServiceDependency } from './serviceDependency';
export interface IServiceDependencyRepository {
    insertServiceDependency(serviceDependency: ServiceDependency): Promise<ServiceDependency>;
    findAll(): Promise<ServiceDependency[]>;
    findById(id: string): Promise<ServiceDependency>;
    updateServiceDependency(id: string, serviceDependency: ServiceDependency): Promise<void>;
    deleteById(id: string): Promise<void>;
}
