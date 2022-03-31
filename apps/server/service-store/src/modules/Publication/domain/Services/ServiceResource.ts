import { InjectRepository } from '@nestjs/typeorm';
export class ServiceResource {
    constructor() { }
    id: string;
    serviceId: string;
    attachmentUrl: string;
    content: string;
    createdBy: string;
    updatedBy: string;

}