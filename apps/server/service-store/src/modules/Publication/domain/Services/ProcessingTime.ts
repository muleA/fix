import { InjectRepository } from '@nestjs/typeorm';

import { IProcessingTimeRepository } from '../../domain/processingTimes/processingTime.repository.interface';
export class  ProcessingTime {
 constructor() { } 
 id: string;  
serviceId: string;  
time: number;  
currency: string;  
description: string;  
createdAt: Date;  
updatedAt: Date;  

}