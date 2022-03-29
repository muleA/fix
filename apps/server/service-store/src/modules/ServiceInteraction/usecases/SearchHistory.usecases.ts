import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { SearchHistory } from '../domain/searchHistorys/searchHistory';
import { ISearchHistoryRepository } from '../domain/searchHistorys/searchHistory.repository.interface';
import { SearchHistoryRepository } from '../persistence/searchHistorys/searchHistory.repository';
import { CreateSearchHistoryDto, UpdateSearchHistoryDto } from '../controllers/searchHistorys/searchHistory.dto';
@Injectable()
export class SearchHistoryUseCases {
private searchHistorydomain=new SearchHistory();
  private readonly logger = new LoggerService('SearchHistoryService');
  /**
  * A constructor which injects a repository class that used to manage record in the database
  */
  constructor(@InjectRepository(SearchHistoryRepository)
  private searchHistoryRepository: ISearchHistoryRepository) { }

/**
 * A method that calls the repository insert method to save  SearchHistory to databse
 * @param createSearchHistoryDto  An information of  SearchHistory  that need to be saved
 * @returns Promise<SearchHistory which contain  created SearchHistory information
 * See the [definition of the CreateSearchHistoryDto file]{@link CreateSearchHistoryDto} to see a list of required properties
 */
  async createSearchHistory( searchHistoryDto:CreateSearchHistoryDto): Promise<SearchHistory> {
    var searchHistory = new SearchHistory();
    searchHistory =CreateSearchHistoryDto.fromDTO(searchHistoryDto);  
    const result = await this.searchHistoryRepository.insertSearchHistory(searchHistory);
    this.logger.log('CreateSearchHistoryUseCases execute', 'New searchHistory have been inserted');
    return result;
  }
/**
 * A method that invoke a repository delete method  to  delete a SearchHistory from the database by id
 * @param id An id of a SearchHistory. A SearchHistory with this id should exist in the database
 * @returns void 
*/
  async deleteSearchHistory(id: string): Promise<void> {
    await this.searchHistoryRepository.deleteById(id);
    this.logger.log('DeleteSearchHistoryUseCases execute', `SearchHistory ${id} have been deleted`);
  }

/**
 * A method that invoke a repository method findById() to fetchs a SearchHistory from the database by id
 * @param id An id of a SearchHistory. A SearchHistory with this id should exist in the database
 * @returns A Promise which contain a Specific   SearchHistory information
 * See the [definition of the SearchHistory file]{@link SearchHistory} to see a list of required properties
 */
  async getSearchHistory(id: string): Promise<SearchHistory> {
    return await this.searchHistoryRepository.findById(id);
  }

/**
 * A method that invokes a method findAll() of  repository method to fetchs all SearchHistory from the database 
 * @returns Promise with list of  SearchHistory which contain  SearchHistory information
 */
  async fetSearchHistorys(): Promise<SearchHistory[]> {
    return await this.searchHistoryRepository.findAll();
  }

/**
 * A method that invokes a repository method updateSearchHistory(searchHistory) to update a SearchHistory 
 * @param updateSearchHistoryDto  An information of  SearchHistory 
 * @returns no returned data
 */ 
async updateSearchHistory(searchHistoryDto:UpdateSearchHistoryDto): Promise<void> {
    var   searchHistory= await this.searchHistoryRepository.findById(searchHistoryDto.id);
   if(searchHistory!=null){
    
    searchHistory =UpdateSearchHistoryDto.fromDTO(searchHistoryDto);
    await this.searchHistoryRepository.updateSearchHistory( searchHistory.id, searchHistory);
   }else{
   throw new Error("Not Found");
   }   
    
    this.logger.log('UpdateSearchHistoryUseCases execute', `SearchHistory ${ searchHistory.id} have been updated`);
  }
  
 
   



}