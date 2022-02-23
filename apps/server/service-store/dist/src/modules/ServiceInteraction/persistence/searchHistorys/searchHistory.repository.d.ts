import { Repository } from 'typeorm';
import { SearchHistory } from '../../domain/searchHistorys/searchHistory';
import { ISearchHistoryRepository } from '../../domain/searchHistorys/searchHistory.repository.interface';
import { SearchHistoryEntity } from './searchHistory.entity';
export declare class SearchHistoryRepository extends Repository<SearchHistoryEntity> implements ISearchHistoryRepository {
    constructor();
    updateSearchHistory(id: string, searchHistory: SearchHistory): Promise<void>;
    insertSearchHistory(searchHistory: SearchHistory): Promise<SearchHistory>;
    findAll(): Promise<SearchHistory[]>;
    findById(id: string): Promise<SearchHistory>;
    deleteById(id: string): Promise<void>;
    private toSearchHistory;
    private toSearchHistoryEntity;
}
