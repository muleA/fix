import { InjectRepository } from '@nestjs/typeorm';

import { IApplicationFormRepository } from '../../domain/applicationForms/applicationForm.repository.interface';
export class  ApplicationForm {
 constructor() { } 
 title: string;  
formUrl: string;  
status: string;  
taskName: string;  

}