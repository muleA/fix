import { ServiceEntity } from "./service.entity";
import { CommonEntity } from "src/modules/shared/CommonEntity";
export declare class ServiceFeeEntity extends CommonEntity {
    id: string;
    service: ServiceEntity;
    fee: number;
    currency: string;
    description?: string;
}
