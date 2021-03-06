import { ApiProperty } from '@nestjs/swagger';
import { DelegatedService } from '../../domain/serviceProviders/DelegatedService';

/**
 *A class which contains proporties of DelegatedService that used to put data to be returned to client
 *
 */
export class DelegatedServicePresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  providerId: string;

  @ApiProperty()
  serviceId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  dispatchingRule: string;

  @ApiProperty()
  status: string;

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
   *A constructor which copy  DelegatedService domain object Property value to  DelegatedServicePresenter properties
   */
  constructor(delegatedService: DelegatedService) {
    this.id = delegatedService.id;

    this.providerId = delegatedService.providerId;

    this.serviceId = delegatedService.serviceId;

    this.title = delegatedService.title;

    this.dispatchingRule = delegatedService.dispatchingRule;

    this.status = delegatedService.status;

    this.createdAt = delegatedService.createdAt;
    this.updatedAt = delegatedService.updatedAt;
    this.deletedAt = delegatedService.deletedAt;
    this.createdBy = delegatedService.createdBy;
    this.updatedBy = delegatedService.updatedBy;
    this.deletedBy = delegatedService.deletedBy;
  }
}
