import { Category } from '../../domain/Categorys/category';
export declare class UpdateCategoryDto {
    id: string;
    name: string;
    description: string;
    code: string;
    parentId: string;
    createdAt: Date;
    updatedAt: Date;
    static fromDTO(categoryDto: UpdateCategoryDto): Category;
}
export declare class CreateCategoryDto {
    id: string;
    name: string;
    description: string;
    code: string;
    parentId: string;
    createdAt: Date;
    updatedAt: Date;
    static fromDTO(categoryDto: CreateCategoryDto): Category;
}
