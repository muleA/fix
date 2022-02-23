import { CommonEntity } from "src/modules/shared/CommonEntity";
export declare class ServiceRelationshipEntity extends CommonEntity {
    id: string;
    serviceId: string;
    relatedToServiceId: string;
    status: string;
}
