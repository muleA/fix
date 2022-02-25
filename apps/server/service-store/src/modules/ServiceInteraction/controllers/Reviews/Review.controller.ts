import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReviewPresenter } from './review.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateReviewDto, UpdateReviewDto } from '../reviews/review.dto';
import { ReviewUseCases } from '../../usecases/review.usecases';
import { LikePresenter } from './Like.presenter';
import { CreateLikeDto,DeleteLikeDto } from './Like.dto';
@Controller('reviews')
@ApiTags('reviews')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ReviewPresenter)
export class ReviewsController {
/**
*A constructor that injects ReviewUseCases
*/
constructor(private useCase: ReviewUseCases) {}
/**
 * A method that fetchs a Review from the database by id
 * @param id An id of a Review. A Review with this id should exist in the database
 * @returns A ReviewPresenter which contain  Review information
 * See the [definition of the ReviewPresenter file]{@link ReviewPresenter} to see a list of required properties
 */
@Get('get-review')
@ApiResponseType(ReviewPresenter, false)
async getReview(@Query() id: string) {
const review = await this.useCase.getReview(id);
return new ReviewPresenter(review);
}
/**
 * A method that fetchs all Review from the database 
 * @returns A list of  ReviewPresenter which contain  Review information
 * See the [definition of the ReviewPresenter file]{@link ReviewPresenter} to see a list of required properties
 */
@Get('get-reviews')
@ApiResponseType(ReviewPresenter, true)
async getReviews() {
const reviews = await this.useCase.fetReviews();
return reviews.map((review) => new ReviewPresenter(review));
}
/**
 * A method that update a Review 
 * @param updateReviewDto  An information of  Review 
 * @returns A ReviewPresenter which contain  Review information
 * See the [definition of the updateReviewDto file]{@link updateReviewDto} to see a list of required properties
 */ 
 @Put('update-review')
@ApiResponseType(ReviewPresenter, true)
async updateReview(@Body() updateReviewDto: UpdateReviewDto) {
await this.useCase.updateReview(updateReviewDto);
return 'success';
}
/**
 * A method that delete a Review from the database by id
 * @param id An id of a Review. A Review with this id should exist in the database
 * @returns success which  informs the status of the success
*/
@Delete('delete-review')
@ApiResponseType(ReviewPresenter, true)
async deleteReview(@Query() id: string) {
await this.useCase.deleteReview(id);
return 'success';
}
/**
 * A method that creates a Review 
 * @param createReviewDto  An information of  Review  that need to be saved
 * @returns A ReviewPresenter which contain  created Review information
 * See the [definition of the CreateReviewDto file]{@link CreateReviewDto} to see a list of required properties
 */ 
@Post('create-review')
@ApiResponseType(ReviewPresenter, true)
async createReview(@Body() createReviewDto: CreateReviewDto) {
const reviewCreated = await this.useCase.createReview( createReviewDto);
return new ReviewPresenter(reviewCreated );
}
// child mwthods
@Post('create-like')
@ApiResponseType(LikePresenter, true)
async createLike(@Body() createLikeDto: CreateLikeDto) {
const likeCreated = await this.useCase.createLike(createLikeDto);
return true;
}
/**
 * A method that delete a like from the database by likesId and review id
 * @param id An id of a Review. A Review with this id should exist in the database
 * @returns success which  informs the status of the success
*/
@Post('delete-like')
@ApiResponseType(LikePresenter, true)
async deleteLike(@Body() deleteLikeDto : DeleteLikeDto) {
await this.useCase.deleteLike(deleteLikeDto.reviewId, deleteLikeDto.LikeId);
return 'success';
}



}