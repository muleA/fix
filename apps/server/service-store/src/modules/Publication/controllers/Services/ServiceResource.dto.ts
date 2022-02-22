import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsFQDN } from 'class-validator';
import { ServiceResource } from '../../domain/ServiceResources/serviceResource';

/**
*A class which contains proporties of ServiceResource that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceResourceDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  serviceId: string;

  @ApiProperty()
  @IsFQDN()
  attachmentUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;


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


    return serviceResource;
  }
}
/**
*A class wich contains proporties of ServiceResource that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceResourceDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  serviceId: string;

  @ApiProperty()
  @IsFQDN()
  attachmentUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;


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
    return serviceResource;
  }
}