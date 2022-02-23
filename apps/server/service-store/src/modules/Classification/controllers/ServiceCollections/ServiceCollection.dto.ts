import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsUUID, IsArray, IsDecimal, IsString } from 'class-validator';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from 'src/modules/Publication/controllers/Services/ServiceResource.dto';
import { ServiceCollection } from '../../domain/ServiceCollections/serviceCollection';
import { CreateServiceEntryDto, UpdateServiceEntryDto } from './ServiceEntry.dto';

/**
*A class which contains proporties of ServiceCollection that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceCollectionDto {

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty()
  @IsArray()
  serviceEntries: UpdateServiceEntryDto[];

  @ApiProperty()
  @IsString()
  supportedQualifications: string;

  @ApiProperty()
  @IsString()
  @IsDecimal()
  version: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  procedure: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isPublic: boolean;

  @ApiProperty()
  @IsString()
  tags: string;

  @ApiProperty()
  @IsArray()
  serviceResources: UpdateServiceResourceDto[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  targetCustomers: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isArchived: boolean;
  /**
*A method that mapes  UpdateServiceCollectionDto object data to  ServiceCollection domain object
*@returns ServiceCollection domain object which contains ServiceCollection  information
*/
  static fromDTO(serviceCollectionDto: UpdateServiceCollectionDto): ServiceCollection {
    const serviceCollection: ServiceCollection = new ServiceCollection();

    serviceCollection.id = serviceCollectionDto.id;



    serviceCollection.name = serviceCollectionDto.name;



    serviceCollection.description = serviceCollectionDto.description;



    serviceCollection.code = serviceCollectionDto.code;


    serviceCollection.serviceEntries = serviceCollectionDto.serviceEntries.map(item => UpdateServiceEntryDto.fromDTO(item));

    serviceCollection.supportedQualifications = serviceCollectionDto.supportedQualifications;



    serviceCollection.version = serviceCollectionDto.version;



    serviceCollection.procedure = serviceCollectionDto.procedure;



    serviceCollection.isPublic = serviceCollectionDto.isPublic;



    serviceCollection.tags = serviceCollectionDto.tags;


    serviceCollection.serviceResources = serviceCollectionDto.serviceResources.map(item => UpdateServiceResourceDto.fromDTO(item));

    serviceCollection.targetCustomers = serviceCollectionDto.targetCustomers;



    serviceCollection.isArchived = serviceCollectionDto.isArchived;





    return serviceCollection;
  }
}
/**
*A class wich contains proporties of ServiceCollection that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceCollectionDto {

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty()
  @IsArray()
  serviceEntries: UpdateServiceEntryDto[];

  @ApiProperty()
  @IsString()
  supportedQualifications: string;

  @ApiProperty()
  @IsString()
  @IsDecimal()
  version: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  procedure: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isPublic: boolean;

  @ApiProperty()
  @IsString()
  tags: string;

  @ApiProperty()
  @IsArray()
  serviceResources: UpdateServiceResourceDto[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  targetCustomers: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isArchived: boolean;
  /**
*A method that mapes  CreateServiceCollectionDto object data to  ServiceCollection domain object
*@returns ServiceCollection domain object which contains ServiceCollection  information
*/
  static fromDTO(serviceCollectionDto: CreateServiceCollectionDto): ServiceCollection {
    const serviceCollection: ServiceCollection = new ServiceCollection();

    serviceCollection.id = serviceCollectionDto.id;

    serviceCollection.name = serviceCollectionDto.name;

    serviceCollection.description = serviceCollectionDto.description;

    serviceCollection.code = serviceCollectionDto.code;
    serviceCollection.serviceEntries = serviceCollectionDto.serviceEntries.map(item => CreateServiceEntryDto.fromDTO(item));

    serviceCollection.supportedQualifications = serviceCollectionDto.supportedQualifications;

    serviceCollection.version = serviceCollectionDto.version;

    serviceCollection.procedure = serviceCollectionDto.procedure;

    serviceCollection.isPublic = serviceCollectionDto.isPublic;

    serviceCollection.tags = serviceCollectionDto.tags;
    serviceCollection.serviceResources = serviceCollectionDto.serviceResources.map(item => CreateServiceResourceDto.fromDTO(item));

    serviceCollection.targetCustomers = serviceCollectionDto.targetCustomers;

    serviceCollection.isArchived = serviceCollectionDto.isArchived;
    return serviceCollection;
  }
}