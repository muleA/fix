import { ServiceEntry } from '../../domain/serviceCollections/ServiceEntry';
export declare class ServiceEntryPresenter {
    id: string;
    serviceId: string;
    serviceCollectionId: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(serviceEntry: ServiceEntry);
}
