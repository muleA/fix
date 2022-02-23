import { DelegatedService } from '../../domain/serviceProviders/DelegatedService';
export declare class DelegatedServicePresenter {
    id: string;
    providerId: string;
    serviceId: string;
    title: string;
    dispatchingRule: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(delegatedService: DelegatedService);
}
