import { SearchHistory } from '../../domain/SearchHistorys/searchHistory';
export declare class SearchHistoryPresenter {
    id: string;
    serviceName: string;
    serviceId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(searchHistory: SearchHistory);
}
