import { Address } from '../../domain/ServiceOwners/address';
import { ProviderLocation } from '../../domain/ServiceProviders/ProviderLocation';
import { ServiceProvider } from '../../domain/ServiceProviders/serviceProvider';
import { ContactInfoPresenter } from '../ServiceOwners/ContactInfo.presenter';
import { DelegatedServicePresenter } from './DelegatedService.presenter';
export declare class ServiceProviderPresenter {
    id: string;
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: ContactInfoPresenter;
    location: ProviderLocation;
    address: Address;
    delegatedServices: DelegatedServicePresenter[];
    code: string;
    organizationId: string;
    organizationName: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(serviceProvider: ServiceProvider);
}
