import { CommonEntity } from 'src/modules/shared/CommonEntity';
import { ServiceProviderEntity } from './serviceProvider.entity';
export declare class DelegatedServiceEntity extends CommonEntity {
    id: string;
    providerId: string;
    serviceId: string;
    serviceProvider: ServiceProviderEntity;
    title: string;
    dispatchingRule: string;
    status: string;
}
