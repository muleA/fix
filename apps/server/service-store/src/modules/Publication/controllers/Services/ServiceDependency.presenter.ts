import { ApiProperty } from '@nestjs/swagger';
import { ServiceDependency } from '../../domain/services/ServiceDependency';


/**
*A class which contains proporties of ServiceDependency that used to put data to be returned to client
*
*/
export class ServiceDependencyPresenter {

  @ApiProperty()
  id: string;

  @ApiProperty()
  serviceId: string;

  @ApiProperty()
  dependsOn: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  updatedBy: string;
  /**
  *A constructor which copy  ServiceDependency domain object Property value to  ServiceDependencyPresenter properties
  */
  constructor(serviceDependency: ServiceDependency) {

    this.id = serviceDependency.id;


    this.serviceId = serviceDependency.serviceId;


    this.dependsOn = serviceDependency.dependsOn;


    this.type = serviceDependency.type;


    this.createdBy = serviceDependency.createdBy;


    this.updatedBy = serviceDependency.updatedBy;



  }
}