import { CommonEntity } from "src/modules/shared/CommonEntity";
export declare class RatingEntity extends CommonEntity {
    id: string;
    serviceId: string;
    userId: string;
    score: number;
}
