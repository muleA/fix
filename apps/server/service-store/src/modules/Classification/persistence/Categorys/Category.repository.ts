Category
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository,  } from 'typeorm';
import { Category } from '../../domain/categorys/category';
import { ICategoryRepository } from '../../domain/categorys/category.repository.interface';
import { CategoryEntity } from './category.entity';

//@Injectable()
@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> implements ICategoryRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates Category information in the database 
  */
  async updateCategory(id:string,category: Category): Promise<void> {
    const categoryEntity = this.toCategoryEntity(category);
    await this.update( {id: category.id}, categoryEntity);
  }
 /**
  * A method that inserts CategoryEntity  into  database 
  *
  */
  async insertCategory(category: Category): Promise<Category> {
    const categoryEntity = this.toCategoryEntity(category);
    const result = await this.insert(categoryEntity);
    console.log(result.generatedMaps);
    return  this.toCategory(result.generatedMaps[0] as CategoryEntity);   
  }
  /**
  * A method that fetches all Categorys from the database 
  *
  */
  async findAll(): Promise<Category[]> {
    const categorysEntity = await this.find();
    return categorysEntity.map((categoryEntity) => this.toCategory(categoryEntity));
  }
  /**
  * A method that fetches a specific Category by id  from the database 
  *@param  an Id of Category
  *@returns A Promise of Category
  */ 
  async findById(id: string): Promise<Category> {
    const categoryEntity = await this.findOneOrFail(id);
    return this.toCategory(categoryEntity);
  }
/**
  * A method that deletes a specific Category by id from the database
  *@param  an Id of Category
   */
  async deleteById(id: string): Promise<void> {
   await this.delete({ id: id });
  }
  /**
  *A method that copy CategoryEntity data  a  Category domain  
  *@param categoryEntity which compraises  Category information
  *@returns Category information
  */
private toCategory(categoryEntity: CategoryEntity): Category {
const category: Category = new Category();   
    category.id= categoryEntity.id;
    category.name= categoryEntity.name;
    category.description= categoryEntity.description;
    category.code= categoryEntity.code;
    category.parentId= categoryEntity.parentId;
    category.createdAt= categoryEntity.createdAt;
    category.updatedAt= categoryEntity.updatedAt;
     return category;
}
 /**
  *A method that copy Category data to a CategoryEntity   object 
  *@param category An category which compraises  Category information
  *@returns A Category which contain  Category information
  */
    
 private toCategoryEntity(category: Category): CategoryEntity {
   const categoryEntity: CategoryEntity = new CategoryEntity();    
    categoryEntity.id= category.id;
    categoryEntity.name= category.name;
    categoryEntity.description= category.description;
    categoryEntity.code= category.code;
    categoryEntity.parentId= category.parentId;
    categoryEntity.createdAt= category.createdAt;
    categoryEntity.updatedAt= category.updatedAt;
 return categoryEntity;
  }
 
}