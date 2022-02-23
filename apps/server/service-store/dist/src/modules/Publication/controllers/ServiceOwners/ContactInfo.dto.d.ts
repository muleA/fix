import { ContactInfo } from '../../domain/serviceOwners/ContactInfo';
export declare class UpdateContactInfoDto {
    email: string;
    phone: string;
    name: string;
    static fromDTO(contactInfoDto: UpdateContactInfoDto): ContactInfo;
}
export declare class CreateContactInfoDto {
    email: string;
    phone: string;
    name: string;
    static fromDTO(contactInfoDto: CreateContactInfoDto): ContactInfo;
}
