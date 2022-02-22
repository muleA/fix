import { InjectRepository } from '@nestjs/typeorm';

export class  Location {
 constructor() { } 
 city: string;  
latitude: number;  
longitude: number;  
landmark: string;  

}