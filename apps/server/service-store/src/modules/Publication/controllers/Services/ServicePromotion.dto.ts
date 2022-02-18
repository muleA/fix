import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ServicePromotion } from '../../domain/ServicePromotions/servicePromotion';
   
/**
*A class which contains proporties of ServicePromotion that used to receive paramamer values to be updated in the database
*/
export class UpdateServicePromotionDto {
  
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
*A method that mapes  UpdateServicePromotionDto object data to  ServicePromotion domain object
*@returns ServicePromotion domain object which contains ServicePromotion  information
*/
static fromDTO(servicePromotionDto:UpdateServicePromotionDto): ServicePromotion
{
const servicePromotion: ServicePromotion = new ServicePromotion();  
 
servicePromotion.id=servicePromotionDto.id; 


 
servicePromotion.serviceId=servicePromotionDto.serviceId; 


 
servicePromotion.from=servicePromotionDto.from; 


 
servicePromotion.to=servicePromotionDto.to; 


 
servicePromotion.createdAt=servicePromotionDto.createdAt; 


 
servicePromotion.updatedAt=servicePromotionDto.updatedAt; 


return servicePromotion;
  }
}
/**
*A class wich contains proporties of ServicePromotion that used to receive paramamer values to be saved to database
*
*/
export class CreateServicePromotionDto {
     
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
*A method that mapes  CreateServicePromotionDto object data to  ServicePromotion domain object
*@returns ServicePromotion domain object which contains ServicePromotion  information
*/    
static fromDTO(servicePromotionDto:CreateServicePromotionDto): ServicePromotion
{
const servicePromotion: ServicePromotion = new ServicePromotion();  
 
servicePromotion.id=servicePromotionDto.id; 
 
servicePromotion.serviceId=servicePromotionDto.serviceId; 
 
servicePromotion.from=servicePromotionDto.from; 
 
servicePromotion.to=servicePromotionDto.to; 
 
servicePromotion.createdAt=servicePromotionDto.createdAt; 
 
servicePromotion.updatedAt=servicePromotionDto.updatedAt; 
     return servicePromotion;
    }
}