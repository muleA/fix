import { ApiProperty } from '@nestjs/swagger';
import { ServiceEntry } from '../../domain/ServiceEntrys/serviceEntry';
 
/**
*A class which contains proporties of ServiceEntry that used to put data to be returned to client
*
*/
export class ServiceEntryPresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
serviceId: string;
  
@ApiProperty()
serviceCollectionId: string;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  ServiceEntry domain object Property value to  ServiceEntryPresenter properties
*/
constructor(serviceEntry: ServiceEntry) {
  
this.id = serviceEntry.id;  

  
this.serviceId = serviceEntry.serviceId;  

  
this.serviceCollectionId = serviceEntry.serviceCollectionId;  

  
this.createdAt = serviceEntry.createdAt;  

  
this.updatedAt = serviceEntry.updatedAt;  

  
    
  }
}