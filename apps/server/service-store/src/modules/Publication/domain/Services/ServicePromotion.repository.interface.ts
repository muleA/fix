import { ServicePromotion } from './servicePromotion';
export interface IServicePromotionRepository {
  insertServicePromotion(servicePromotion: ServicePromotion): Promise<ServicePromotion>;
  findAll(): Promise<ServicePromotion[]>;
  findById(id: string): Promise<ServicePromotion>; 
  updateServicePromotion(id: string,servicePromotion: ServicePromotion): Promise<void>;
  deleteById(id: string): Promise<void>;

}