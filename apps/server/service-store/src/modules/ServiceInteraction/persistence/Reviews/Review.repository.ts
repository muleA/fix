Review
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository,  } from 'typeorm';
import { Review } from '../../domain/reviews/review';
import { IReviewRepository } from '../../domain/reviews/review.repository.interface';
import { ReviewEntity } from './review.entity';

//@Injectable()
@EntityRepository(ReviewEntity)
export class ReviewRepository extends Repository<ReviewEntity> implements IReviewRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates Review information in the database 
  */
  async updateReview(id:string,review: Review): Promise<void> {
    const reviewEntity = this.toReviewEntity(review);
    await this.update( {id: review.id}, reviewEntity);
  }
 /**
  * A method that inserts ReviewEntity  into  database 
  *
  */
  async insertReview(review: Review): Promise<Review> {
    const reviewEntity = this.toReviewEntity(review);
    const result = await this.insert(reviewEntity);
    console.log(result.generatedMaps);
    return  this.toReview(result.generatedMaps[0] as ReviewEntity);   
  }
  /**
  * A method that fetches all Reviews from the database 
  *
  */
  async findAll(): Promise<Review[]> {
    const reviewsEntity = await this.find();
    return reviewsEntity.map((reviewEntity) => this.toReview(reviewEntity));
  }
  /**
  * A method that fetches a specific Review by id  from the database 
  *@param  an Id of Review
  *@returns A Promise of Review
  */ 
  async findById(id: string): Promise<Review> {
    const reviewEntity = await this.findOneOrFail(id);
    return this.toReview(reviewEntity);
  }
/**
  * A method that deletes a specific Review by id from the database
  *@param  an Id of Review
   */
  async deleteById(id: string): Promise<void> {
   await this.delete({ id: id });
  }
  /**
  *A method that copy ReviewEntity data  a  Review domain  
  *@param reviewEntity which compraises  Review information
  *@returns Review information
  */
private toReview(reviewEntity: ReviewEntity): Review {
const review: Review = new Review();   
    review.id= reviewEntity.id;
    review.title= reviewEntity.title;
    review.body= reviewEntity.body;
    review.serviceId= reviewEntity.serviceId;
    review.userId= reviewEntity.userId;
    review.status= reviewEntity.status;
    review.likes= reviewEntity.likes;
    review.createdAt= reviewEntity.createdAt;
    review.updatedAt= reviewEntity.updatedAt;
     return review;
}
 /**
  *A method that copy Review data to a ReviewEntity   object 
  *@param review An review which compraises  Review information
  *@returns A Review which contain  Review information
  */
    
 private toReviewEntity(review: Review): ReviewEntity {
   const reviewEntity: ReviewEntity = new ReviewEntity();    
    reviewEntity.id= review.id;
    reviewEntity.title= review.title;
    reviewEntity.body= review.body;
    reviewEntity.serviceId= review.serviceId;
    reviewEntity.userId= review.userId;
    reviewEntity.status= review.status;
    reviewEntity.likes= review.likes;
    reviewEntity.createdAt= review.createdAt;
    reviewEntity.updatedAt= review.updatedAt;
 return reviewEntity;
  }
 
}