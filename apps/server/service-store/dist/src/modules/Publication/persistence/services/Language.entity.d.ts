import { CommonEntity } from "src/modules/shared/CommonEntity";
import { ServiceEntity } from "./service.entity";
export declare class LanguageEntity extends CommonEntity {
    id: string;
    service: ServiceEntity;
    name: string;
    code: string;
}
