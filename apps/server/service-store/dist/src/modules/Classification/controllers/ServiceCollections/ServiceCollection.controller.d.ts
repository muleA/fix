import { CreateServiceEntryDto, UpdateServiceEntryDto } from './ServiceEntry.dto';
import { ServiceCollectionPresenter } from './serviceCollection.presenter';
import { CreateServiceCollectionDto, UpdateServiceCollectionDto } from '../serviceCollections/serviceCollection.dto';
import { ServiceCollectionUseCases } from '../../usecases/serviceCollection.usecases';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from './ServiceResource.dto';
export declare class ServiceCollectionsController {
    private useCase;
    constructor(useCase: ServiceCollectionUseCases);
    getServiceCollection(id: string): Promise<ServiceCollectionPresenter>;
    getServiceCollections(): Promise<ServiceCollectionPresenter[]>;
    updateServiceCollection(updateServiceCollectionDto: UpdateServiceCollectionDto): Promise<string>;
    deleteServiceCollection(id: string): Promise<string>;
    createServiceCollection(createServiceCollectionDto: CreateServiceCollectionDto): Promise<ServiceCollectionPresenter>;
    addServiceEntry(createServiceEntryDto: CreateServiceEntryDto): Promise<ServiceCollectionPresenter>;
    editServiceEntry(createServiceEntryDto: UpdateServiceEntryDto): Promise<string>;
    removeServiceEntry(id: string): Promise<string>;
    updateServiceEntry(createServiceEntryDto: CreateServiceEntryDto[]): Promise<string>;
    addServiceResource(createServiceResourceDto: CreateServiceResourceDto): Promise<ServiceCollectionPresenter>;
    editServiceResource(createServiceResourceDto: UpdateServiceResourceDto): Promise<string>;
    removeServiceResource(id: string): Promise<string>;
    updateServiceResource(createServiceResourceDto: CreateServiceResourceDto[]): Promise<string>;
}
