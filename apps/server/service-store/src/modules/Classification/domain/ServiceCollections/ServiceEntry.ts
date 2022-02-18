import { InjectRepository } from '@nestjs/typeorm';

import { IServiceEntryRepository } from '../../domain/serviceEntrys/serviceEntry.repository.interface';
export class  ServiceEntry {
 constructor() { } 
 id: string;  
serviceId: string;  
serviceCollectionId: string;  
createdAt: Date;  
updatedAt: Date;  

}