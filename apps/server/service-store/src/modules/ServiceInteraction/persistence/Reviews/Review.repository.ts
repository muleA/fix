import { EntityRepository, Repository, } from 'typeorm';
import { Like } from '../../domain/Reviews/like';
import { Review } from '../../domain/reviews/review';
import { IReviewRepository } from '../../domain/reviews/review.repository.interface';
import { LikeEntity } from './Like.entity';
import { ReviewEntity } from './review.entity';
import {getConnection,createConnection} from "typeorm";
@EntityRepository(ReviewEntity)
export class ReviewRepository extends Repository<ReviewEntity> implements IReviewRepository {
  constructor() {
    super()
  }
 

  /**
  * A method that updates Review information in the database 
  */
  async updateReview(id: string, review: Review): Promise<void> {
    const reviewEntity = this.toReviewEntity(review);
    await this.save(reviewEntity);
  }
  /**
   * A method that inserts ReviewEntity  into  database 
   *
   */
  async insertReview(review: Review): Promise<Review> {
    const reviewEntity = this.toReviewEntity(review);
    const result = await this.insert(reviewEntity);
    console.log(result);
    return this.toReview(result.generatedMaps[0] as ReviewEntity);
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
    console.log("find by id" ,reviewEntity);
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
    review.id = reviewEntity.id;
    review.title = reviewEntity.title;
    review.body = reviewEntity.body;
    review.serviceId = reviewEntity.serviceId;
    review.userId = reviewEntity.userId;
    review.status = reviewEntity.status;
    review.likes = reviewEntity.likes;
    review.likesDetail = reviewEntity.likesDetail.map(element => { return this.toLike(element) });
    review.createdAt = reviewEntity.createdAt;
    review.updatedAt = reviewEntity.updatedAt;
    return review;
  }
/**
 * A method that maps Like Entity object to Like domain object
 *@param likeEntity An Like which compraises  userid and review id 
 *@returns A Review which contain  Review information
 */
  private toLike(likeEntity: LikeEntity): Like {
    let l = new Like();
    l.id = likeEntity.id;
    l.reviewId = likeEntity.reviewId;
    l.userId = likeEntity.userId;
   // l.review.id=likeEntity.review.id;
   // console.log(l);
    return l;
  }
  /**
   *A method that copy Review data to a ReviewEntity   object 
   *@param review An review which compraises  Review information
   *@returns A Review which contain  Review information
   */
  private toReviewEntity(review: Review): ReviewEntity {
    const reviewEntity: ReviewEntity = new ReviewEntity();
    reviewEntity.id = review.id;
    reviewEntity.title = review.title;
    reviewEntity.body = review.body;
    reviewEntity.serviceId = review.serviceId;
    reviewEntity.userId = review.userId;
    reviewEntity.status = review.status;
    reviewEntity.likes = review.likes;
    reviewEntity.likesDetail= review.likesDetail.map(element=> {return this.toLikeEntity(element)});
    console.log("review entity",reviewEntity);
   
    return reviewEntity;
  }
  
  /**
 * A method that maps Like Entity object to Like domain object
 *@param Like A Like domain model object which compraises  userid and review id 
 *@returns A likeentity which contain  Like  information userid and review id
 */
  private toLikeEntity(like:Like): LikeEntity{
    const likeenetity:LikeEntity=new LikeEntity();
    likeenetity.reviewId=like.reviewId;
    likeenetity.userId=like.userId;
    likeenetity.id=like.id;   
    return likeenetity;
  }

 async removeAndSaveLikes( review:Review){
   await getConnection()
    .createQueryBuilder()
    .delete()
    .from(LikeEntity)
    .where("reviewId=:reviewId", { reviewId: review.id })
    .execute();  
    const reviewEntity = this.toReviewEntity(review);
   let Result= await this.save(reviewEntity);
   return this.toReview(Result);
  }

  a /**
  * A method that make soft delete a specific Review by id  from the database 
  *@param  review review domain object
  *@returns A Promise of Review object
  */
  async softDeleteReview(review: Review): Promise <Review> {
  let result=this.toReviewEntity(review);
  this.softDelete(result);
  return this.toReview(result);
  }

  async restoreReview(review:Review){
    let result=this.toReviewEntity(review);   
   let review_= await this.restore(result);
   console.log(review_);
  // return this.toReview(review_);
  }

}