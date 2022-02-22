import { InjectRepository } from '@nestjs/typeorm';

import { IAddressRepository } from '../../domain/addresss/address.repository.interface';
export class  Address {
 constructor() { } 
 country: string;  
city: string;  
houseNumber: string;  
street: string;  

}