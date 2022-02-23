import { Address } from '../../domain/ServiceOwners/address';
import { ProviderLocation } from '../../domain/ServiceProviders/ProviderLocation';
import { ServiceProvider } from '../../domain/ServiceProviders/serviceProvider';
import { CreateContactInfoDto, UpdateContactInfoDto } from '../ServiceOwners/ContactInfo.dto';
import { CreateDelegatedServiceDto, UpdateDelegatedServiceDto } from './DelegatedService.dto';
export declare class UpdateServiceProviderDto {
    id: string;
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: UpdateContactInfoDto;
    location: ProviderLocation;
    address: Address;
    delegatedServices: UpdateDelegatedServiceDto[];
    code: string;
    organizationId: string;
    organizationName: string;
    static fromDTO(serviceProviderDto: UpdateServiceProviderDto): ServiceProvider;
}
export declare class CreateServiceProviderDto {
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: CreateContactInfoDto;
    location: ProviderLocation;
    address: Address;
    delegatedServices: CreateDelegatedServiceDto[];
    code: string;
    organizationId: string;
    organizationName: string;
    static fromDTO(serviceProviderDto: CreateServiceProviderDto): ServiceProvider;
}
