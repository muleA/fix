import { InjectRepository } from '@nestjs/typeorm';

import { IServiceDependencyRepository } from '../../domain/serviceDependencys/serviceDependency.repository.interface';
export class  ServiceDependency {
 constructor() { } 
 id: string;  
serviceId: string;  
dependsOn: string;  
type: string;  
createdAt: Date;  
updatedAt: Date;  

}