import { ServiceCollection } from '../../domain/ServiceCollections/serviceCollection';
import { UpdateServiceEntryDto } from './ServiceEntry.dto';
import { UpdateServiceResourceDto } from './ServiceResource.dto';
export declare class UpdateServiceCollectionDto {
    id: string;
    name: string;
    description: string;
    code: string;
    serviceEntries: UpdateServiceEntryDto[];
    supportedQualifications: string;
    version: number;
    procedure: string;
    isPublic: boolean;
    tags: string;
    serviceResources: UpdateServiceResourceDto[];
    targetCustomers: string;
    isArchived: boolean;
    static fromDTO(serviceCollectionDto: UpdateServiceCollectionDto): ServiceCollection;
}
export declare class CreateServiceCollectionDto {
    id: string;
    name: string;
    description: string;
    code: string;
    serviceEntries: UpdateServiceEntryDto[];
    supportedQualifications: string;
    version: number;
    procedure: string;
    isPublic: boolean;
    tags: string;
    serviceResources: UpdateServiceResourceDto[];
    targetCustomers: string;
    isArchived: boolean;
    static fromDTO(serviceCollectionDto: CreateServiceCollectionDto): ServiceCollection;
}
