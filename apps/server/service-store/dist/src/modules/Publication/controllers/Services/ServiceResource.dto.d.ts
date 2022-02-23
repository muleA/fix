import { ServiceResource } from '../../domain/services/ServiceResource';
export declare class UpdateServiceResourceDto {
    id: string;
    serviceId: string;
    attachmentUrl: string;
    content: string;
    static fromDTO(serviceResourceDto: UpdateServiceResourceDto): ServiceResource;
}
export declare class CreateServiceResourceDto {
    id: string;
    serviceId: string;
    attachmentUrl: string;
    content: string;
    static fromDTO(serviceResourceDto: CreateServiceResourceDto): ServiceResource;
}
