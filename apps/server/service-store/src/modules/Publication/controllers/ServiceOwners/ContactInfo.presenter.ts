import { ApiProperty } from '@nestjs/swagger';
import { ContactInfo } from '../../domain/ContactInfos/contactInfo';
 
/**
*A class which contains proporties of ContactInfo that used to put data to be returned to client
*
*/
export class ContactInfoPresenter {
     
@ApiProperty()
email: string;
  
@ApiProperty()
phone: string;
  
@ApiProperty()
name: string;
/**
*A constructor which copy  ContactInfo domain object Property value to  ContactInfoPresenter properties
*/
constructor(contactInfo: ContactInfo) {
  
this.email = contactInfo.email;  

  
this.phone = contactInfo.phone;  

  
this.name = contactInfo.name;  

  
    
  }
}