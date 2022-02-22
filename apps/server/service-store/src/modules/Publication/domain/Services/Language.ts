import { InjectRepository } from '@nestjs/typeorm';


export class  Language {
 constructor() { } 
 id: string;  
serviceId: string;  
name: string;  
code: string;  
createdAt: Date;  
updatedAt: Date;  

}