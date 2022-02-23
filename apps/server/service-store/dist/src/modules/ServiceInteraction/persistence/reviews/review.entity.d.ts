import { CommonEntity } from "src/modules/shared/CommonEntity";
export declare class ReviewEntity extends CommonEntity {
    id: string;
    title: string;
    body: string;
    serviceId: string;
    userId: string;
    status: string;
    likes: number;
}
