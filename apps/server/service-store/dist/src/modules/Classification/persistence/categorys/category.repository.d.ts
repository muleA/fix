import { Repository } from 'typeorm';
import { Category } from '../../domain/categorys/category';
import { ICategoryRepository } from '../../domain/categorys/category.repository.interface';
import { CategoryEntity } from './category.entity';
export declare class CategoryRepository extends Repository<CategoryEntity> implements ICategoryRepository {
    constructor();
    updateCategory(id: string, category: Category): Promise<void>;
    insertCategory(category: Category): Promise<Category>;
    findAll(): Promise<Category[]>;
    findById(id: string): Promise<Category>;
    deleteById(id: string): Promise<void>;
    private toCategory;
    private toCategoryEntity;
}
