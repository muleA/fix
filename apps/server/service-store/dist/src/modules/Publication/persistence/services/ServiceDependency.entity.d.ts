import { CommonEntity } from "src/modules/shared/CommonEntity";
import { ServiceEntity } from "./service.entity";
export declare class ServiceDependencyEntity extends CommonEntity {
    id: string;
    service: ServiceEntity;
    dependsOn: string;
    type: string;
}
