import { InjectRepository } from '@nestjs/typeorm';

export class  ProviderLocation {
 constructor() { } 
 city: string;  
latitude: number;  
longitude: number;  
landmark: string;  

}