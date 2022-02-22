import { ApiProperty } from '@nestjs/swagger';
import { ServiceProvider } from '../../domain/ServiceProviders/serviceProvider';
import { ContactInfoPresenter,  } from './ContactInfo.presenter';
import {DelegatedServicePresenter } from './DelegatedService.presenter';
    
/**
*A class which contains proporties of ServiceProvider that used to put data to be returned to client
*
*/
export class ServiceProviderPresenter {
     
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
location: Location;
  
@ApiProperty()
address: Address;
@ApiProperty()
delegatedServices:DelegatedServicePresenter[];
     
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
*A constructor which copy  ServiceProvider domain object Property value to  ServiceProviderPresenter properties
*/
constructor(serviceProvider: ServiceProvider) {
  
this.id = serviceProvider.id;  

  
this.shortName = serviceProvider.shortName;  

  
this.fullName = serviceProvider.fullName;  

  
this.sector = serviceProvider.sector;  

   
this.contactInfo = new ContactInfoPresenter( serviceProvider.contactInfo);  
     
this.location = serviceProvider.location;  

  
this.address = serviceProvider.address;  

this.delegatedServices = serviceProvider.delegatedServices.map(item=>new DelegatedServicePresenter(item));  
     
this.code = serviceProvider.code;  

  
this.organizationId = serviceProvider.organizationId;  

  
this.organizationName = serviceProvider.organizationName;  

  
this.createdAt = serviceProvider.createdAt;  

  
this.updatedAt = serviceProvider.updatedAt;  

  
    
  }
}