import { Address } from '../../domain/ServiceOwners/address';
import { ServiceOwner } from '../../domain/ServiceOwners/serviceOwner';
import { CreateContactInfoDto, UpdateContactInfoDto } from './ContactInfo.dto';
export declare class UpdateServiceOwnerDto {
    id: string;
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: UpdateContactInfoDto;
    address: Address;
    code: string;
    organizationId: string;
    organizationName: string;
    static fromDTO(serviceOwnerDto: UpdateServiceOwnerDto): ServiceOwner;
}
export declare class CreateServiceOwnerDto {
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: CreateContactInfoDto;
    address: Address;
    code: string;
    organizationId: string;
    organizationName: string;
    static fromDTO(serviceOwnerDto: CreateServiceOwnerDto): ServiceOwner;
}
