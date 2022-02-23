import { ServiceRelationship } from '../../domain/Services/serviceRelationship';
export declare class UpdateServiceRelationshipDto {
    id: string;
    serviceId: string;
    relatedToServiceId: string;
    status: string;
    static fromDTO(serviceRelationshipDto: UpdateServiceRelationshipDto): ServiceRelationship;
}
export declare class CreateServiceRelationshipDto {
    id: string;
    serviceId: string;
    relatedToServiceId: string;
    status: string;
    static fromDTO(serviceRelationshipDto: CreateServiceRelationshipDto): ServiceRelationship;
}
