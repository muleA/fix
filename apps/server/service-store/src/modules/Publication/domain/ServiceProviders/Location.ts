import { InjectRepository } from '@nestjs/typeorm';

import { ILocationRepository } from '../../domain/locations/location.repository.interface';
export class  Location {
 constructor() { } 
 city: string;  
latitude: number;  
longitude: number;  
landmark: string;  

}