import { ServiceEntity } from "./service.entity";
import { CommonEntity } from "src/modules/shared/CommonEntity";
export declare class ProcessingTimeEntity extends CommonEntity {
    id: string;
    service: ServiceEntity;
    time: number;
    currency: string;
    description: string;
}
