import { InjectRepository } from '@nestjs/typeorm';

import { ILikeRepository } from '../../domain/likes/like.repository.interface';
export class  Like {
 constructor() { } 
 id: string;  
reviewId: string;  
userId: string;  
createdAt: Date;  
updatedAt: Date;  

}