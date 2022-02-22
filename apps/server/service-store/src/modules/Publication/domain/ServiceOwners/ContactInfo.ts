import { InjectRepository } from '@nestjs/typeorm';

import { IContactInfoRepository } from '../../domain/contactInfos/contactInfo.repository.interface';
export class  ContactInfo {
 constructor() { } 
 email: string;  
phone: string;  
name: string;  

}