import { DelegatedService } from './delegatedService';
export interface IDelegatedServiceRepository {
    insertDelegatedService(delegatedService: DelegatedService): Promise<DelegatedService>;
    findAll(): Promise<DelegatedService[]>;
    findById(id: string): Promise<DelegatedService>;
    updateDelegatedService(id: string, delegatedService: DelegatedService): Promise<void>;
    deleteById(id: string): Promise<void>;
}
