import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query, Param } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchHistoryPresenter } from './searchHistory.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateSearchHistoryDto, UpdateSearchHistoryDto } from '../searchHistorys/searchHistory.dto';
import { SearchHistoryUseCases } from '../../usecases/searchHistory.usecases';

@Controller('search-histories')
@ApiTags('search-histories')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(SearchHistoryPresenter)

export class SearchHistorysController {
/**
*A constructor that injects SearchHistoryUseCases
*/
constructor(private useCase: SearchHistoryUseCases) {}
/**
 * A method that fetchs a SearchHistory from the database by id
 * @param id An id of a SearchHistory. A SearchHistory with this id should exist in the database
 * @returns A SearchHistoryPresenter which contain  SearchHistory information
 * See the [definition of the SearchHistoryPresenter file]{@link SearchHistoryPresenter} to see a list of required properties
 */
@Get('get-search-history/:id')
@ApiResponseType(SearchHistoryPresenter, false)
async getSearchHistory(@Param('id') id: string) {
const searchHistory = await this.useCase.getSearchHistory(id);
return new SearchHistoryPresenter(searchHistory);
}
/**
 * A method that fetchs all SearchHistory from the database 
 * @returns A list of  SearchHistoryPresenter which contain  SearchHistory information
 * See the [definition of the SearchHistoryPresenter file]{@link SearchHistoryPresenter} to see a list of required properties
 */
@Get('get-search-histories')
@ApiResponseType(SearchHistoryPresenter, true)
async getSearchHistorys() {
const searchHistorys = await this.useCase.fetSearchHistorys();
return searchHistorys.map((searchHistory) => new SearchHistoryPresenter(searchHistory));
}

/**
 * A method that update a SearchHistory 
 * @param updateSearchHistoryDto  An information of  SearchHistory 
 * @returns A SearchHistoryPresenter which contain  SearchHistory information
 * See the [definition of the updateSearchHistoryDto file]{@link updateSearchHistoryDto} to see a list of required properties
 */ 
 @Put('update-search-history')
@ApiResponseType(SearchHistoryPresenter, true)
async updateSearchHistory(@Body() updateSearchHistoryDto: UpdateSearchHistoryDto) {
await this.useCase.updateSearchHistory(updateSearchHistoryDto);
return 'success';
}
/**
 * A method that delete a SearchHistory from the database by id
 * @param id An id of a SearchHistory. A SearchHistory with this id should exist in the database
 * @returns success which  informs the status of the success
*/
@Delete('delete-search-history')
@ApiResponseType(SearchHistoryPresenter, true)
async deleteSearchHistory(@Query() id: string) {
await this.useCase.deleteSearchHistory(id);
return 'success';
}

/**
 * A method that creates a SearchHistory 
 * @param createSearchHistoryDto  An information of  SearchHistory  that need to be saved
 * @returns A SearchHistoryPresenter which contain  created SearchHistory information
 * See the [definition of the CreateSearchHistoryDto file]{@link CreateSearchHistoryDto} to see a list of required properties
 */ 
@Post('create-search-history')
@ApiResponseType(SearchHistoryPresenter, true)
async createSearchHistory(@Body() createSearchHistoryDto: CreateSearchHistoryDto) {
const searchHistoryCreated = await this.useCase.createSearchHistory( createSearchHistoryDto);
return new SearchHistoryPresenter(searchHistoryCreated );
}
  

}