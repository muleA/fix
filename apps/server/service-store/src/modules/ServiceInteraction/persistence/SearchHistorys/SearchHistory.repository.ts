import { EntityRepository, Repository,  } from 'typeorm';
import { SearchHistory } from '../../domain/searchHistorys/searchHistory';
import { ISearchHistoryRepository } from '../../domain/searchHistorys/searchHistory.repository.interface';
import { SearchHistoryEntity } from './searchHistory.entity';
//@Injectable()
@EntityRepository(SearchHistoryEntity)
export class SearchHistoryRepository extends Repository<SearchHistoryEntity> implements ISearchHistoryRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates SearchHistory information in the database 
  */
  async updateSearchHistory(id:string,searchHistory: SearchHistory): Promise<void> {
    const searchHistoryEntity = this.toSearchHistoryEntity(searchHistory);
    await this.update( {id: searchHistory.id}, searchHistoryEntity);
  }
 /**
  * A method that inserts SearchHistoryEntity  into  database 
  *
  */
  async insertSearchHistory(searchHistory: SearchHistory): Promise<SearchHistory> {
    const searchHistoryEntity = this.toSearchHistoryEntity(searchHistory);
    const result = await this.insert(searchHistoryEntity);
    console.log(result.generatedMaps);
    return  this.toSearchHistory(result.generatedMaps[0] as SearchHistoryEntity);   
  }
  /**
  * A method that fetches all SearchHistorys from the database 
  *
  */
  async findAll(): Promise<SearchHistory[]> {
    const searchHistorysEntity = await this.find();
    return searchHistorysEntity.map((searchHistoryEntity) => this.toSearchHistory(searchHistoryEntity));
  }
  /**
  * A method that fetches a specific SearchHistory by id  from the database 
  *@param  an Id of SearchHistory
  *@returns A Promise of SearchHistory
  */ 
  async findById(id: string): Promise<SearchHistory> {
    const searchHistoryEntity = await this.findOneOrFail(id);
    return this.toSearchHistory(searchHistoryEntity);
  }
/**
  * A method that deletes a specific SearchHistory by id from the database
  *@param  an Id of SearchHistory
   */
  async deleteById(id: string): Promise<void> {
   await this.delete({ id: id });
  }
  /**
  *A method that copy SearchHistoryEntity data  a  SearchHistory domain  
  *@param searchHistoryEntity which compraises  SearchHistory information
  *@returns SearchHistory information
  */
private toSearchHistory(searchHistoryEntity: SearchHistoryEntity): SearchHistory {
const searchHistory: SearchHistory = new SearchHistory();   
    searchHistory.id= searchHistoryEntity.id;
    searchHistory.serviceName= searchHistoryEntity.serviceName;
    searchHistory.serviceId= searchHistoryEntity.serviceId;
    searchHistory.userId= searchHistoryEntity.userId;
    searchHistory.createdAt= searchHistoryEntity.createdAt;
    searchHistory.updatedAt= searchHistoryEntity.updatedAt;
     return searchHistory;
}
 /**
  *A method that copy SearchHistory data to a SearchHistoryEntity   object 
  *@param searchHistory An searchHistory which compraises  SearchHistory information
  *@returns A SearchHistory which contain  SearchHistory information
  */
 private toSearchHistoryEntity(searchHistory: SearchHistory): SearchHistoryEntity {
   const searchHistoryEntity: SearchHistoryEntity = new SearchHistoryEntity();    
    searchHistoryEntity.id= searchHistory.id;
    searchHistoryEntity.serviceName= searchHistory.serviceName;
    searchHistoryEntity.serviceId= searchHistory.serviceId;
    searchHistoryEntity.userId= searchHistory.userId;
    searchHistoryEntity.createdAt= searchHistory.createdAt;
    searchHistoryEntity.updatedAt= searchHistory.updatedAt;
 return searchHistoryEntity;
  }
}