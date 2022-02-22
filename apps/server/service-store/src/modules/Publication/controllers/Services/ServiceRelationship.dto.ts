import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ServiceRelationship } from '../../domain/ServiceRelationships/serviceRelationship';

/**
*A class which contains proporties of ServiceRelationship that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceRelationshipDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  relatedToServiceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  status: string;

  /**
*A method that mapes  UpdateServiceRelationshipDto object data to  ServiceRelationship domain object
*@returns ServiceRelationship domain object which contains ServiceRelationship  information
*/
  static fromDTO(serviceRelationshipDto: UpdateServiceRelationshipDto): ServiceRelationship {
    const serviceRelationship: ServiceRelationship = new ServiceRelationship();

    serviceRelationship.id = serviceRelationshipDto.id;



    serviceRelationship.serviceId = serviceRelationshipDto.serviceId;



    serviceRelationship.relatedToServiceId = serviceRelationshipDto.relatedToServiceId;



    serviceRelationship.status = serviceRelationshipDto.status;

    return serviceRelationship;
  }
}
/**
*A class wich contains proporties of ServiceRelationship that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceRelationshipDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  relatedToServiceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  status: string;

  /**
*A method that mapes  CreateServiceRelationshipDto object data to  ServiceRelationship domain object
*@returns ServiceRelationship domain object which contains ServiceRelationship  information
*/
  static fromDTO(serviceRelationshipDto: CreateServiceRelationshipDto): ServiceRelationship {
    const serviceRelationship: ServiceRelationship = new ServiceRelationship();

    serviceRelationship.id = serviceRelationshipDto.id;

    serviceRelationship.serviceId = serviceRelationshipDto.serviceId;

    serviceRelationship.relatedToServiceId = serviceRelationshipDto.relatedToServiceId;

    serviceRelationship.status = serviceRelationshipDto.status;
    return serviceRelationship;
  }
}