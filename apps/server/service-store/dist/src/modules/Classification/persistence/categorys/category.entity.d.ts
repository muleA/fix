import { CommonEntity } from "src/modules/shared/CommonEntity";
export declare class CategoryEntity extends CommonEntity {
    id: string;
    name: string;
    description: string;
    code: string;
    parent: CategoryEntity;
}
