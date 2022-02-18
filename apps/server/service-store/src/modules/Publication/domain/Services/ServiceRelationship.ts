import { InjectRepository } from '@nestjs/typeorm';

import { IServiceRelationshipRepository } from '../../domain/serviceRelationships/serviceRelationship.repository.interface';
export class  ServiceRelationship {
 constructor() { } 
 id: string;  
serviceId: string;  
relatedToServiceId: string;  
status: string;  
createdAt: Date;  
updatedAt: Date;  

}