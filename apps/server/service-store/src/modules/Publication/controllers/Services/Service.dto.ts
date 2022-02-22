import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Service } from '../../domain/Services/service';
  import { CreateMediaDto, UpdateMediaDto } from './Media.dto';
   import { CreateServiceFeeDto, UpdateServiceFeeDto } from './ServiceFee.dto';
   import { CreateProcessingTimeDto, UpdateProcessingTimeDto } from './ProcessingTime.dto';
   import { CreateServiceDependencyDto, UpdateServiceDependencyDto } from './ServiceDependency.dto';
   import { CreateLanguageDto, UpdateLanguageDto } from './Language.dto';
   import { CreateApplicationFormDto, UpdateApplicationFormDto } from './ApplicationForm.dto';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from './ServiceResource.dto';
    
/**
*A class which contains proporties of Service that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceDto {
  
@ApiProperty()
id: string;
    
@ApiProperty()
name: string;
    
@ApiProperty()
description: string;
    
@ApiProperty()
code: string;
    
@ApiProperty()
fullyQualifiedName: string;
  @ApiProperty()
medias: UpdateMediaDto[];
     
@ApiProperty()
supportedQualifications: string;
    
@ApiProperty()
version: number;
    
@ApiProperty()
procedure: string;
  @ApiProperty()
serviceFees: UpdateServiceFeeDto[];
   @ApiProperty()
processingTimes: UpdateProcessingTimeDto[];
   @ApiProperty()
serviceDependencies: UpdateServiceDependencyDto[];
   @ApiProperty()
languages: UpdateLanguageDto[];
   applicationForm: UpdateApplicationFormDto;
   @ApiProperty()
resources: UpdateServiceResourceDto[];
     
@ApiProperty()
targetCustomers: string;
    
@ApiProperty()
status: string;
    
@ApiProperty()
isPublic: boolean;
    
@ApiProperty()
isPublished: boolean;
    
@ApiProperty()
isArchived: boolean;
    
@ApiProperty()
tags: string;
    
@ApiProperty()
deliveryMethod: string;
    
@ApiProperty()
serviceOwnerId: string;
    
@ApiProperty()
averageRating: number;
    
@ApiProperty()
enableReview: boolean;
    
@ApiProperty()
policy: string;
    
@ApiProperty()
publishedOn: Date;
    
@ApiProperty()
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  UpdateServiceDto object data to  Service domain object
*@returns Service domain object which contains Service  information
*/
static fromDTO(serviceDto:UpdateServiceDto): Service
{
const service: Service = new Service();  
 
service.id=serviceDto.id; 


 
service.name=serviceDto.name; 


 
service.description=serviceDto.description; 


 
service.code=serviceDto.code; 


 
service.fullyQualifiedName=serviceDto.fullyQualifiedName; 


service.medias=serviceDto.medias.map(item=>UpdateMediaDto.fromDTO(item));  
    
service.supportedQualifications=serviceDto.supportedQualifications; 


 
service.version=serviceDto.version; 


 
service.procedure=serviceDto.procedure; 


service.serviceFees=serviceDto.serviceFees.map(item=>UpdateServiceFeeDto.fromDTO(item));  
   service.processingTimes=serviceDto.processingTimes.map(item=>UpdateProcessingTimeDto.fromDTO(item));  
   service.serviceDependencies=serviceDto.serviceDependencies.map(item=>UpdateServiceDependencyDto.fromDTO(item));  
   service.languages=serviceDto.languages.map(item=>UpdateLanguageDto.fromDTO(item));  
      

service.applicationForm= UpdateApplicationFormDto.fromDTO(serviceDto.applicationForm); 
   service.resources=serviceDto.resources.map(item=>UpdateServiceResourceDto.fromDTO(item));  
    
service.targetCustomers=serviceDto.targetCustomers; 


 
service.status=serviceDto.status; 


 
service.isPublic=serviceDto.isPublic; 


 
service.isPublished=serviceDto.isPublished; 


 
service.isArchived=serviceDto.isArchived; 


 
service.tags=serviceDto.tags; 


 
service.deliveryMethod=serviceDto.deliveryMethod; 


 
service.serviceOwnerId=serviceDto.serviceOwnerId; 


 
service.averageRating=serviceDto.averageRating; 


 
service.enableReview=serviceDto.enableReview; 


 
service.policy=serviceDto.policy; 


 
service.publishedOn=serviceDto.publishedOn; 


 
service.createdAt=serviceDto.createdAt; 


 
service.updatedAt=serviceDto.updatedAt; 


return service;
  }
}
/**
*A class wich contains proporties of Service that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceDto {
     
@ApiProperty()
id: string;
    
@ApiProperty()
name: string;
    
@ApiProperty()
description: string;
    
@ApiProperty()
code: string;
    
@ApiProperty()
fullyQualifiedName: string;
  @ApiProperty()
medias: CreateMediaDto[];
     
@ApiProperty()
supportedQualifications: string;
    
@ApiProperty()
version: number;
    
@ApiProperty()
procedure: string;
  @ApiProperty()
serviceFees: CreateServiceFeeDto[];
   @ApiProperty()
processingTimes: CreateProcessingTimeDto[];
   @ApiProperty()
serviceDependencies: CreateServiceDependencyDto[];
   @ApiProperty()
languages: CreateLanguageDto[];
   applicationForm: CreateApplicationFormDto;
   @ApiProperty()
resources: CreateServiceResourceDto[];
     
@ApiProperty()
targetCustomers: string;
    
@ApiProperty()
status: string;
    
@ApiProperty()
isPublic: boolean;
    
@ApiProperty()
isPublished: boolean;
    
@ApiProperty()
isArchived: boolean;
    
@ApiProperty()
tags: string;
    
@ApiProperty()
deliveryMethod: string;
    
@ApiProperty()
serviceOwnerId: string;
    
@ApiProperty()
averageRating: number;
    
@ApiProperty()
enableReview: boolean;
    
@ApiProperty()
policy: string;
    
@ApiProperty()
publishedOn: Date;
    
@ApiProperty()
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  CreateServiceDto object data to  Service domain object
*@returns Service domain object which contains Service  information
*/    
static fromDTO(serviceDto:CreateServiceDto): Service
{
const service: Service = new Service();  
 
service.id=serviceDto.id; 
 
service.name=serviceDto.name; 
 
service.description=serviceDto.description; 
 
service.code=serviceDto.code; 
 
service.fullyQualifiedName=serviceDto.fullyQualifiedName; 
service.medias=serviceDto.medias.map(item=>CreateMediaDto.fromDTO(item));  
    
service.supportedQualifications=serviceDto.supportedQualifications; 
 
service.version=serviceDto.version; 
 
service.procedure=serviceDto.procedure; 
service.serviceFees=serviceDto.serviceFees.map(item=>CreateServiceFeeDto.fromDTO(item));  
   service.processingTimes=serviceDto.processingTimes.map(item=>CreateProcessingTimeDto.fromDTO(item));  
   service.serviceDependencies=serviceDto.serviceDependencies.map(item=>CreateServiceDependencyDto.fromDTO(item));  
   service.languages=serviceDto.languages.map(item=>CreateLanguageDto.fromDTO(item));  
      

service.applicationForm= CreateApplicationFormDto.fromDTO(serviceDto.applicationForm); 
   service.resources=serviceDto.resources.map(item=>CreateServiceResourceDto.fromDTO(item));  
    
service.targetCustomers=serviceDto.targetCustomers; 
 
service.status=serviceDto.status; 
 
service.isPublic=serviceDto.isPublic; 
 
service.isPublished=serviceDto.isPublished; 
 
service.isArchived=serviceDto.isArchived; 
 
service.tags=serviceDto.tags; 
 
service.deliveryMethod=serviceDto.deliveryMethod; 
 
service.serviceOwnerId=serviceDto.serviceOwnerId; 
 
service.averageRating=serviceDto.averageRating; 
 
service.enableReview=serviceDto.enableReview; 
 
service.policy=serviceDto.policy; 
 
service.publishedOn=serviceDto.publishedOn; 
 
service.createdAt=serviceDto.createdAt; 
 
service.updatedAt=serviceDto.updatedAt; 
     return service;
    }
}