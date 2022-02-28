import { ApiProperty } from '@nestjs/swagger';
import { ServiceResource } from '../../domain/services/ServiceResource';


/**
*A class which contains proporties of ServiceResource that used to put data to be returned to client
*
*/
export class ServiceResourcePresenter {

  @ApiProperty()
  id: string;

  @ApiProperty()
  serviceId: string;

  @ApiProperty()
  attachmentUrl: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  updatedBy: string;
  /**
  *A constructor which copy  ServiceResource domain object Property value to  ServiceResourcePresenter properties
  */
  constructor(serviceResource: ServiceResource) {

    this.id = serviceResource.id;


    this.serviceId = serviceResource.serviceId;


    this.attachmentUrl = serviceResource.attachmentUrl;


    this.content = serviceResource.content;


    this.createdBy = serviceResource.createdBy;


    this.updatedBy = serviceResource.updatedBy;



  }
}