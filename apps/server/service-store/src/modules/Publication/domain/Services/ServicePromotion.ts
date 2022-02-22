import { InjectRepository } from '@nestjs/typeorm';

import { IServicePromotionRepository } from '../../domain/servicePromotions/servicePromotion.repository.interface';
export class  ServicePromotion {
 constructor() { } 
 id: string;  
serviceId: string;  
from: Date;  
to: Date;  
createdAt: Date;  
updatedAt: Date;  

}