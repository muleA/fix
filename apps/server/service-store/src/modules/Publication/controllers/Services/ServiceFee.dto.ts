import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ServiceFee } from '../../domain/ServiceFees/serviceFee';
   
/**
*A class which contains proporties of ServiceFee that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceFeeDto {
  
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
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  UpdateServiceFeeDto object data to  ServiceFee domain object
*@returns ServiceFee domain object which contains ServiceFee  information
*/
static fromDTO(serviceFeeDto:UpdateServiceFeeDto): ServiceFee
{
const serviceFee: ServiceFee = new ServiceFee();  
 
serviceFee.id=serviceFeeDto.id; 


 
serviceFee.serviceId=serviceFeeDto.serviceId; 


 
serviceFee.fee=serviceFeeDto.fee; 


 
serviceFee.currency=serviceFeeDto.currency; 


 
serviceFee.description=serviceFeeDto.description; 


 
serviceFee.createdAt=serviceFeeDto.createdAt; 


 
serviceFee.updatedAt=serviceFeeDto.updatedAt; 


return serviceFee;
  }
}
/**
*A class wich contains proporties of ServiceFee that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceFeeDto {
     
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
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  CreateServiceFeeDto object data to  ServiceFee domain object
*@returns ServiceFee domain object which contains ServiceFee  information
*/    
static fromDTO(serviceFeeDto:CreateServiceFeeDto): ServiceFee
{
const serviceFee: ServiceFee = new ServiceFee();  
 
serviceFee.id=serviceFeeDto.id; 
 
serviceFee.serviceId=serviceFeeDto.serviceId; 
 
serviceFee.fee=serviceFeeDto.fee; 
 
serviceFee.currency=serviceFeeDto.currency; 
 
serviceFee.description=serviceFeeDto.description; 
 
serviceFee.createdAt=serviceFeeDto.createdAt; 
 
serviceFee.updatedAt=serviceFeeDto.updatedAt; 
     return serviceFee;
    }
}