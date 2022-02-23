import { Category } from '../../domain/Categorys/category';
export declare class CategoryPresenter {
    id: string;
    name: string;
    description: string;
    code: string;
    parentId: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(category: Category);
}
