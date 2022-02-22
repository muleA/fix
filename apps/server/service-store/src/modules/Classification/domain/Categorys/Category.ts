import { InjectRepository } from '@nestjs/typeorm';

import { ICategoryRepository } from '../../domain/categorys/category.repository.interface';
export class  Category {
 constructor() { } 
 id: string;  
name: string;  
description: string;  
code: string;  
parentId: string;  
createdAt: Date;  
updatedAt: Date;  

}