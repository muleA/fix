import { InjectRepository } from '@nestjs/typeorm';


export class ServiceDependency {
    constructor() { }
    id: string;
    serviceId: string;
    dependsOn: string;
    type: string;
    createdBy: string;
    updatedBy: string;

}