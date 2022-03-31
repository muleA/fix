import { CreateLocationDto, UpdateLocationDto } from './Location.dto';
import { UpdateAddressDto } from './../ServiceOwners/Address.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ServiceProvider } from '../../domain/ServiceProviders/serviceProvider';
import { CreateAddressDto } from '../serviceOwners/Address.dto';
import {
  CreateContactInfoDto,
  UpdateContactInfoDto,
} from '../ServiceOwners/ContactInfo.dto';

/**
 *A class which contains proporties of ServiceProvider that used to receive paramamer values to be updated in the database
 */
export class UpdateServiceProviderDto {
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

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sector: string;
  @ApiProperty()
  contactInfo: UpdateContactInfoDto;

  @ApiProperty()
  location: UpdateLocationDto;

  @ApiProperty()
  address: UpdateAddressDto;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
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
   *A method that mapes  UpdateServiceProviderDto object data to  ServiceProvider domain object
   *@returns ServiceProvider domain object which contains ServiceProvider  information
   */
  static fromDTO(
    serviceProviderDto: UpdateServiceProviderDto
  ): ServiceProvider {
    const serviceProvider: ServiceProvider = new ServiceProvider();

    serviceProvider.id = serviceProviderDto.id;

    serviceProvider.shortName = serviceProviderDto.shortName;

    serviceProvider.fullName = serviceProviderDto.fullName;

    serviceProvider.sector = serviceProviderDto.sector;

    serviceProvider.contactInfo = serviceProviderDto.contactInfo;

    serviceProvider.location = serviceProviderDto.location;

    serviceProvider.address = serviceProviderDto.address;

    serviceProvider.code = serviceProviderDto.code;

    serviceProvider.organizationId = serviceProviderDto.organizationId;

    serviceProvider.organizationName = serviceProviderDto.organizationName;

    return serviceProvider;
  }
}
/**
 *A class wich contains proporties of ServiceProvider that used to receive paramamer values to be saved to database
 *
 */
export class CreateServiceProviderDto {
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
  @ApiProperty()
  contactInfo: CreateContactInfoDto;

  @ApiProperty()
  location: CreateLocationDto;

  @ApiProperty()
  address: CreateAddressDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
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
   *A method that mapes  CreateServiceProviderDto object data to  ServiceProvider domain object
   *@returns ServiceProvider domain object which contains ServiceProvider  information
   */
  static fromDTO(
    serviceProviderDto: CreateServiceProviderDto
  ): ServiceProvider {
    const serviceProvider: ServiceProvider = new ServiceProvider();

    serviceProvider.shortName = serviceProviderDto.shortName;

    serviceProvider.fullName = serviceProviderDto.fullName;

    serviceProvider.sector = serviceProviderDto.sector;

    serviceProvider.contactInfo = serviceProviderDto.contactInfo;

    serviceProvider.location = serviceProviderDto.location;

    serviceProvider.address = serviceProviderDto.address;

    serviceProvider.code = serviceProviderDto.code;

    serviceProvider.organizationId = serviceProviderDto.organizationId;

    serviceProvider.organizationName = serviceProviderDto.organizationName;
    return serviceProvider;
  }
}
