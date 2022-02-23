import { Address } from '../../domain/ServiceOwners/address';
export declare class UpdateAddressDto {
    country: string;
    city: string;
    houseNumber: string;
    street: string;
    static fromDTO(addressDto: UpdateAddressDto): Address;
}
export declare class CreateAddressDto {
    country: string;
    city: string;
    houseNumber: string;
    street: string;
    static fromDTO(addressDto: CreateAddressDto): Address;
}
