import { Category } from '../../domain/Categorys/category';
export declare class UpdateCategoryDto {
    id: string;
    name: string;
    description: string;
    code: string;
    parentId: string;
    static fromDTO(categoryDto: UpdateCategoryDto): Category;
}
export declare class CreateCategoryDto {
    id: string;
    name: string;
    description: string;
    code: string;
    parentId: string;
    static fromDTO(categoryDto: CreateCategoryDto): Category;
}
