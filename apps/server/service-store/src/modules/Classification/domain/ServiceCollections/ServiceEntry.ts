import { InjectRepository } from '@nestjs/typeorm';


export class ServiceEntry {
    constructor() { }
    id: string;
    serviceId: string;
    serviceCollectionId: string;
    createdBy: string;
    updatedBy: string;
    createdAt: Date;
    updatedAt: Date;
}