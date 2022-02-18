import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Like } from '../../domain/Likes/like';
   
/**
*A class which contains proporties of Like that used to receive paramamer values to be updated in the database
*/
export class UpdateLikeDto {
  
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
*A method that mapes  UpdateLikeDto object data to  Like domain object
*@returns Like domain object which contains Like  information
*/
static fromDTO(likeDto:UpdateLikeDto): Like
{
const like: Like = new Like();  
 
like.id=likeDto.id; 


 
like.reviewId=likeDto.reviewId; 


 
like.userId=likeDto.userId; 


 
like.createdAt=likeDto.createdAt; 


 
like.updatedAt=likeDto.updatedAt; 


return like;
  }
}
/**
*A class wich contains proporties of Like that used to receive paramamer values to be saved to database
*
*/
export class CreateLikeDto {
     
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
*A method that mapes  CreateLikeDto object data to  Like domain object
*@returns Like domain object which contains Like  information
*/    
static fromDTO(likeDto:CreateLikeDto): Like
{
const like: Like = new Like();  
 
like.id=likeDto.id; 
 
like.reviewId=likeDto.reviewId; 
 
like.userId=likeDto.userId; 
 
like.createdAt=likeDto.createdAt; 
 
like.updatedAt=likeDto.updatedAt; 
     return like;
    }
}