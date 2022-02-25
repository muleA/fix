import { Category } from './category';
export interface ICategoryRepository {
  insertCategory(category: Category): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category>; 
  updateCategory(id: string,category: Category): Promise<void>;
  deleteById(id: string): Promise<void>;
}