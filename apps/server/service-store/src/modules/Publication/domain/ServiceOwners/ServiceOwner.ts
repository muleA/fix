import { InjectRepository } from '@nestjs/typeorm';
import { ContactInfo } from '../serviceOwners/ContactInfo';

import { IServiceOwnerRepository } from '../../domain/serviceOwners/serviceOwner.repository.interface';
export class  ServiceOwner {
 constructor() { } 
 id: string;  
shortName: string;  
fullName: string;  
sector: string;  
contactInfo: ContactInfo;  
address: Address;  
code: string;  
organizationId: string;  
organizationName: string;  
createdAt: Date;  
updatedAt: Date;  

}