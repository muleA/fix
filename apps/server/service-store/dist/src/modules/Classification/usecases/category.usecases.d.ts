import { Category } from '../domain/categorys/category';
import { ICategoryRepository } from '../domain/categorys/category.repository.interface';
import { CreateCategoryDto, UpdateCategoryDto } from '../controllers/categorys/category.dto';
export declare class CategoryUseCases {
    private categoryRepository;
    private categorydomain;
    private readonly logger;
    constructor(categoryRepository: ICategoryRepository);
    createCategory(categoryDto: CreateCategoryDto): Promise<Category>;
    deleteCategory(id: string): Promise<void>;
    getCategory(id: string): Promise<Category>;
    fetCategorys(): Promise<Category[]>;
    updateCategory(categoryDto: UpdateCategoryDto): Promise<void>;
}
