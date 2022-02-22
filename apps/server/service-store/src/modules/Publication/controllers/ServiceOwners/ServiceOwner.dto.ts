import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ServiceOwner } from '../../domain/ServiceOwners/serviceOwner';
  import { CreateContactInfoDto, UpdateContactInfoDto } from './ContactInfo.dto';
 
/**
*A class which contains proporties of ServiceOwner that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceOwnerDto {
  
@ApiProperty()
id: string;
    
@ApiProperty()
shortName: string;
    
@ApiProperty()
fullName: string;
    
@ApiProperty()
sector: string;
  contactInfo: UpdateContactInfoDto;
     
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
*A method that mapes  UpdateServiceOwnerDto object data to  ServiceOwner domain object
*@returns ServiceOwner domain object which contains ServiceOwner  information
*/
static fromDTO(serviceOwnerDto:UpdateServiceOwnerDto): ServiceOwner
{
const serviceOwner: ServiceOwner = new ServiceOwner();  
 
serviceOwner.id=serviceOwnerDto.id; 


 
serviceOwner.shortName=serviceOwnerDto.shortName; 


 
serviceOwner.fullName=serviceOwnerDto.fullName; 


 
serviceOwner.sector=serviceOwnerDto.sector; 


   

serviceOwner.contactInfo= UpdateContactInfoDto.fromDTO(serviceOwnerDto.contactInfo); 
    
serviceOwner.address=serviceOwnerDto.address; 


 
serviceOwner.code=serviceOwnerDto.code; 


 
serviceOwner.organizationId=serviceOwnerDto.organizationId; 


 
serviceOwner.organizationName=serviceOwnerDto.organizationName; 


 
serviceOwner.createdAt=serviceOwnerDto.createdAt; 


 
serviceOwner.updatedAt=serviceOwnerDto.updatedAt; 


return serviceOwner;
  }
}
/**
*A class wich contains proporties of ServiceOwner that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceOwnerDto {
     
@ApiProperty()
id: string;
    
@ApiProperty()
shortName: string;
    
@ApiProperty()
fullName: string;
    
@ApiProperty()
sector: string;
  contactInfo: CreateContactInfoDto;
     
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
*A method that mapes  CreateServiceOwnerDto object data to  ServiceOwner domain object
*@returns ServiceOwner domain object which contains ServiceOwner  information
*/    
static fromDTO(serviceOwnerDto:CreateServiceOwnerDto): ServiceOwner
{
const serviceOwner: ServiceOwner = new ServiceOwner();  
 
serviceOwner.id=serviceOwnerDto.id; 
 
serviceOwner.shortName=serviceOwnerDto.shortName; 
 
serviceOwner.fullName=serviceOwnerDto.fullName; 
 
serviceOwner.sector=serviceOwnerDto.sector; 
   

serviceOwner.contactInfo= CreateContactInfoDto.fromDTO(serviceOwnerDto.contactInfo); 
    
serviceOwner.address=serviceOwnerDto.address; 
 
serviceOwner.code=serviceOwnerDto.code; 
 
serviceOwner.organizationId=serviceOwnerDto.organizationId; 
 
serviceOwner.organizationName=serviceOwnerDto.organizationName; 
 
serviceOwner.createdAt=serviceOwnerDto.createdAt; 
 
serviceOwner.updatedAt=serviceOwnerDto.updatedAt; 
     return serviceOwner;
    }
}