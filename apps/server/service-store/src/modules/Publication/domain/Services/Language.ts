import { InjectRepository } from '@nestjs/typeorm';


export class Language {
    constructor() { }
    id: string;
    serviceId: string;
    name: string;
    code: string;
    createdBy: string;
    updatedBy: string;

}