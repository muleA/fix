import { ApiProperty } from '@nestjs/swagger';
import { ServicePromotion } from '../../domain/ServicePromotions/servicePromotion';
 
/**
*A class which contains proporties of ServicePromotion that used to put data to be returned to client
*
*/
export class ServicePromotionPresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
serviceId: string;
  
@ApiProperty()
from: Date;
  
@ApiProperty()
to: Date;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  ServicePromotion domain object Property value to  ServicePromotionPresenter properties
*/
constructor(servicePromotion: ServicePromotion) {
  
this.id = servicePromotion.id;  

  
this.serviceId = servicePromotion.serviceId;  

  
this.from = servicePromotion.from;  

  
this.to = servicePromotion.to;  

  
this.createdAt = servicePromotion.createdAt;  

  
this.updatedAt = servicePromotion.updatedAt;  

  
    
  }
}