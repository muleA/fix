import { ServiceCollection } from '../../domain/ServiceCollections/serviceCollection';
import { CreateServiceEntryDto, UpdateServiceEntryDto } from './ServiceEntry.dto';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from './ServiceResource.dto';
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
    resources: UpdateServiceResourceDto[];
    targetCustomers: string;
    isArchived: boolean;
    createdAt: Date;
    updatedAt: Date;
    static fromDTO(serviceCollectionDto: UpdateServiceCollectionDto): ServiceCollection;
}
export declare class CreateServiceCollectionDto {
    id: string;
    name: string;
    description: string;
    code: string;
    serviceEntries: CreateServiceEntryDto[];
    supportedQualifications: string;
    version: number;
    procedure: string;
    isPublic: boolean;
    tags: string;
    resources: CreateServiceResourceDto[];
    targetCustomers: string;
    isArchived: boolean;
    createdAt: Date;
    updatedAt: Date;
    static fromDTO(serviceCollectionDto: CreateServiceCollectionDto): ServiceCollection;
}
