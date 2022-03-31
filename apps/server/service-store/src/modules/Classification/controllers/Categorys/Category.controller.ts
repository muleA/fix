import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query, Param } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryPresenter } from './category.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateCategoryDto, UpdateCategoryDto } from '../categorys/category.dto';
import { CategoryUseCases } from '../../usecases/category.usecases';
@Controller('categories')
@ApiTags('categories')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(CategoryPresenter)
export class CategorysController {
    /**
    *A constructor that injects CategoryUseCases
    */

    defaultUserName: string = "95d50138-333e-4451-a51d-a6568d0561bd";
    constructor(private useCase: CategoryUseCases) { }
    /**
     * A method that fetchs a Category from the database by id
     * @param id An id of a Category. A Category with this id should exist in the database
     * @returns A CategoryPresenter which contain  Category information
     * See the [definition of the CategoryPresenter file]{@link CategoryPresenter} to see a list of required properties
     */
    @Get('get-category/:id')
    @ApiResponseType(CategoryPresenter, false)
    async getCategory(@Param('id') id: string) {
        const category = await this.useCase.getCategory(id);
        return new CategoryPresenter(category);
    }
    /**
     * A method that fetchs all Category from the database 
     * @returns A list of  CategoryPresenter which contain  Category information
     * See the [definition of the CategoryPresenter file]{@link CategoryPresenter} to see a list of required properties
     */
    @Get('get-categories')
    @ApiResponseType(CategoryPresenter, true)
    async getCategorys() {
        const categories = await this.useCase.fetCategorys();
        return categories.map((category) => new CategoryPresenter(category));
    }
    /**
     * A method that update a Category 
     * @param updateCategoryDto  An information of  Category 
     * @returns A CategoryPresenter which contain  Category information
     * See the [definition of the updateCategoryDto file]{@link updateCategoryDto} to see a list of required properties
     */
    @Put('update-category/:id')
    @ApiResponseType(CategoryPresenter, true)
    async updateCategory(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        await this.useCase.updateCategory(updateCategoryDto);
        return 'success';
    }
    /**
     * A method that delete a Category from the database by id
     * @param id An id of a Category. A Category with this id should exist in the database
     * @returns success which  informs the status of the success
    */
    @Delete('delete-category/:id')
    @ApiResponseType(CategoryPresenter, true)
    async deleteCategory(@Param('id') id: string) {
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
        createCategoryDto.createdBy = this.defaultUserName;
        createCategoryDto.updatedBy = this.defaultUserName;
        const categoryCreated = await this.useCase.createCategory(createCategoryDto);
        // return new CategoryPresenter(categoryCreated);
        return categoryCreated;
    }
}