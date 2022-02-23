import { Address } from '../../domain/ServiceOwners/address';
import { ServiceOwner } from '../../domain/ServiceOwners/serviceOwner';
import { ContactInfoPresenter } from './ContactInfo.presenter';
export declare class ServiceOwnerPresenter {
    id: string;
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: ContactInfoPresenter;
    address: Address;
    code: string;
    organizationId: string;
    organizationName: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(serviceOwner: ServiceOwner);
}
