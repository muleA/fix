import { ServiceCollection } from '../../domain/ServiceCollections/serviceCollection';
import { ServiceEntryPresenter } from './ServiceEntry.presenter';
import { ServiceResourcePresenter } from './ServiceResource.presenter';
export declare class ServiceCollectionPresenter {
    id: string;
    name: string;
    description: string;
    code: string;
    serviceEntries: ServiceEntryPresenter[];
    supportedQualifications: string;
    version: number;
    procedure: string;
    isPublic: boolean;
    tags: string;
    resources: ServiceResourcePresenter[];
    targetCustomers: string;
    isArchived: boolean;
    createdAt: Date;
    updatedAt: Date;
    constructor(serviceCollection: ServiceCollection);
}
