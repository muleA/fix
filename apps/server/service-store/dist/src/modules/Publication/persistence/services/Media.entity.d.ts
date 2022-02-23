import { CommonEntity } from "src/modules/shared/CommonEntity";
import { ServiceEntity } from "./service.entity";
export declare class MediaEntity extends CommonEntity {
    id: string;
    url: string;
    caption: string;
    type: string;
    service: ServiceEntity;
}
