import { ContactInfo } from '../serviceOwners/ContactInfo';
import { Address } from './address';
export declare class ServiceOwner {
    id: string;
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: ContactInfo;
    address: Address;
    code: string;
    organizationId: string;
    organizationName: string;
    createdAt: Date;
    updatedAt: Date;
}
