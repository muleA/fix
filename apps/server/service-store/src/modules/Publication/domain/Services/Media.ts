import { InjectRepository } from '@nestjs/typeorm';


export class  Media {
 constructor() { } 
 id: string;  
url: string;  
caption: string;  
type: string;  
serviceId: string;  
createdAt: Date;  
updatedAt: Date;  

}