import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { DelegatedService } from '../../domain/DelegatedServices/delegatedService';
   
/**
*A class which contains proporties of DelegatedService that used to receive paramamer values to be updated in the database
*/
export class UpdateDelegatedServiceDto {
  
@ApiProperty()
id: string;
    
@ApiProperty()
providerId: string;
    
@ApiProperty()
serviceId: string;
    
@ApiProperty()
title: string;
    
@ApiProperty()
dispatchingRule: string;
    
@ApiProperty()
status: string;
    
@ApiProperty()
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  UpdateDelegatedServiceDto object data to  DelegatedService domain object
*@returns DelegatedService domain object which contains DelegatedService  information
*/
static fromDTO(delegatedServiceDto:UpdateDelegatedServiceDto): DelegatedService
{
const delegatedService: DelegatedService = new DelegatedService();  
 
delegatedService.id=delegatedServiceDto.id; 


 
delegatedService.providerId=delegatedServiceDto.providerId; 


 
delegatedService.serviceId=delegatedServiceDto.serviceId; 


 
delegatedService.title=delegatedServiceDto.title; 


 
delegatedService.dispatchingRule=delegatedServiceDto.dispatchingRule; 


 
delegatedService.status=delegatedServiceDto.status; 


 
delegatedService.createdAt=delegatedServiceDto.createdAt; 


 
delegatedService.updatedAt=delegatedServiceDto.updatedAt; 


return delegatedService;
  }
}
/**
*A class wich contains proporties of DelegatedService that used to receive paramamer values to be saved to database
*
*/
export class CreateDelegatedServiceDto {
     
@ApiProperty()
id: string;
    
@ApiProperty()
providerId: string;
    
@ApiProperty()
serviceId: string;
    
@ApiProperty()
title: string;
    
@ApiProperty()
dispatchingRule: string;
    
@ApiProperty()
status: string;
    
@ApiProperty()
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  CreateDelegatedServiceDto object data to  DelegatedService domain object
*@returns DelegatedService domain object which contains DelegatedService  information
*/    
static fromDTO(delegatedServiceDto:CreateDelegatedServiceDto): DelegatedService
{
const delegatedService: DelegatedService = new DelegatedService();  
 
delegatedService.id=delegatedServiceDto.id; 
 
delegatedService.providerId=delegatedServiceDto.providerId; 
 
delegatedService.serviceId=delegatedServiceDto.serviceId; 
 
delegatedService.title=delegatedServiceDto.title; 
 
delegatedService.dispatchingRule=delegatedServiceDto.dispatchingRule; 
 
delegatedService.status=delegatedServiceDto.status; 
 
delegatedService.createdAt=delegatedServiceDto.createdAt; 
 
delegatedService.updatedAt=delegatedServiceDto.updatedAt; 
     return delegatedService;
    }
}