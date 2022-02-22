import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryPresenter } from './category.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateCategoryDto, UpdateCategoryDto } from '../categorys/category.dto';
import { CategoryUseCases } from '../../usecases/category.usecases';

@Controller('categorys')
@ApiTags('categorys')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(CategoryPresenter)

export class CategorysController {
/**
*A constructor that injects CategoryUseCases
*/
constructor(private useCase: CategoryUseCases) {}
/**
 * A method that fetchs a Category from the database by id
 * @param id An id of a Category. A Category with this id should exist in the database
 * @returns A CategoryPresenter which contain  Category information
 * See the [definition of the CategoryPresenter file]{@link CategoryPresenter} to see a list of required properties
 */
@Get('get-category')
@ApiResponseType(CategoryPresenter, false)
async getCategory(@Query() id: string) {
const category = await this.useCase.getCategory(id);
return new CategoryPresenter(category);
}
/**
 * A method that fetchs all Category from the database 
 * @returns A list of  CategoryPresenter which contain  Category information
 * See the [definition of the CategoryPresenter file]{@link CategoryPresenter} to see a list of required properties
 */
@Get('get-categorys')
@ApiResponseType(CategoryPresenter, true)
async getCategorys() {
const categorys = await this.useCase.fetCategorys();
return categorys.map((category) => new CategoryPresenter(category));
}

/**
 * A method that update a Category 
 * @param updateCategoryDto  An information of  Category 
 * @returns A CategoryPresenter which contain  Category information
 * See the [definition of the updateCategoryDto file]{@link updateCategoryDto} to see a list of required properties
 */ 
 @Put('update-category')
@ApiResponseType(CategoryPresenter, true)
async updateCategory(@Body() updateCategoryDto: UpdateCategoryDto) {
await this.useCase.updateCategory(updateCategoryDto);
return 'success';
}
/**
 * A method that delete a Category from the database by id
 * @param id An id of a Category. A Category with this id should exist in the database
 * @returns success which  informs the status of the success
*/
@Delete('delete-category')
@ApiResponseType(CategoryPresenter, true)
async deleteCategory(@Query() id: string) {
await this.useCase.deleteCategory(id);
return 'success';
}

/**
 * A method that creates a Category 
 * @param createCategoryDto  An information of  Category  that need to be saved
 * @returns A CategoryPresenter which contain  created Category information
 * See the [definition of the CreateCategoryDto file]{@link CreateCategoryDto} to see a list of required properties
 */ 
@Post('create-category')
@ApiResponseType(CategoryPresenter, true)
async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
const categoryCreated = await this.useCase.createCategory( createCategoryDto);
return new CategoryPresenter(categoryCreated );
}
  

}