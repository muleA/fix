import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ServiceResource } from '../../domain/serviceCollections/ServiceResource';
/**
*A class which contains proporties of ServiceResource that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceResourceDto {
@ApiProperty()
id: string;
@ApiProperty()
serviceCollectionId: string;
@ApiProperty()
attachmentUrl: string;
@ApiProperty()
content: string;
@ApiProperty()
createdAt: Date;
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  UpdateServiceResourceDto object data to  ServiceResource domain object
*@returns ServiceResource domain object which contains ServiceResource  information
*/
static fromDTO(serviceResourceDto:UpdateServiceResourceDto): ServiceResource
{
const serviceResource: ServiceResource = new ServiceResource();  
serviceResource.id=serviceResourceDto.id; 
serviceResource.serviceCollectionId=serviceResourceDto.serviceCollectionId; 
serviceResource.attachmentUrl=serviceResourceDto.attachmentUrl; 
serviceResource.content=serviceResourceDto.content; 
serviceResource.createdAt=serviceResourceDto.createdAt; 
serviceResource.updatedAt=serviceResourceDto.updatedAt; 
return serviceResource;
  }
}
/**
*A class wich contains proporties of ServiceResource that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceResourceDto {
@ApiProperty()
id: string;
@ApiProperty()
serviceCollectionId: string;
@ApiProperty()
attachmentUrl: string;
@ApiProperty()
content: string;
@ApiProperty()
createdAt: Date;
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  CreateServiceResourceDto object data to  ServiceResource domain object
*@returns ServiceResource domain object which contains ServiceResource  information
*/    
static fromDTO(serviceResourceDto:CreateServiceResourceDto): ServiceResource
{
const serviceResource: ServiceResource = new ServiceResource();  
serviceResource.id=serviceResourceDto.id; 
serviceResource.serviceCollectionId=serviceResourceDto.serviceCollectionId; 
serviceResource.attachmentUrl=serviceResourceDto.attachmentUrl; 
serviceResource.content=serviceResourceDto.content; 
serviceResource.createdAt=serviceResourceDto.createdAt; 
serviceResource.updatedAt=serviceResourceDto.updatedAt; 
     return serviceResource;
    }
}