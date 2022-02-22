import { InjectRepository } from '@nestjs/typeorm';

import { ILanguageRepository } from '../../domain/languages/language.repository.interface';
export class  Language {
 constructor() { } 
 id: string;  
serviceId: string;  
name: string;  
code: string;  
createdAt: Date;  
updatedAt: Date;  

}