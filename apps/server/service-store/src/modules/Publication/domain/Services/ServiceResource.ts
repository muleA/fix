import { InjectRepository } from '@nestjs/typeorm';

import { IServiceResourceRepository } from '../../domain/serviceResources/serviceResource.repository.interface';
export class  ServiceResource {
 constructor() { } 
 id: string;  
serviceId: string;  
attachmentUrl: string;  
content: string;  
createdAt: Date;  
updatedAt: Date;  

}