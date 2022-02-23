import { ServiceEntry } from '../../domain/serviceCollections/ServiceEntry';
export declare class UpdateServiceEntryDto {
    id: string;
    serviceId: string;
    serviceCollectionId: string;
    static fromDTO(serviceEntryDto: UpdateServiceEntryDto): ServiceEntry;
}
export declare class CreateServiceEntryDto {
    id: string;
    serviceId: string;
    serviceCollectionId: string;
    static fromDTO(serviceEntryDto: CreateServiceEntryDto): ServiceEntry;
}
