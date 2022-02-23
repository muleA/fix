import { ServicePromotion } from '../../domain/Services/servicePromotion';
export declare class ServicePromotionPresenter {
    id: string;
    serviceId: string;
    from: Date;
    to: Date;
    createdAt: Date;
    updatedAt: Date;
    constructor(servicePromotion: ServicePromotion);
}
