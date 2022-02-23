import { SearchHistory } from '../../domain/SearchHistorys/searchHistory';
export declare class UpdateSearchHistoryDto {
    id: string;
    serviceName: string;
    serviceId: string;
    userId: string;
    static fromDTO(searchHistoryDto: UpdateSearchHistoryDto): SearchHistory;
}
export declare class CreateSearchHistoryDto {
    id: string;
    serviceName: string;
    serviceId: string;
    userId: string;
    static fromDTO(searchHistoryDto: CreateSearchHistoryDto): SearchHistory;
}
