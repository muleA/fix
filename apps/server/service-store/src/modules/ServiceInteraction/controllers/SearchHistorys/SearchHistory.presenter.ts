import { ApiProperty } from '@nestjs/swagger';
import { SearchHistory } from '../../domain/SearchHistorys/searchHistory';
/**
*A class which contains proporties of SearchHistory that used to put data to be returned to client
*/
export class SearchHistoryPresenter {
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
*A constructor which copy  SearchHistory domain object Property value to  SearchHistoryPresenter properties
*/
constructor(searchHistory: SearchHistory) {
this.id = searchHistory.id;  
this.serviceName = searchHistory.serviceName;  
this.serviceId = searchHistory.serviceId;  
this.userId = searchHistory.userId;  
this.createdAt = searchHistory.createdAt;  
this.updatedAt = searchHistory.updatedAt;  
  }
}