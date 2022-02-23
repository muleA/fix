import { SearchHistoryPresenter } from './searchHistory.presenter';
import { CreateSearchHistoryDto, UpdateSearchHistoryDto } from '../searchHistorys/searchHistory.dto';
import { SearchHistoryUseCases } from '../../usecases/searchHistory.usecases';
export declare class SearchHistorysController {
    private useCase;
    constructor(useCase: SearchHistoryUseCases);
    getSearchHistory(id: string): Promise<SearchHistoryPresenter>;
    getSearchHistorys(): Promise<SearchHistoryPresenter[]>;
    updateSearchHistory(updateSearchHistoryDto: UpdateSearchHistoryDto): Promise<string>;
    deleteSearchHistory(id: string): Promise<string>;
    createSearchHistory(createSearchHistoryDto: CreateSearchHistoryDto): Promise<SearchHistoryPresenter>;
}
