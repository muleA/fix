import { ServiceResource } from '../../domain/serviceCollections/ServiceResource';
export declare class ServiceResourcePresenter {
    id: string;
    serviceCollectionId: string;
    attachmentUrl: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(serviceResource: ServiceResource);
}
