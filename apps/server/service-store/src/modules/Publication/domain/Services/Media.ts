import { InjectRepository } from '@nestjs/typeorm';
import { string } from 'yup';


export class Media {
    constructor() { }
    id: string;
    url: string;
    caption: string;
    type: string;
    serviceId: string;
    createdBy: string;
    updatedBy: string;

}