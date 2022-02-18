import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Rating } from '../../domain/Ratings/rating';
   
/**
*A class which contains proporties of Rating that used to receive paramamer values to be updated in the database
*/
export class UpdateRatingDto {
  
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
*A method that mapes  UpdateRatingDto object data to  Rating domain object
*@returns Rating domain object which contains Rating  information
*/
static fromDTO(ratingDto:UpdateRatingDto): Rating
{
const rating: Rating = new Rating();  
 
rating.id=ratingDto.id; 


 
rating.serviceId=ratingDto.serviceId; 


 
rating.userId=ratingDto.userId; 


 
rating.score=ratingDto.score; 


 
rating.createdAt=ratingDto.createdAt; 


 
rating.updatedAt=ratingDto.updatedAt; 


return rating;
  }
}
/**
*A class wich contains proporties of Rating that used to receive paramamer values to be saved to database
*
*/
export class CreateRatingDto {
     
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
*A method that mapes  CreateRatingDto object data to  Rating domain object
*@returns Rating domain object which contains Rating  information
*/    
static fromDTO(ratingDto:CreateRatingDto): Rating
{
const rating: Rating = new Rating();  
 
rating.id=ratingDto.id; 
 
rating.serviceId=ratingDto.serviceId; 
 
rating.userId=ratingDto.userId; 
 
rating.score=ratingDto.score; 
 
rating.createdAt=ratingDto.createdAt; 
 
rating.updatedAt=ratingDto.updatedAt; 
     return rating;
    }
}