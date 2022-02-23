import { ServicePromotion } from '../../domain/Services/servicePromotion';
export declare class UpdateServicePromotionDto {
    id: string;
    serviceId: string;
    from: Date;
    to: Date;
    static fromDTO(servicePromotionDto: UpdateServicePromotionDto): ServicePromotion;
}
export declare class CreateServicePromotionDto {
    id: string;
    serviceId: string;
    from: Date;
    to: Date;
    static fromDTO(servicePromotionDto: CreateServicePromotionDto): ServicePromotion;
}
