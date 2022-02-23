import { SearchHistory } from './searchHistory';
export interface ISearchHistoryRepository {
    insertSearchHistory(searchHistory: SearchHistory): Promise<SearchHistory>;
    findAll(): Promise<SearchHistory[]>;
    findById(id: string): Promise<SearchHistory>;
    updateSearchHistory(id: string, searchHistory: SearchHistory): Promise<void>;
    deleteById(id: string): Promise<void>;
}
