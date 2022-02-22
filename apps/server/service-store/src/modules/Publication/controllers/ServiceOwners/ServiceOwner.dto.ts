import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';
import { Address } from '../../domain/ServiceOwners/address';
import { ServiceOwner } from '../../domain/ServiceOwners/serviceOwner';
import { CreateContactInfoDto, UpdateContactInfoDto } from './ContactInfo.dto';

/**
 *A class which contains proporties of ServiceOwner that used to receive paramamer values to be updated in the database
 */
export class UpdateServiceOwnerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  shortName: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fullName: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  sector: string;
  contactInfo: UpdateContactInfoDto;

  @ApiProperty()
  address: Address;
  @ApiProperty()
  code: string;
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  organizationId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  organizationName: string;
  /**
   *A method that mapes  UpdateServiceOwnerDto object data to  ServiceOwner domain object
   *@returns ServiceOwner domain object which contains ServiceOwner  information
   */
  static fromDTO(serviceOwnerDto: UpdateServiceOwnerDto): ServiceOwner {
    const serviceOwner: ServiceOwner = new ServiceOwner();

    serviceOwner.id = serviceOwnerDto.id;

    serviceOwner.shortName = serviceOwnerDto.shortName;

    serviceOwner.fullName = serviceOwnerDto.fullName;

    serviceOwner.sector = serviceOwnerDto.sector;

    serviceOwner.contactInfo = UpdateContactInfoDto.fromDTO(
      serviceOwnerDto.contactInfo
    );

    serviceOwner.address = serviceOwnerDto.address;

    serviceOwner.code = serviceOwnerDto.code;

    serviceOwner.organizationId = serviceOwnerDto.organizationId;

    serviceOwner.organizationName = serviceOwnerDto.organizationName;
    return serviceOwner;
  }
}
/**
 *A class wich contains proporties of ServiceOwner that used to receive paramamer values to be saved to database
 *
 */
export class CreateServiceOwnerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  shortName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sector: string;
  contactInfo: CreateContactInfoDto;

  @ApiProperty()
  address: Address;

  @ApiProperty()
  code: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  organizationId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  organizationName: string;
  /**
   *A method that mapes  CreateServiceOwnerDto object data to  ServiceOwner domain object
   *@returns ServiceOwner domain object which contains ServiceOwner  information
   */
  static fromDTO(serviceOwnerDto: CreateServiceOwnerDto): ServiceOwner {
    const serviceOwner: ServiceOwner = new ServiceOwner();
    serviceOwner.shortName = serviceOwnerDto.shortName;

    serviceOwner.fullName = serviceOwnerDto.fullName;

    serviceOwner.sector = serviceOwnerDto.sector;

    serviceOwner.contactInfo = CreateContactInfoDto.fromDTO(
      serviceOwnerDto.contactInfo
    );

    serviceOwner.address = serviceOwnerDto.address;

    serviceOwner.code = serviceOwnerDto.code;

    serviceOwner.organizationId = serviceOwnerDto.organizationId;

    serviceOwner.organizationName = serviceOwnerDto.organizationName;
    return serviceOwner;
  }
}
