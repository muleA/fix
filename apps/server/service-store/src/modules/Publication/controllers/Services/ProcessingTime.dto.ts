import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ProcessingTime } from '../../domain/ProcessingTimes/processingTime';
   
/**
*A class which contains proporties of ProcessingTime that used to receive paramamer values to be updated in the database
*/
export class UpdateProcessingTimeDto {
  
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
*A method that mapes  UpdateProcessingTimeDto object data to  ProcessingTime domain object
*@returns ProcessingTime domain object which contains ProcessingTime  information
*/
static fromDTO(processingTimeDto:UpdateProcessingTimeDto): ProcessingTime
{
const processingTime: ProcessingTime = new ProcessingTime();  
 
processingTime.id=processingTimeDto.id; 


 
processingTime.serviceId=processingTimeDto.serviceId; 


 
processingTime.time=processingTimeDto.time; 


 
processingTime.currency=processingTimeDto.currency; 


 
processingTime.description=processingTimeDto.description; 


 
processingTime.createdAt=processingTimeDto.createdAt; 


 
processingTime.updatedAt=processingTimeDto.updatedAt; 


return processingTime;
  }
}
/**
*A class wich contains proporties of ProcessingTime that used to receive paramamer values to be saved to database
*
*/
export class CreateProcessingTimeDto {
     
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
*A method that mapes  CreateProcessingTimeDto object data to  ProcessingTime domain object
*@returns ProcessingTime domain object which contains ProcessingTime  information
*/    
static fromDTO(processingTimeDto:CreateProcessingTimeDto): ProcessingTime
{
const processingTime: ProcessingTime = new ProcessingTime();  
 
processingTime.id=processingTimeDto.id; 
 
processingTime.serviceId=processingTimeDto.serviceId; 
 
processingTime.time=processingTimeDto.time; 
 
processingTime.currency=processingTimeDto.currency; 
 
processingTime.description=processingTimeDto.description; 
 
processingTime.createdAt=processingTimeDto.createdAt; 
 
processingTime.updatedAt=processingTimeDto.updatedAt; 
     return processingTime;
    }
}