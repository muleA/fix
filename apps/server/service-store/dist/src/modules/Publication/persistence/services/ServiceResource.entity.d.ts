import { ServiceEntity } from "./service.entity";
import { CommonEntity } from "src/modules/shared/CommonEntity";
export declare class ServiceResourceEntity extends CommonEntity {
    id: string;
    service: ServiceEntity;
    attachmentUrl: string;
    content: string;
}
