import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Review } from '../../domain/Reviews/review';
/**
*A class which contains proporties of Review that used to receive paramamer values to be updated in the database
*/
export class UpdateReviewDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
  @ApiProperty()
  @IsNotEmpty()
  title: string;
  @ApiProperty()
  @IsNotEmpty()
  body: string;
  @ApiProperty()
  @IsNotEmpty()
  serviceId: string;
  @ApiProperty()
  @IsNotEmpty()
  userId: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  likes: number;
  /**
*A method that mapes  UpdateReviewDto object data to  Review domain object
*@returns Review domain object which contains Review  information
*/
  static fromDTO(reviewDto: UpdateReviewDto): Review {
    const review: Review = new Review();
    review.id = reviewDto.id;
    review.title = reviewDto.title;
    review.body = reviewDto.body;
    review.serviceId = reviewDto.serviceId;
    review.userId = reviewDto.userId;
    review.status = reviewDto.status;
    review.likes = reviewDto.likes;
    return review;
  }
}
/**
*A class wich contains proporties of Review that used to receive paramamer values to be saved to database
*
*/
export class CreateReviewDto {

  @ApiProperty()
  @IsNotEmpty()
  title: string;
  @ApiProperty()
  @IsNotEmpty()
  body: string;
  @ApiProperty()
  @IsNotEmpty()
  serviceId: string;
  @ApiProperty()
  @IsNotEmpty()
  userId: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  @IsNumber()
  likes: number;
  /**
*A method that mapes  CreateReviewDto object data to  Review domain object
*@returns Review domain object which contains Review  information
*/
  static fromDTO(reviewDto: CreateReviewDto): Review {
    const review: Review = new Review(); 
    review.title = reviewDto.title;
    review.body = reviewDto.body;
    review.serviceId = reviewDto.serviceId;
    review.userId = reviewDto.userId;
    review.status = reviewDto.status;
    review.likes = reviewDto.likes;
    return review;
  }

}
