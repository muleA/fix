import { ApiProperty } from '@nestjs/swagger';
import { ProcessingTime } from '../../domain/ProcessingTimes/processingTime';
 
/**
*A class which contains proporties of ProcessingTime that used to put data to be returned to client
*
*/
export class ProcessingTimePresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
serviceId: string;
  
@ApiProperty()
time: number;
  
@ApiProperty()
currency: string;
  
@ApiProperty()
description: string;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  ProcessingTime domain object Property value to  ProcessingTimePresenter properties
*/
constructor(processingTime: ProcessingTime) {
  
this.id = processingTime.id;  

  
this.serviceId = processingTime.serviceId;  

  
this.time = processingTime.time;  

  
this.currency = processingTime.currency;  

  
this.description = processingTime.description;  

  
this.createdAt = processingTime.createdAt;  

  
this.updatedAt = processingTime.updatedAt;  

  
    
  }
}