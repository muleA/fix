import { ApiProperty } from '@nestjs/swagger';
import { Language } from '../../domain/Languages/language';
 
/**
*A class which contains proporties of Language that used to put data to be returned to client
*
*/
export class LanguagePresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
serviceId: string;
  
@ApiProperty()
name: string;
  
@ApiProperty()
code: string;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  Language domain object Property value to  LanguagePresenter properties
*/
constructor(language: Language) {
  
this.id = language.id;  

  
this.serviceId = language.serviceId;  

  
this.name = language.name;  

  
this.code = language.code;  

  
this.createdAt = language.createdAt;  

  
this.updatedAt = language.updatedAt;  

  
    
  }
}