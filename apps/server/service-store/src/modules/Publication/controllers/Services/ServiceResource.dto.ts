import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsUUID, IsString, IsFQDN } from 'class-validator';
import { ServiceResource } from '../../domain/services/ServiceResource';


/**
*A class which contains proporties of ServiceResource that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceResourceDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;

  @ApiProperty()
  @IsString()
  attachmentUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID() // will un comment when we build the user management
  updatedBy: string;


  /**
*A method that mapes  UpdateServiceResourceDto object data to  ServiceResource domain object
*@returns ServiceResource domain object which contains ServiceResource  information
*/
  static fromDTO(serviceResourceDto: UpdateServiceResourceDto): ServiceResource {
    const serviceResource: ServiceResource = new ServiceResource();

    serviceResource.id = serviceResourceDto.id;



    serviceResource.serviceId = serviceResourceDto.serviceId;



    serviceResource.attachmentUrl = serviceResourceDto.attachmentUrl;



    serviceResource.content = serviceResourceDto.content;

    serviceResource.updatedBy = serviceResourceDto.updatedBy;


    return serviceResource;
  }
}
/**
*A class wich contains proporties of ServiceResource that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceResourceDto {

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID()
  id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;

  @ApiProperty()
  @IsString()
  attachmentUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;

  // @ApiProperty() 
  // @IsNotEmpty()
  // @IsUUID()// will un comment when we build the user management
  createdBy: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID() // will un comment when we build the user management
  updatedBy: string;


  /**
*A method that mapes  CreateServiceResourceDto object data to  ServiceResource domain object
*@returns ServiceResource domain object which contains ServiceResource  information
*/
  static fromDTO(serviceResourceDto: CreateServiceResourceDto): ServiceResource {
    const serviceResource: ServiceResource = new ServiceResource();

    serviceResource.id = serviceResourceDto.id;

    serviceResource.serviceId = serviceResourceDto.serviceId;

    serviceResource.attachmentUrl = serviceResourceDto.attachmentUrl;

    serviceResource.content = serviceResourceDto.content;

    serviceResource.createdBy = serviceResourceDto.createdBy;

    serviceResource.updatedBy = serviceResourceDto.updatedBy;
    return serviceResource;
  }
}