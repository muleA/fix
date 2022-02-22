import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Address } from '../../domain/Addresss/address';
   
/**
*A class which contains proporties of Address that used to receive paramamer values to be updated in the database
*/
export class UpdateAddressDto {
  
@ApiProperty()
country: string;
    
@ApiProperty()
city: string;
    
@ApiProperty()
houseNumber: string;
    
@ApiProperty()
street: string;
  /**
*A method that mapes  UpdateAddressDto object data to  Address domain object
*@returns Address domain object which contains Address  information
*/
static fromDTO(addressDto:UpdateAddressDto): Address
{
const address: Address = new Address();  
 
address.country=addressDto.country; 


 
address.city=addressDto.city; 


 
address.houseNumber=addressDto.houseNumber; 


 
address.street=addressDto.street; 


return address;
  }
}
/**
*A class wich contains proporties of Address that used to receive paramamer values to be saved to database
*
*/
export class CreateAddressDto {
     
@ApiProperty()
country: string;
    
@ApiProperty()
city: string;
    
@ApiProperty()
houseNumber: string;
    
@ApiProperty()
street: string;
  /**
*A method that mapes  CreateAddressDto object data to  Address domain object
*@returns Address domain object which contains Address  information
*/    
static fromDTO(addressDto:CreateAddressDto): Address
{
const address: Address = new Address();  
 
address.country=addressDto.country; 
 
address.city=addressDto.city; 
 
address.houseNumber=addressDto.houseNumber; 
 
address.street=addressDto.street; 
     return address;
    }
}