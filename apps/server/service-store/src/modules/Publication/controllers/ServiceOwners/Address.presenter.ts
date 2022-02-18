import { ApiProperty } from '@nestjs/swagger';
import { Address } from '../../domain/Addresss/address';
 
/**
*A class which contains proporties of Address that used to put data to be returned to client
*
*/
export class AddressPresenter {
     
@ApiProperty()
country: string;
  
@ApiProperty()
city: string;
  
@ApiProperty()
houseNumber: string;
  
@ApiProperty()
street: string;
/**
*A constructor which copy  Address domain object Property value to  AddressPresenter properties
*/
constructor(address: Address) {
  
this.country = address.country;  

  
this.city = address.city;  

  
this.houseNumber = address.houseNumber;  

  
this.street = address.street;  

  
    
  }
}