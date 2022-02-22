import { ApiProperty } from '@nestjs/swagger';
import { ServiceOwner } from '../../domain/ServiceOwners/serviceOwner';
import { ContactInfoPresenter,  } from './ContactInfo.presenter';
 
/**
*A class which contains proporties of ServiceOwner that used to put data to be returned to client
*
*/
export class ServiceOwnerPresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
shortName: string;
  
@ApiProperty()
fullName: string;
  
@ApiProperty()
sector: string;
contactInfo: ContactInfoPresenter;
     
@ApiProperty()
address: Address;
  
@ApiProperty()
code: string;
  
@ApiProperty()
organizationId: string;
  
@ApiProperty()
organizationName: string;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  ServiceOwner domain object Property value to  ServiceOwnerPresenter properties
*/
constructor(serviceOwner: ServiceOwner) {
  
this.id = serviceOwner.id;  

  
this.shortName = serviceOwner.shortName;  

  
this.fullName = serviceOwner.fullName;  

  
this.sector = serviceOwner.sector;  

   
this.contactInfo = new ContactInfoPresenter( serviceOwner.contactInfo);  
     
this.address = serviceOwner.address;  

  
this.code = serviceOwner.code;  

  
this.organizationId = serviceOwner.organizationId;  

  
this.organizationName = serviceOwner.organizationName;  

  
this.createdAt = serviceOwner.createdAt;  

  
this.updatedAt = serviceOwner.updatedAt;  

  
    
  }
}