import { ApiProperty } from '@nestjs/swagger';
import { Review } from '../../domain/Reviews/review';
/**
*A class which contains proporties of Review that used to put data to be returned to client
*
*/
export class ReviewPresenter {
@ApiProperty()
id: string;
@ApiProperty()
title: string;
@ApiProperty()
body: string;
@ApiProperty()
serviceId: string;
@ApiProperty()
userId: string;
@ApiProperty()
status: string;
@ApiProperty()
likes: number;
@ApiProperty()
createdAt: Date;
@ApiProperty()
updatedAt: Date;

/**
*A constructor which copy  Review domain object Property value to  ReviewPresenter properties
*/
constructor(review: Review) {
this.id = review.id;  
this.title = review.title;  
this.body = review.body;  
this.serviceId = review.serviceId;  
this.userId = review.userId;  
this.status = review.status;  
this.likes = review.likes;  
this.createdAt = review.createdAt;  
this.updatedAt = review.updatedAt;  

  }
}