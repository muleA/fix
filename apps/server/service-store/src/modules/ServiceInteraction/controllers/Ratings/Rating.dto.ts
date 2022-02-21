import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, isNotEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Rating } from '../../domain/Ratings/rating';
/**
*A class which contains proporties of Rating that used to receive paramamer values to be updated in the database
*/
export class UpdateRatingDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
  @ApiProperty()
  @IsNotEmpty()
  serviceId: string;
  @ApiProperty()
  @IsNotEmpty()
  userId: string;
  @ApiProperty()
  @IsNotEmpty()
  score: number;
  /**
  *A method that mapes  UpdateRatingDto object data to  Rating domain object
  *@returns Rating domain object which contains Rating  information
  */
  static fromDTO(ratingDto: UpdateRatingDto): Rating {
    const rating: Rating = new Rating();
    rating.id = ratingDto.id;
    rating.serviceId = ratingDto.serviceId;
    rating.userId = ratingDto.userId;
    rating.score = ratingDto.score;
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
  @IsNotEmpty()
  serviceId: string;
  @ApiProperty()
  @IsNotEmpty()
  userId: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  score: number;
  /**
  *A method that mapes  CreateRatingDto object data to  Rating domain object
  *@returns Rating domain object which contains Rating  information
  */
  static fromDTO(ratingDto: CreateRatingDto): Rating {
    const rating: Rating = new Rating();
    rating.id = ratingDto.id;
    rating.serviceId = ratingDto.serviceId;
    rating.userId = ratingDto.userId;
    rating.score = ratingDto.score;
    return rating;
  }
}