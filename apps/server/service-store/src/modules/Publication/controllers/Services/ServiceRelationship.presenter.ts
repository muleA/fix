import { ApiProperty } from '@nestjs/swagger';
import { ServiceRelationship } from '../../domain/Services/serviceRelationship';

 
/**
*A class which contains proporties of ServiceRelationship that used to put data to be returned to client
*
*/
export class ServiceRelationshipPresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
serviceId: string;
  
@ApiProperty()
relatedToServiceId: string;
  
@ApiProperty()
status: string;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  ServiceRelationship domain object Property value to  ServiceRelationshipPresenter properties
*/
constructor(serviceRelationship: ServiceRelationship) {
  
this.id = serviceRelationship.id;  

  
this.serviceId = serviceRelationship.serviceId;  

  
this.relatedToServiceId = serviceRelationship.relatedToServiceId;  

  
this.status = serviceRelationship.status;  

  
this.createdAt = serviceRelationship.createdAt;  

  
this.updatedAt = serviceRelationship.updatedAt;  

  
    
  }
}