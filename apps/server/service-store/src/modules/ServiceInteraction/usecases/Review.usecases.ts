import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { Review } from '../domain/reviews/review';
import { IReviewRepository } from '../domain/reviews/review.repository.interface';
import { ReviewRepository } from '../persistence/reviews/review.repository';
import { CreateReviewDto, UpdateReviewDto } from '../controllers/reviews/review.dto';
import { CreateLikeDto } from '../controllers/Reviews/Like.dto';
import { Like } from '../domain/Reviews/like';
@Injectable()
export class ReviewUseCases {
  private reviewdomain = new Review();
  private readonly logger = new LoggerService('ReviewService');
  /**
  * A constructor which injects a repository class that used to manage record in the database
  */
  constructor(@InjectRepository(ReviewRepository)
  private reviewRepository: IReviewRepository) { }
  /**
   * A method that calls the repository insert method to save  Review to databse
   * @param createReviewDto  An information of  Review  that need to be saved
   * @returns Promise<Review which contain  created Review information
   * See the [definition of the CreateReviewDto file]{@link CreateReviewDto} to see a list of required properties
   */
  async createReview(reviewDto: CreateReviewDto): Promise<Review> {
    var review = new Review();
    review = CreateReviewDto.fromDTO(reviewDto);
    const result = await this.reviewRepository.insertReview(review);
    this.logger.log('CreateReviewUseCases execute', 'New review have been inserted');
    return result;
  }
  /**
   * A method that invoke a repository delete method  to  delete a Review from the database by id
   * @param id An id of a Review. A Review with this id should exist in the database
   * @returns void 
  */
  async deleteReview(id: string): Promise<void> {
    await this.reviewRepository.deleteById(id);
    this.logger.log('DeleteReviewUseCases execute', `Review ${id} have been deleted`);
  }
  /**
   * A method that invoke a repository method findById() to fetchs a Review from the database by id
   * @param id An id of a Review. A Review with this id should exist in the database
   * @returns A Promise which contain a Specific   Review information
   * See the [definition of the Review file]{@link Review} to see a list of required properties
   */
  async getReview(id: string): Promise<Review> {
    return await this.reviewRepository.findById(id);
  }
  /**
   * A method that invokes a method findAll() of  repository method to fetchs all Review from the database 
   * @returns Promise with list of  Review which contain  Review information
   */
  async fetReviews(): Promise<Review[]> {
    return await this.reviewRepository.findAll();
  }
  /**
   * A method that invokes a repository method updateReview(review) to update a Review 
   * @param updateReviewDto  An information of  Review 
   * @returns no returned data
   */
  async updateReview(reviewDto: UpdateReviewDto): Promise<void> {
    var review = await this.reviewRepository.findById(reviewDto.id);
    if (review != null) {
      review = UpdateReviewDto.fromDTO(reviewDto);
      await this.reviewRepository.updateReview(review.id, review);
    } else {
      throw new Error("Not Found");
    }
    this.logger.log('UpdateReviewUseCases execute', `Review ${review.id} have been updated`);
  }
  async createLike(createLikeDto: CreateLikeDto): Promise<boolean> {
    let  review=new Review();
     review = await this.reviewRepository.findById(createLikeDto.reviewId);
    console.log(" review",review);
    if (review) {
      let likeDomain = CreateLikeDto.fromDTO(createLikeDto);
      if(!review.likesDetail)
      review.likesDetail=[]
      review.createLike(likeDomain);
      console.log(review);
      const result = await this.reviewRepository.insertReview( review);
      console.log(result);
      return true;
    }
    return false;   
  }
  async deleteLike(reviewId: string, likeId: string) {
    let result = await this.reviewRepository.findById(reviewId);
    if (result) {
      await result.deleteLike(likeId);
      this.reviewRepository.updateReview(reviewId, result);
    }
  }


}