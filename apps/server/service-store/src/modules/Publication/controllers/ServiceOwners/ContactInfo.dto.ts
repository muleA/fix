import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ContactInfo } from '../../domain/ContactInfos/contactInfo';
   
/**
*A class which contains proporties of ContactInfo that used to receive paramamer values to be updated in the database
*/
export class UpdateContactInfoDto {
  
@ApiProperty()
email: string;
    
@ApiProperty()
phone: string;
    
@ApiProperty()
name: string;
  /**
*A method that mapes  UpdateContactInfoDto object data to  ContactInfo domain object
*@returns ContactInfo domain object which contains ContactInfo  information
*/
static fromDTO(contactInfoDto:UpdateContactInfoDto): ContactInfo
{
const contactInfo: ContactInfo = new ContactInfo();  
 
contactInfo.email=contactInfoDto.email; 


 
contactInfo.phone=contactInfoDto.phone; 


 
contactInfo.name=contactInfoDto.name; 


return contactInfo;
  }
}
/**
*A class wich contains proporties of ContactInfo that used to receive paramamer values to be saved to database
*
*/
export class CreateContactInfoDto {
     
@ApiProperty()
email: string;
    
@ApiProperty()
phone: string;
    
@ApiProperty()
name: string;
  /**
*A method that mapes  CreateContactInfoDto object data to  ContactInfo domain object
*@returns ContactInfo domain object which contains ContactInfo  information
*/    
static fromDTO(contactInfoDto:CreateContactInfoDto): ContactInfo
{
const contactInfo: ContactInfo = new ContactInfo();  
 
contactInfo.email=contactInfoDto.email; 
 
contactInfo.phone=contactInfoDto.phone; 
 
contactInfo.name=contactInfoDto.name; 
     return contactInfo;
    }
}