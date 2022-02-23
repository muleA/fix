import { ServiceResource } from '../../domain/serviceCollections/ServiceResource';
export declare class UpdateServiceResourceDto {
    id: string;
    serviceCollectionId: string;
    attachmentUrl: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    static fromDTO(serviceResourceDto: UpdateServiceResourceDto): ServiceResource;
}
export declare class CreateServiceResourceDto {
    id: string;
    serviceCollectionId: string;
    attachmentUrl: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    static fromDTO(serviceResourceDto: CreateServiceResourceDto): ServiceResource;
}
