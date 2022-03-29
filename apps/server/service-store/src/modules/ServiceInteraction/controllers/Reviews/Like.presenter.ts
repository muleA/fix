import { ApiProperty } from '@nestjs/swagger';
import { Like } from '../../domain/Reviews/like';
/**
*A class which contains proporties of Like that used to put data to be returned to client
*/
export class LikePresenter {
@ApiProperty()
id: string;
@ApiProperty()
reviewId: string;
@ApiProperty()
userId: string;
@ApiProperty()
createdAt: Date;
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  Like domain object Property value to  LikePresenter properties
*/
constructor(like: Like) {
this.id = like.id;  
this.reviewId = like.reviewId;  
this.userId = like.userId;  
 
}
}