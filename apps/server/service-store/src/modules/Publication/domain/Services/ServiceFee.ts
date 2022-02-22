import { InjectRepository } from '@nestjs/typeorm';

import { IServiceFeeRepository } from '../../domain/serviceFees/serviceFee.repository.interface';
export class  ServiceFee {
 constructor() { } 
 id: string;  
serviceId: string;  
fee: number;  
currency: string;  
description: string;  
createdAt: Date;  
updatedAt: Date;  

}