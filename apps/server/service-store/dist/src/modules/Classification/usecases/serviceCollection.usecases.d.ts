import { CreateServiceEntryDto, UpdateServiceEntryDto } from '../controllers/serviceCollections/ServiceEntry.dto';
import { ServiceCollection } from '../domain/serviceCollections/serviceCollection';
import { IServiceCollectionRepository } from '../domain/serviceCollections/serviceCollection.repository.interface';
import { CreateServiceCollectionDto, UpdateServiceCollectionDto } from '../controllers/serviceCollections/serviceCollection.dto';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from '../controllers/ServiceCollections/ServiceResource.dto';
export declare class ServiceCollectionUseCases {
    private serviceCollectionRepository;
    private serviceCollectiondomain;
    private readonly logger;
    constructor(serviceCollectionRepository: IServiceCollectionRepository);
    createServiceCollection(serviceCollectionDto: CreateServiceCollectionDto): Promise<ServiceCollection>;
    deleteServiceCollection(id: string): Promise<void>;
    getServiceCollection(id: string): Promise<ServiceCollection>;
    fetServiceCollections(): Promise<ServiceCollection[]>;
    updateServiceCollection(serviceCollectionDto: UpdateServiceCollectionDto): Promise<void>;
    addServiceEntry(createServiceEntryDto: CreateServiceEntryDto): Promise<ServiceCollection>;
    updateServiceEntry(updateServiceEntryDto: UpdateServiceEntryDto): Promise<void>;
    deleteServiceEntry(id: string): Promise<void>;
    updateServiceEntries(createServiceEntryDto: CreateServiceEntryDto[]): Promise<void>;
    addServiceResource(createServiceResourceDto: CreateServiceResourceDto): Promise<ServiceCollection>;
    updateServiceResource(updateServiceResourceDto: UpdateServiceResourceDto): Promise<void>;
    deleteServiceResource(id: string): Promise<void>;
    updateResources(createServiceResourceDto: CreateServiceResourceDto[]): Promise<void>;
}
