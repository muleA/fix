import { ISearchHistoryRepository } from '../../domain/searchHistorys/searchHistory.repository.interface';
export class SearchHistory {
    constructor() { }
    id: string;
    serviceName: string;
    serviceId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}