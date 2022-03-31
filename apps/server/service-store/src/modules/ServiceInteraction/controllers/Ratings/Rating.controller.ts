import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query, Param } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RatingPresenter } from './rating.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateRatingDto, UpdateRatingDto } from '../ratings/rating.dto';
import { RatingUseCases } from '../../usecases/rating.usecases';
@Controller('ratings')
@ApiTags('ratings')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(RatingPresenter)
export class RatingsController {
/**
*A constructor that injects RatingUseCases
*/
constructor(private useCase: RatingUseCases) {}
/**
 * A method that fetchs a Rating from the database by id
 * @param id An id of a Rating. A Rating with this id should exist in the database
 * @returns A RatingPresenter which contain  Rating information
 * See the [definition of the RatingPresenter file]{@link RatingPresenter} to see a list of required properties
 */
@Get('get-rating/:id')
@ApiResponseType(RatingPresenter, false)
async getRating(@Param('id') id: string) {
const rating = await this.useCase.getRating(id);
return new RatingPresenter(rating);
}
/**
 * A method that fetchs all Rating from the database 
 * @returns A list of  RatingPresenter which contain  Rating information
 * See the [definition of the RatingPresenter file]{@link RatingPresenter} to see a list of required properties
 */
@Get('get-ratings')
@ApiResponseType(RatingPresenter, true)
async getRatings() {
const ratings = await this.useCase.fetRatings();
return ratings.map((rating) => new RatingPresenter(rating));
}
/**
 * A method that update a Rating 
 * @param updateRatingDto  An information of  Rating 
 * @returns A RatingPresenter which contain  Rating information
 * See the [definition of the updateRatingDto file]{@link updateRatingDto} to see a list of required properties
 */ 
 @Put('update-rating')
@ApiResponseType(RatingPresenter, true)
async updateRating(@Body() updateRatingDto: UpdateRatingDto) {
await this.useCase.updateRating(updateRatingDto);
return 'success';
}
/**
 * A method that delete a Rating from the database by id
 * @param id An id of a Rating. A Rating with this id should exist in the database
 * @returns success which  tells us the status of the success
*/
@Delete('delete-rating')
@ApiResponseType(RatingPresenter, true)
async deleteRating(@Query() id: string) {
await this.useCase.deleteRating(id);
return 'success';
}
/**
 * A method that creates a Rating 
 * @param createRatingDto  An information of  Rating  that need to be saved
 * @returns A RatingPresenter which contain  created Rating information
 * See the [definition of the CreateRatingDto file]{@link CreateRatingDto} to see a list of required properties
 */ 
@Post('create-rating')
@ApiResponseType(RatingPresenter, true)
async createRating(@Body() createRatingDto: CreateRatingDto) {
const ratingCreated = await this.useCase.createRating( createRatingDto);
return new RatingPresenter(ratingCreated );
}

}