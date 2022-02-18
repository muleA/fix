import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { SearchHistory } from '../../domain/SearchHistorys/searchHistory';
   
/**
*A class which contains proporties of SearchHistory that used to receive paramamer values to be updated in the database
*/
export class UpdateSearchHistoryDto {
  
@ApiProperty()
id: string;
    
@ApiProperty()
serviceName: string;
    
@ApiProperty()
serviceId: string;
    
@ApiProperty()
userId: string;
    
@ApiProperty()
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  UpdateSearchHistoryDto object data to  SearchHistory domain object
*@returns SearchHistory domain object which contains SearchHistory  information
*/
static fromDTO(searchHistoryDto:UpdateSearchHistoryDto): SearchHistory
{
const searchHistory: SearchHistory = new SearchHistory();  
 
searchHistory.id=searchHistoryDto.id; 


 
searchHistory.serviceName=searchHistoryDto.serviceName; 


 
searchHistory.serviceId=searchHistoryDto.serviceId; 


 
searchHistory.userId=searchHistoryDto.userId; 


 
searchHistory.createdAt=searchHistoryDto.createdAt; 


 
searchHistory.updatedAt=searchHistoryDto.updatedAt; 


return searchHistory;
  }
}
/**
*A class wich contains proporties of SearchHistory that used to receive paramamer values to be saved to database
*
*/
export class CreateSearchHistoryDto {
     
@ApiProperty()
id: string;
    
@ApiProperty()
serviceName: string;
    
@ApiProperty()
serviceId: string;
    
@ApiProperty()
userId: string;
    
@ApiProperty()
createdAt: Date;
    
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  CreateSearchHistoryDto object data to  SearchHistory domain object
*@returns SearchHistory domain object which contains SearchHistory  information
*/    
static fromDTO(searchHistoryDto:CreateSearchHistoryDto): SearchHistory
{
const searchHistory: SearchHistory = new SearchHistory();  
 
searchHistory.id=searchHistoryDto.id; 
 
searchHistory.serviceName=searchHistoryDto.serviceName; 
 
searchHistory.serviceId=searchHistoryDto.serviceId; 
 
searchHistory.userId=searchHistoryDto.userId; 
 
searchHistory.createdAt=searchHistoryDto.createdAt; 
 
searchHistory.updatedAt=searchHistoryDto.updatedAt; 
     return searchHistory;
    }
}