import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsDecimal, IsUUID, IsString, IsFQDN } from 'class-validator';
import { ProcessingTime } from '../../domain/services/ProcessingTime';


/**
*A class which contains proporties of ProcessingTime that used to put data to be returned to client
*
*/
export class ProcessingTimePresenter {

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  time: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
  /**
  *A constructor which copy  ProcessingTime domain object Property value to  ProcessingTimePresenter properties
  */
  constructor(processingTime: ProcessingTime) {

    this.id = processingTime.id;


    this.serviceId = processingTime.serviceId;


    this.time = processingTime.time;


    this.currency = processingTime.currency;


    this.description = processingTime.description;



  }
}