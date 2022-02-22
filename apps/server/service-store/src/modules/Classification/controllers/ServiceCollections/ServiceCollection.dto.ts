import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ServiceCollection } from '../../domain/ServiceCollections/serviceCollection';
  import { CreateServiceEntryDto, UpdateServiceEntryDto } from './ServiceEntry.dto';
   import { CreateServiceResourceDto, UpdateServiceResourceDto } from './ServiceResource.dto';
/**
*A class which contains proporties of ServiceCollection that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceCollectionDto {
@ApiProperty()
id: string;
@ApiProperty()
name: string;
@ApiProperty()
description: string;
@ApiProperty()
code: string;
  @ApiProperty()
serviceEntries: UpdateServiceEntryDto[];
@ApiProperty()
supportedQualifications: string;
@ApiProperty()
version: number;
@ApiProperty()
procedure: string;
@ApiProperty()
isPublic: boolean;
@ApiProperty()
tags: string;
@ApiProperty()
resources: UpdateServiceResourceDto[];
@ApiProperty()
targetCustomers: string;
@ApiProperty()
isArchived: boolean;
@ApiProperty()
createdAt: Date;
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  UpdateServiceCollectionDto object data to  ServiceCollection domain object
*@returns ServiceCollection domain object which contains ServiceCollection  information
*/
static fromDTO(serviceCollectionDto:UpdateServiceCollectionDto): ServiceCollection
{
const serviceCollection: ServiceCollection = new ServiceCollection();  
serviceCollection.id=serviceCollectionDto.id; 
serviceCollection.name=serviceCollectionDto.name; 
serviceCollection.description=serviceCollectionDto.description; 
serviceCollection.code=serviceCollectionDto.code; 
serviceCollection.serviceEntries=serviceCollectionDto.serviceEntries.map(item=>{ return UpdateServiceEntryDto.fromDTO(item)});  
serviceCollection.supportedQualifications=serviceCollectionDto.supportedQualifications; 
serviceCollection.version=serviceCollectionDto.version; 
serviceCollection.procedure=serviceCollectionDto.procedure; 
serviceCollection.isPublic=serviceCollectionDto.isPublic; 
serviceCollection.tags=serviceCollectionDto.tags; 
serviceCollection.resources=serviceCollectionDto.resources.map(item=>{ return UpdateServiceResourceDto.fromDTO(item)} );  
serviceCollection.targetCustomers=serviceCollectionDto.targetCustomers; 
serviceCollection.isArchived=serviceCollectionDto.isArchived; 
serviceCollection.createdAt=serviceCollectionDto.createdAt; 
serviceCollection.updatedAt=serviceCollectionDto.updatedAt; 
return serviceCollection;
  }
}
/**
*A class wich contains proporties of ServiceCollection that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceCollectionDto {
@ApiProperty()
id: string;
@ApiProperty()
name: string;
@ApiProperty()
description: string;
@ApiProperty()
code: string;
  @ApiProperty()
serviceEntries: CreateServiceEntryDto[];
@ApiProperty()
supportedQualifications: string;
@ApiProperty()
version: number;
@ApiProperty()
procedure: string;
@ApiProperty()
isPublic: boolean;
@ApiProperty()
tags: string;
  @ApiProperty()
resources: CreateServiceResourceDto[];
@ApiProperty()
targetCustomers: string;
@ApiProperty()
isArchived: boolean;
@ApiProperty()
createdAt: Date;
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  CreateServiceCollectionDto object data to  ServiceCollection domain object
*@returns ServiceCollection domain object which contains ServiceCollection  information
*/    
static fromDTO(serviceCollectionDto:CreateServiceCollectionDto): ServiceCollection
{
const serviceCollection: ServiceCollection = new ServiceCollection();  
serviceCollection.id=serviceCollectionDto.id; 
serviceCollection.name=serviceCollectionDto.name; 
serviceCollection.description=serviceCollectionDto.description; 
serviceCollection.code=serviceCollectionDto.code; 
serviceCollection.serviceEntries=serviceCollectionDto.serviceEntries.map(item=>{ return CreateServiceEntryDto.fromDTO(item)});  
serviceCollection.supportedQualifications=serviceCollectionDto.supportedQualifications; 
serviceCollection.version=serviceCollectionDto.version; 
serviceCollection.procedure=serviceCollectionDto.procedure; 
serviceCollection.isPublic=serviceCollectionDto.isPublic; 
serviceCollection.tags=serviceCollectionDto.tags; 
serviceCollection.resources=serviceCollectionDto.resources.map(item=>{ return CreateServiceResourceDto.fromDTO(item)});  
serviceCollection.targetCustomers=serviceCollectionDto.targetCustomers; 
serviceCollection.isArchived=serviceCollectionDto.isArchived; 
serviceCollection.createdAt=serviceCollectionDto.createdAt; 
serviceCollection.updatedAt=serviceCollectionDto.updatedAt; 
     return serviceCollection;
    }
}