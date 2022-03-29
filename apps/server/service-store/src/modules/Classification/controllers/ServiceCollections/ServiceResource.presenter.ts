import { ApiProperty } from '@nestjs/swagger';
import { ServiceResource } from '../../domain/serviceCollections/ServiceResource';
/**
*A class which contains proporties of ServiceResource that used to put data to be returned to client
*
*/
export class ServiceResourcePresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  serviceCollectionId: string;
  @ApiProperty()
  attachmentUrl: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  createdBy: string;
  @ApiProperty()
  updatedBy: string;
  /**
  *A constructor which copy  ServiceResource domain object Property value to  ServiceResourcePresenter properties
  */
  constructor(serviceResource: ServiceResource) {
    this.id = serviceResource.id;
    this.serviceCollectionId = serviceResource.serviceCollectionId;
    this.attachmentUrl = serviceResource.attachmentUrl;
    this.content = serviceResource.content;
    this.createdAt = serviceResource.createdAt;
    this.updatedAt = serviceResource.updatedAt;
    this.createdBy = serviceResource.createdBy;
    this.updatedBy = serviceResource.updatedBy;
  }
}