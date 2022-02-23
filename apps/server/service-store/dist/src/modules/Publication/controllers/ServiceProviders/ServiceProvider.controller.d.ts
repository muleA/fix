import { CreateDelegatedServiceDto, UpdateDelegatedServiceDto } from './DelegatedService.dto';
import { ServiceProviderPresenter } from './serviceProvider.presenter';
import { CreateServiceProviderDto, UpdateServiceProviderDto } from '../serviceProviders/serviceProvider.dto';
import { ServiceProviderUseCases } from '../../usecases/serviceProvider.usecases';
export declare class ServiceProvidersController {
    private useCase;
    constructor(useCase: ServiceProviderUseCases);
    getServiceProvider(id: string): Promise<ServiceProviderPresenter>;
    getServiceProviders(): Promise<ServiceProviderPresenter[]>;
    updateServiceProvider(updateServiceProviderDto: UpdateServiceProviderDto): Promise<string>;
    deleteServiceProvider(id: string): Promise<string>;
    createServiceProvider(createServiceProviderDto: CreateServiceProviderDto): Promise<ServiceProviderPresenter>;
    addDelegatedService(createDelegatedServiceDto: CreateDelegatedServiceDto): Promise<ServiceProviderPresenter>;
    editDelegatedService(createDelegatedServiceDto: UpdateDelegatedServiceDto): Promise<string>;
    removeDelegatedService(id: string): Promise<string>;
    updateDelegatedService(createDelegatedServiceDto: CreateDelegatedServiceDto[]): Promise<string>;
}
