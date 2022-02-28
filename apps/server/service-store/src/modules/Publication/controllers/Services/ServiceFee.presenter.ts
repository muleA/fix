import { ApiProperty } from '@nestjs/swagger';
import { ServiceFee } from '../../domain/services/ServiceFee';


/**
*A class which contains proporties of ServiceFee that used to put data to be returned to client
*
*/
export class ServiceFeePresenter {

  @ApiProperty()
  id: string;

  @ApiProperty()
  serviceId: string;

  @ApiProperty()
  fee: number;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  updatedBy: string;
  /**
  *A constructor which copy  ServiceFee domain object Property value to  ServiceFeePresenter properties
  */
  constructor(serviceFee: ServiceFee) {

    this.id = serviceFee.id;


    this.serviceId = serviceFee.serviceId;


    this.fee = serviceFee.fee;


    this.currency = serviceFee.currency;


    this.description = serviceFee.description;


    this.createdBy = serviceFee.createdBy;


    this.updatedBy = serviceFee.updatedBy;



  }
}