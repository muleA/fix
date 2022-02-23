import { CreateDelegatedServiceDto, UpdateDelegatedServiceDto } from '../controllers/serviceProviders/DelegatedService.dto';
import { ServiceProvider } from '../domain/serviceProviders/serviceProvider';
import { IServiceProviderRepository } from '../domain/serviceProviders/serviceProvider.repository.interface';
import { CreateServiceProviderDto, UpdateServiceProviderDto } from '../controllers/serviceProviders/serviceProvider.dto';
export declare class ServiceProviderUseCases {
    private serviceProviderRepository;
    private serviceProviderdomain;
    private readonly logger;
    constructor(serviceProviderRepository: IServiceProviderRepository);
    createServiceProvider(serviceProviderDto: CreateServiceProviderDto): Promise<ServiceProvider>;
    deleteServiceProvider(id: string): Promise<void>;
    getServiceProvider(id: string): Promise<ServiceProvider>;
    fetServiceProviders(): Promise<ServiceProvider[]>;
    updateServiceProvider(serviceProviderDto: UpdateServiceProviderDto): Promise<void>;
    addDelegatedService(createDelegatedServiceDto: CreateDelegatedServiceDto): Promise<ServiceProvider>;
    updateDelegatedService(updateDelegatedServiceDto: UpdateDelegatedServiceDto): Promise<void>;
    deleteDelegatedService(id: string): Promise<void>;
    updateDelegatedServices(createDelegatedServiceDto: CreateDelegatedServiceDto[]): Promise<void>;
}
