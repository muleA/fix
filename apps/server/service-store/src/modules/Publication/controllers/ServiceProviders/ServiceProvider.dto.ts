import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';
import { Address } from '../../domain/ServiceOwners/address';
import { ServiceProvider } from '../../domain/ServiceProviders/serviceProvider';
import {
  CreateContactInfoDto,
  UpdateContactInfoDto,
} from '../ServiceOwners/ContactInfo.dto';
import {
  CreateDelegatedServiceDto,
  UpdateDelegatedServiceDto,
} from './DelegatedService.dto';

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
  contactInfo: UpdateContactInfoDto;

  @ApiProperty()
  location: Location;

  @ApiProperty()
  address: Address;
  @ApiProperty()
  delegatedServices: UpdateDelegatedServiceDto[];

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

    serviceProvider.contactInfo = UpdateContactInfoDto.fromDTO(
      serviceProviderDto.contactInfo
    );

    serviceProvider.location = serviceProviderDto.location;

    serviceProvider.address = serviceProviderDto.address;

    serviceProvider.delegatedServices =
      serviceProviderDto.delegatedServices.map((item) =>
        UpdateDelegatedServiceDto.fromDTO(item)
      );

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
  contactInfo: CreateContactInfoDto;

  @ApiProperty()
  location: Location;

  @ApiProperty()
  address: Address;
  @ApiProperty()
  delegatedServices: CreateDelegatedServiceDto[];

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

    serviceProvider.contactInfo = CreateContactInfoDto.fromDTO(
      serviceProviderDto.contactInfo
    );

    serviceProvider.location = serviceProviderDto.location;

    serviceProvider.address = serviceProviderDto.address;
    serviceProvider.delegatedServices =
      serviceProviderDto.delegatedServices.map((item) =>
        CreateDelegatedServiceDto.fromDTO(item)
      );

    serviceProvider.code = serviceProviderDto.code;

    serviceProvider.organizationId = serviceProviderDto.organizationId;

    serviceProvider.organizationName = serviceProviderDto.organizationName;
    return serviceProvider;
  }
}
