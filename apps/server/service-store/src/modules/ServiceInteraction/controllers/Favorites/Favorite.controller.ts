import { Body, Controller, Delete,Param, Get, Inject, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FavoritePresenter } from './favorite.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateFavoriteDto, UpdateFavoriteDto } from '../favorites/favorite.dto';
import { FavoriteUseCases } from '../../usecases/favorite.usecases';

@Controller('favorites')
@ApiTags('favorites')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(FavoritePresenter)

export class FavoritesController {
/**
*A constructor that injects FavoriteUseCases
*/
constructor(private useCase: FavoriteUseCases) {}
/**
 * A method that fetchs a Favorite from the database by id
 * @param id An id of a Favorite. A Favorite with this id should exist in the database
 * @returns A FavoritePresenter which contain  Favorite information
 * See the [definition of the FavoritePresenter file]{@link FavoritePresenter} to see a list of required properties
 */
@Get('get-favorite/:id')
@ApiResponseType(FavoritePresenter, false)
async getFavorite(@Query() id: string) {
const favorite = await this.useCase.getFavorite(id);
return new FavoritePresenter(favorite);
}
/**
 * A method that fetchs all Favorite from the database 
 * @returns A list of  FavoritePresenter which contain  Favorite information
 * See the [definition of the FavoritePresenter file]{@link FavoritePresenter} to see a list of required properties
 */
@Get('get-favorites')
@ApiResponseType(FavoritePresenter, true)
async getFavorites() {
//return "welcome to here";
const favorites = await this.useCase.fetFavorites();
return favorites.map((favorite) => new FavoritePresenter(favorite));
}

/**
 * A method that update a Favorite 
 * @param updateFavoriteDto  An information of  Favorite 
 * @returns A FavoritePresenter which contain  Favorite information
 * See the [definition of the updateFavoriteDto file]{@link updateFavoriteDto} to see a list of required properties
 */ 
@Put('update-favorite')
@ApiResponseType(FavoritePresenter, true)
async updateFavorite(@Body() updateFavoriteDto: UpdateFavoriteDto) {
await this.useCase.updateFavorite(updateFavoriteDto);
return 'success';
}
/**
 * A method that delete a Favorite from the database by id
 * @param id An id of a Favorite. A Favorite with this id should exist in the database
 * @returns success which  informs the status of the success
*/
@Delete('delete-favorite/:id')
@ApiResponseType(FavoritePresenter, true)
async deleteFavorite(@Param('id') id: string) {
await this.useCase.deleteFavorite(id);
return 'success';
}

/**
 * A method that creates a Favorite 
 * @param createFavoriteDto  An information of  Favorite  that need to be saved
 * @returns A FavoritePresenter which contain  created Favorite information
 * See the [definition of the CreateFavoriteDto file]{@link CreateFavoriteDto} to see a list of required properties
 */ 
@Post('create-favorite')
@ApiResponseType(FavoritePresenter, true)
async createFavorite(@Body() createFavoriteDto: CreateFavoriteDto) {
const favoriteCreated = await this.useCase.createFavorite( createFavoriteDto);
return new FavoritePresenter(favoriteCreated );
}
  

}