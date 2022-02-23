import { ServiceDependency } from '../../domain/services/ServiceDependency';
export declare class ServiceDependencyPresenter {
    id: string;
    serviceId: string;
    dependsOn: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(serviceDependency: ServiceDependency);
}
