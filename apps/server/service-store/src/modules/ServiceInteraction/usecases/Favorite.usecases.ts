import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { Favorite } from '../domain/favorites/favorite';
import { IFavoriteRepository } from '../domain/favorites/favorite.repository.interface';
import { FavoriteRepository } from '../persistence/favorites/favorite.repository';
import { CreateFavoriteDto, UpdateFavoriteDto } from '../controllers/favorites/favorite.dto';
@Injectable()
export class FavoriteUseCases {
private favoritedomain=new Favorite();
  private readonly logger = new LoggerService('FavoriteService');
  /**
  * A constructor which injects a repository class that used to manage record in the database
  */
  constructor(@InjectRepository(FavoriteRepository)
  private favoriteRepository: IFavoriteRepository) { }

/**
 * A method that calls the repository insert method to save  Favorite to databse
 * @param createFavoriteDto  An information of  Favorite  that need to be saved
 * @returns Promise<Favorite which contain  created Favorite information
 * See the [definition of the CreateFavoriteDto file]{@link CreateFavoriteDto} to see a list of required properties
 */
  async createFavorite( favoriteDto:CreateFavoriteDto): Promise<Favorite> {
    var favorite = new Favorite();
    favorite =CreateFavoriteDto.fromDTO(favoriteDto);  
    const result = await this.favoriteRepository.insertFavorite(favorite);
    this.logger.log('CreateFavoriteUseCases execute', 'New favorite have been inserted');
    return result;
  }
/**
 * A method that invoke a repository delete method  to  delete a Favorite from the database by id
 * @param id An id of a Favorite. A Favorite with this id should exist in the database
 * @returns void 
*/
  async deleteFavorite(id: string): Promise<void> {
    await this.favoriteRepository.deleteById(id);
    this.logger.log('DeleteFavoriteUseCases execute', `Favorite ${id} have been deleted`);
  }

/**
 * A method that invoke a repository method findById() to fetchs a Favorite from the database by id
 * @param id An id of a Favorite. A Favorite with this id should exist in the database
 * @returns A Promise which contain a Specific   Favorite information
 * See the [definition of the Favorite file]{@link Favorite} to see a list of required properties
 */
  async getFavorite(id: string): Promise<Favorite> {
    return await this.favoriteRepository.findById(id);
  }

/**
 * A method that invokes a method findAll() of  repository method to fetchs all Favorite from the database 
 * @returns Promise with list of  Favorite which contain  Favorite information
 */
  async fetFavorites(): Promise<Favorite[]> {
    return await this.favoriteRepository.findAll();
  }

/**
 * A method that invokes a repository method updateFavorite(favorite) to update a Favorite 
 * @param updateFavoriteDto  An information of  Favorite 
 * @returns no returned data
 */ 
async updateFavorite(favoriteDto:UpdateFavoriteDto): Promise<void> {
    var  var favorite= await this.favoriteRepository.findById(favoriteDto.id);
   if(favorite!=null){
    
    favorite =UpdateFavoriteDto.fromDTO(favoriteDto);
    await this.favoriteRepository.updateFavorite( favorite.id, favorite);
   }else{
   threw new Error("Not Found");
   }   
    
    this.logger.log('UpdateFavoriteUseCases execute', `Favorite ${ favorite.id} have been updated`);
  }
  
 
   



}