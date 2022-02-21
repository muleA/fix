import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository,  } from 'typeorm';
import { Rating } from '../../domain/ratings/rating';
import { IRatingRepository } from '../../domain/ratings/rating.repository.interface';
import { RatingEntity } from './rating.entity';
@EntityRepository(RatingEntity)
export class RatingRepository extends Repository<RatingEntity> implements IRatingRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates Rating information in the database 
  */
  async updateRating(id:string,rating: Rating): Promise<void> {
    const ratingEntity = this.toRatingEntity(rating);
    await this.update( {id: rating.id}, ratingEntity);
  }
 /**
  * A method that inserts RatingEntity  into  database 
  *
  */
  async insertRating(rating: Rating): Promise<Rating> {
    const ratingEntity = this.toRatingEntity(rating);
    const result = await this.insert(ratingEntity);
    console.log(result.generatedMaps);
    return  this.toRating(result.generatedMaps[0] as RatingEntity);   
  }
  /**
  * A method that fetches all Ratings from the database 
  *
  */
  async findAll(): Promise<Rating[]> {
    const ratingsEntity = await this.find();
    return ratingsEntity.map((ratingEntity) => this.toRating(ratingEntity));
  }
  /**
  * A method that fetches a specific Rating by id  from the database 
  *@param  an Id of Rating
  *@returns A Promise of Rating
  */ 
  async findById(id: string): Promise<Rating> {
    const ratingEntity = await this.findOneOrFail(id);
    return this.toRating(ratingEntity);
  }
/**
  * A method that deletes a specific Rating by id from the database
  *@param  an Id of Rating
   */
  async deleteById(id: string): Promise<void> {
   await this.delete({ id: id });
  }
  /**
  *A method that copy RatingEntity data  a  Rating domain  
  *@param ratingEntity which compraises  Rating information
  *@returns Rating information
  */
private toRating(ratingEntity: RatingEntity): Rating {
const rating: Rating = new Rating();   
    rating.id= ratingEntity.id;
    rating.serviceId= ratingEntity.serviceId;
    rating.userId= ratingEntity.userId;
    rating.score= ratingEntity.score;
    rating.createdAt= ratingEntity.createdAt;
    rating.updatedAt= ratingEntity.updatedAt;
     return rating;
}
 /**
  *A method that copy Rating data to a RatingEntity   object 
  *@param rating An rating which compraises  Rating information
  *@returns A Rating which contain  Rating information
  */
 private toRatingEntity(rating: Rating): RatingEntity {
   const ratingEntity: RatingEntity = new RatingEntity();    
    ratingEntity.id= rating.id;
    ratingEntity.serviceId= rating.serviceId;
    ratingEntity.userId= rating.userId;
    ratingEntity.score= rating.score; 
 return ratingEntity;
  }
}