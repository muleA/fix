import { InjectRepository } from '@nestjs/typeorm';

export class  ServiceResource {
 constructor() { } 
 id: string;  
serviceCollectionId: string;  
attachmentUrl: string;  
content: string;  
createdAt: Date;  
updatedAt: Date;  

}