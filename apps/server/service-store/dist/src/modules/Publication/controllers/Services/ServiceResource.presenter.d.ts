import { ServiceResource } from '../../domain/services/ServiceResource';
export declare class ServiceResourcePresenter {
    id: string;
    serviceId: string;
    attachmentUrl: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(serviceResource: ServiceResource);
}
