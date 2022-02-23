import { ServiceEntry } from './serviceEntry';
export interface IServiceEntryRepository {
    insertServiceEntry(serviceEntry: ServiceEntry): Promise<ServiceEntry>;
    findAll(): Promise<ServiceEntry[]>;
    findById(id: string): Promise<ServiceEntry>;
    updateServiceEntry(id: string, serviceEntry: ServiceEntry): Promise<void>;
    deleteById(id: string): Promise<void>;
}
