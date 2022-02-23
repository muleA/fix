import { CategoryPresenter } from './category.presenter';
import { CreateCategoryDto, UpdateCategoryDto } from '../categorys/category.dto';
import { CategoryUseCases } from '../../usecases/category.usecases';
export declare class CategorysController {
    private useCase;
    constructor(useCase: CategoryUseCases);
    getCategory(id: string): Promise<CategoryPresenter>;
    getCategorys(): Promise<CategoryPresenter[]>;
    updateCategory(updateCategoryDto: UpdateCategoryDto): Promise<string>;
    deleteCategory(id: string): Promise<string>;
    createCategory(createCategoryDto: CreateCategoryDto): Promise<CategoryPresenter>;
}
