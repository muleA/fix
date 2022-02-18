import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { Rating } from '../domain/ratings/rating';
import { IRatingRepository } from '../domain/ratings/rating.repository.interface';
import { RatingRepository } from '../persistence/ratings/rating.repository';
import { CreateRatingDto, UpdateRatingDto } from '../controllers/ratings/rating.dto';
@Injectable()
export class RatingUseCases {
private ratingdomain=new Rating();
  private readonly logger = new LoggerService('RatingService');
  /**
  * A constructor which injects a repository class that used to manage record in the database
  */
  constructor(@InjectRepository(RatingRepository)
  private ratingRepository: IRatingRepository) { }

/**
 * A method that calls the repository insert method to save  Rating to databse
 * @param createRatingDto  An information of  Rating  that need to be saved
 * @returns Promise<Rating which contain  created Rating information
 * See the [definition of the CreateRatingDto file]{@link CreateRatingDto} to see a list of required properties
 */
  async createRating( ratingDto:CreateRatingDto): Promise<Rating> {
    var rating = new Rating();
    rating =CreateRatingDto.fromDTO(ratingDto);  
    const result = await this.ratingRepository.insertRating(rating);
    this.logger.log('CreateRatingUseCases execute', 'New rating have been inserted');
    return result;
  }
/**
 * A method that invoke a repository delete method  to  delete a Rating from the database by id
 * @param id An id of a Rating. A Rating with this id should exist in the database
 * @returns void 
*/
  async deleteRating(id: string): Promise<void> {
    await this.ratingRepository.deleteById(id);
    this.logger.log('DeleteRatingUseCases execute', `Rating ${id} have been deleted`);
  }

/**
 * A method that invoke a repository method findById() to fetchs a Rating from the database by id
 * @param id An id of a Rating. A Rating with this id should exist in the database
 * @returns A Promise which contain a Specific   Rating information
 * See the [definition of the Rating file]{@link Rating} to see a list of required properties
 */
  async getRating(id: string): Promise<Rating> {
    return await this.ratingRepository.findById(id);
  }

/**
 * A method that invokes a method findAll() of  repository method to fetchs all Rating from the database 
 * @returns Promise with list of  Rating which contain  Rating information
 */
  async fetRatings(): Promise<Rating[]> {
    return await this.ratingRepository.findAll();
  }

/**
 * A method that invokes a repository method updateRating(rating) to update a Rating 
 * @param updateRatingDto  An information of  Rating 
 * @returns no returned data
 */ 
async updateRating(ratingDto:UpdateRatingDto): Promise<void> {
    var  var rating= await this.ratingRepository.findById(ratingDto.id);
   if(rating!=null){
    
    rating =UpdateRatingDto.fromDTO(ratingDto);
    await this.ratingRepository.updateRating( rating.id, rating);
   }else{
   threw new Error("Not Found");
   }   
    
    this.logger.log('UpdateRatingUseCases execute', `Rating ${ rating.id} have been updated`);
  }
  
 
   



}