import { Body, Controller, Delete, Get,  Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagPresenter } from './tag.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateTagDto, UpdateTagDto } from '../tags/tag.dto';
import { TagUseCases } from '../../usecases/tag.usecases';
@Controller('tags')
@ApiTags('tags')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(TagPresenter)
export class TagsController {
/**
*A constructor that injects TagUseCases
*/
constructor(private useCase: TagUseCases) {}
/**
 * A method that fetchs a Tag from the database by id
 * @param id An id of a Tag. A Tag with this id should exist in the database
 * @returns A TagPresenter which contain  Tag information
 * See the [definition of the TagPresenter file]{@link TagPresenter} to see a list of required properties
 */
@Get('get-tag')
@ApiResponseType(TagPresenter, false)
async getTag(@Query() id: string) {
const tag = await this.useCase.getTag(id);
return new TagPresenter(tag);
}
/**
 * A method that fetchs all Tag from the database 
 * @returns A list of  TagPresenter which contain  Tag information
 * See the [definition of the TagPresenter file]{@link TagPresenter} to see a list of required properties
 */
@Get('get-tags')
@ApiResponseType(TagPresenter, true)
async getTags() {
const tags = await this.useCase.fetTags();
return tags.map((tag) => new TagPresenter(tag));
}
/**
 * A method that update a Tag 
 * @param updateTagDto  An information of  Tag 
 * @returns A TagPresenter which contain  Tag information
 * See the [definition of the updateTagDto file]{@link updateTagDto} to see a list of required properties
 */ 
 @Put('update-tag')
@ApiResponseType(TagPresenter, true)
async updateTag(@Body() updateTagDto: UpdateTagDto) {
await this.useCase.updateTag(updateTagDto);
return 'success';
}
/**
 * A method that delete a Tag from the database by id
 * @param id An id of a Tag. A Tag with this id should exist in the database
 * @returns success which  informs the status of the success
*/
@Delete('delete-tag')
@ApiResponseType(TagPresenter, true)
async deleteTag(@Query() id: string) {
await this.useCase.deleteTag(id);
return 'success';
}
/**
 * A method that creates a Tag 
 * @param createTagDto  An information of  Tag  that need to be saved
 * @returns A TagPresenter which contain  created Tag information
 * See the [definition of the CreateTagDto file]{@link CreateTagDto} to see a list of required properties
 */ 
@Post('create-tag')
@ApiResponseType(TagPresenter, true)
async createTag(@Body() createTagDto: CreateTagDto) {
const tagCreated = await this.useCase.createTag( createTagDto);
return new TagPresenter(tagCreated );
}
}