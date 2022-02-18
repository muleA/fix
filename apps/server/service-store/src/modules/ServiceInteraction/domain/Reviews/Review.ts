import { InjectRepository } from '@nestjs/typeorm';

import { IReviewRepository } from '../../domain/reviews/review.repository.interface';
export class  Review {
 constructor() { } 
 id: string;  
title: string;  
body: string;  
serviceId: string;  
userId: string;  
status: string;  
likes: number;  
createdAt: Date;  
updatedAt: Date;  

}