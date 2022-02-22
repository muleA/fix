import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ServiceDependency } from '../../domain/ServiceDependencys/serviceDependency';
   
/**
*A class which contains proporties of ServiceDependency that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceDependencyDto {
  
@ApiProperty()
id: string;
    
@ApiProperty()
serviceId: string;
    
@ApiProperty()
dependsOn: string;
    
@ApiProperty()
type: string;
    
@ApiProperty()
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  UpdateServiceDependencyDto object data to  ServiceDependency domain object
*@returns ServiceDependency domain object which contains ServiceDependency  information
*/
static fromDTO(serviceDependencyDto:UpdateServiceDependencyDto): ServiceDependency
{
const serviceDependency: ServiceDependency = new ServiceDependency();  
 
serviceDependency.id=serviceDependencyDto.id; 


 
serviceDependency.serviceId=serviceDependencyDto.serviceId; 


 
serviceDependency.dependsOn=serviceDependencyDto.dependsOn; 


 
serviceDependency.type=serviceDependencyDto.type; 


 
serviceDependency.createdAt=serviceDependencyDto.createdAt; 


 
serviceDependency.updatedAt=serviceDependencyDto.updatedAt; 


return serviceDependency;
  }
}
/**
*A class wich contains proporties of ServiceDependency that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceDependencyDto {
     
@ApiProperty()
id: string;
    
@ApiProperty()
serviceId: string;
    
@ApiProperty()
dependsOn: string;
    
@ApiProperty()
type: string;
    
@ApiProperty()
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  CreateServiceDependencyDto object data to  ServiceDependency domain object
*@returns ServiceDependency domain object which contains ServiceDependency  information
*/    
static fromDTO(serviceDependencyDto:CreateServiceDependencyDto): ServiceDependency
{
const serviceDependency: ServiceDependency = new ServiceDependency();  
 
serviceDependency.id=serviceDependencyDto.id; 
 
serviceDependency.serviceId=serviceDependencyDto.serviceId; 
 
serviceDependency.dependsOn=serviceDependencyDto.dependsOn; 
 
serviceDependency.type=serviceDependencyDto.type; 
 
serviceDependency.createdAt=serviceDependencyDto.createdAt; 
 
serviceDependency.updatedAt=serviceDependencyDto.updatedAt; 
     return serviceDependency;
    }
}