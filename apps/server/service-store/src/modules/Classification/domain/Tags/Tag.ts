import { InjectRepository } from '@nestjs/typeorm';

import { ITagRepository } from '../../domain/tags/tag.repository.interface';
export class  Tag {
 constructor() { } 
 id: string;  
name: string;  
description: string;  
createdAt: Date;  
updatedAt: Date;  

}