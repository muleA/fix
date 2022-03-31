import { InjectRepository } from '@nestjs/typeorm';


export class ProcessingTime {
    constructor() { }
    id: string;
    serviceId: string;
    time: number;
    currency: string;
    description: string;
    createdBy: string;
    updatedBy: string;

}