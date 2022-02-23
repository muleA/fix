import { DelegatedService } from '../serviceProviders/DelegatedService';
import { Address } from '../ServiceOwners/address';
import { ContactInfo } from '../serviceOwners/ContactInfo';
import { ProviderLocation } from './ProviderLocation';
export declare class ServiceProvider {
    constructor();
    id: string;
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: ContactInfo;
    location: ProviderLocation;
    address: Address;
    delegatedServices: DelegatedService[];
    code: string;
    organizationId: string;
    organizationName: string;
    createdAt: Date;
    updatedAt: Date;
    addDelegatedService(createDelegatedService: DelegatedService): Promise<void>;
    updateDelegatedService(delegatedService: DelegatedService): Promise<void>;
    removeDelegatedService(id: string): Promise<void>;
    updateDelegatedServices(delegatedServices: DelegatedService[]): Promise<void>;
}
