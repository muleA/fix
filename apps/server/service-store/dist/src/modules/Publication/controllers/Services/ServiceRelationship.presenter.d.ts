import { ServiceRelationship } from '../../domain/Services/serviceRelationship';
export declare class ServiceRelationshipPresenter {
    id: string;
    serviceId: string;
    relatedToServiceId: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(serviceRelationship: ServiceRelationship);
}
