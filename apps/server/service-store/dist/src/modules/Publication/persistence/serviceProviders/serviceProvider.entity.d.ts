import { CommonEntity } from 'src/modules/shared/CommonEntity';
import { DelegatedServiceEntity } from './DelegatedService.entity';
import { ContactInfo } from '../../domain/serviceOwners/ContactInfo';
import { Address } from '../../domain/ServiceOwners/address';
import { ProviderLocation } from '../../domain/ServiceProviders/ProviderLocation';
export declare class ServiceProviderEntity extends CommonEntity {
    id: string;
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: ContactInfo;
    location: ProviderLocation;
    address: Address;
    delegatedServices: DelegatedServiceEntity[];
    code: string;
    organizationId: string;
    organizationName: string;
}
