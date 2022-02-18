import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { Category } from '../domain/categorys/category';
import { ICategoryRepository } from '../domain/categorys/category.repository.interface';
import { CategoryRepository } from '../persistence/categorys/category.repository';
import { CreateCategoryDto, UpdateCategoryDto } from '../controllers/categorys/category.dto';
@Injectable()
export class CategoryUseCases {
private categorydomain=new Category();
  private readonly logger = new LoggerService('CategoryService');
  /**
  * A constructor which injects a repository class that used to manage record in the database
  */
  constructor(@InjectRepository(CategoryRepository)
  private categoryRepository: ICategoryRepository) { }

/**
 * A method that calls the repository insert method to save  Category to databse
 * @param createCategoryDto  An information of  Category  that need to be saved
 * @returns Promise<Category which contain  created Category information
 * See the [definition of the CreateCategoryDto file]{@link CreateCategoryDto} to see a list of required properties
 */
  async createCategory( categoryDto:CreateCategoryDto): Promise<Category> {
    var category = new Category();
    category =CreateCategoryDto.fromDTO(categoryDto);  
    const result = await this.categoryRepository.insertCategory(category);
    this.logger.log('CreateCategoryUseCases execute', 'New category have been inserted');
    return result;
  }
/**
 * A method that invoke a repository delete method  to  delete a Category from the database by id
 * @param id An id of a Category. A Category with this id should exist in the database
 * @returns void 
*/
  async deleteCategory(id: string): Promise<void> {
    await this.categoryRepository.deleteById(id);
    this.logger.log('DeleteCategoryUseCases execute', `Category ${id} have been deleted`);
  }

/**
 * A method that invoke a repository method findById() to fetchs a Category from the database by id
 * @param id An id of a Category. A Category with this id should exist in the database
 * @returns A Promise which contain a Specific   Category information
 * See the [definition of the Category file]{@link Category} to see a list of required properties
 */
  async getCategory(id: string): Promise<Category> {
    return await this.categoryRepository.findById(id);
  }

/**
 * A method that invokes a method findAll() of  repository method to fetchs all Category from the database 
 * @returns Promise with list of  Category which contain  Category information
 */
  async fetCategorys(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }

/**
 * A method that invokes a repository method updateCategory(category) to update a Category 
 * @param updateCategoryDto  An information of  Category 
 * @returns no returned data
 */ 
async updateCategory(categoryDto:UpdateCategoryDto): Promise<void> {
    var  var category= await this.categoryRepository.findById(categoryDto.id);
   if(category!=null){
    
    category =UpdateCategoryDto.fromDTO(categoryDto);
    await this.categoryRepository.updateCategory( category.id, category);
   }else{
   threw new Error("Not Found");
   }   
    
    this.logger.log('UpdateCategoryUseCases execute', `Category ${ category.id} have been updated`);
  }
  
 
   



}