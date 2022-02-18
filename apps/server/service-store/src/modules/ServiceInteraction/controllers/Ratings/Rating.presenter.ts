import { ApiProperty } from '@nestjs/swagger';
import { Rating } from '../../domain/Ratings/rating';
 
/**
*A class which contains proporties of Rating that used to put data to be returned to client
*
*/
export class RatingPresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
serviceId: string;
  
@ApiProperty()
userId: string;
  
@ApiProperty()
score: number;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  Rating domain object Property value to  RatingPresenter properties
*/
constructor(rating: Rating) {
  
this.id = rating.id;  

  
this.serviceId = rating.serviceId;  

  
this.userId = rating.userId;  

  
this.score = rating.score;  

  
this.createdAt = rating.createdAt;  

  
this.updatedAt = rating.updatedAt;  

  
    
  }
}