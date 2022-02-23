import { ServiceEntry } from '../serviceCollections/ServiceEntry';
import { ServiceResource } from './ServiceResource';
export declare class ServiceCollection {
    constructor();
    id: string;
    name: string;
    description: string;
    code: string;
    serviceEntries: ServiceEntry[];
    supportedQualifications: string;
    version: number;
    procedure: string;
    isPublic: boolean;
    tags: string;
    resources: ServiceResource[];
    targetCustomers: string;
    isArchived: boolean;
    createdAt: Date;
    updatedAt: Date;
    addServiceEntry(createServiceEntry: ServiceEntry): Promise<void>;
    updateServiceEntry(serviceEntry: ServiceEntry): Promise<void>;
    removeServiceEntry(id: string): Promise<void>;
    updateServiceEntries(serviceEntries: ServiceEntry[]): Promise<void>;
    addServiceResource(createServiceResource: ServiceResource): Promise<void>;
    updateServiceResource(serviceResource: ServiceResource): Promise<void>;
    removeServiceResource(id: string): Promise<void>;
    updateResources(resources: ServiceResource[]): Promise<void>;
}
