import { ApiProperty } from '@nestjs/swagger';
import { Address } from '../../domain/ServiceOwners/address';
import { ProviderLocation } from '../../domain/ServiceProviders/ProviderLocation';
import { ServiceProvider } from '../../domain/ServiceProviders/serviceProvider';
import { ContactInfoPresenter } from '../ServiceOwners/ContactInfo.presenter';
import { DelegatedServicePresenter } from './DelegatedService.presenter';

/**
 *A class which contains proporties of ServiceProvider that used to put data to be returned to client
 *
 */
export class ServiceProviderPresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  shortName: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  sector: string;
  @ApiProperty()
  contactInfo: ContactInfoPresenter;
  @ApiProperty()
  location: ProviderLocation;
  @ApiProperty()
  address: Address;
  @ApiProperty()
  delegatedServices: DelegatedServicePresenter[];
  @ApiProperty()
  code: string;
  @ApiProperty()
  organizationId: string;
  @ApiProperty()
  organizationName: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  createdBy?: string;
  @ApiProperty()
  updatedBy?: string;
  @ApiProperty()
  deletedAt: Date;
  @ApiProperty()
  deletedBy: string;
  /**
   *A constructor which copy  ServiceProvider domain object Property value to  ServiceProviderPresenter properties
   */
  constructor(serviceProvider: ServiceProvider) {
    this.id = serviceProvider.id;
    this.shortName = serviceProvider.shortName;
    this.fullName = serviceProvider.fullName;
    this.sector = serviceProvider.sector;
    this.contactInfo = serviceProvider.contactInfo;
    this.location = serviceProvider.location;
    this.address = serviceProvider.address;
    this.delegatedServices = serviceProvider.delegatedServices.map(
      (item) => new DelegatedServicePresenter(item)
    );
    this.code = serviceProvider.code;
    this.organizationId = serviceProvider.organizationId;
    this.organizationName = serviceProvider.organizationName;
    this.createdAt = serviceProvider.createdAt;
    this.updatedAt = serviceProvider.updatedAt;
    this.deletedAt = serviceProvider.deletedAt;
    this.createdBy = serviceProvider.createdBy;
    this.updatedBy = serviceProvider.updatedBy;
    this.deletedBy = serviceProvider.deletedBy;
  }
}
