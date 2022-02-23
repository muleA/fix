import { ServiceFee } from '../../domain/services/ServiceFee';
export declare class ServiceFeePresenter {
    id: string;
    serviceId: string;
    fee: number;
    currency: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(serviceFee: ServiceFee);
}
