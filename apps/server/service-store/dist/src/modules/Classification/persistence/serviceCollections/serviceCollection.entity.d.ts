import { ServiceResource } from "src/modules/Publication/domain/services/ServiceResource";
import { CommonEntity } from "src/modules/shared/CommonEntity";
import { ServiceEntryEntity } from "./ServiceEntry.entity";
export declare class ServiceCollectionEntity extends CommonEntity {
    id: string;
    name: string;
    description?: string;
    code: string;
    serviceEntries: ServiceEntryEntity[];
    supportedQualifications: string;
    version: number;
    procedure: string;
    isPublic: boolean;
    tags: string;
    resources: ServiceResource[];
    targetCustomers: string;
    isArchived: boolean;
}
