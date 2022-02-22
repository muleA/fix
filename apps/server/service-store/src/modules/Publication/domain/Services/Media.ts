import { InjectRepository } from '@nestjs/typeorm';

import { IMediaRepository } from '../../domain/medias/media.repository.interface';
export class  Media {
 constructor() { } 
 id: string;  
url: string;  
caption: string;  
type: string;  
serviceId: string;  
createdAt: Date;  
updatedAt: Date;  

}