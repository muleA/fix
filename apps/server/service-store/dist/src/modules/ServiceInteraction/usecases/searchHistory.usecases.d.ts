import { SearchHistory } from '../domain/searchHistorys/searchHistory';
import { ISearchHistoryRepository } from '../domain/searchHistorys/searchHistory.repository.interface';
import { CreateSearchHistoryDto, UpdateSearchHistoryDto } from '../controllers/searchHistorys/searchHistory.dto';
export declare class SearchHistoryUseCases {
    private searchHistoryRepository;
    private searchHistorydomain;
    private readonly logger;
    constructor(searchHistoryRepository: ISearchHistoryRepository);
    createSearchHistory(searchHistoryDto: CreateSearchHistoryDto): Promise<SearchHistory>;
    deleteSearchHistory(id: string): Promise<void>;
    getSearchHistory(id: string): Promise<SearchHistory>;
    fetSearchHistorys(): Promise<SearchHistory[]>;
    updateSearchHistory(searchHistoryDto: UpdateSearchHistoryDto): Promise<void>;
}
