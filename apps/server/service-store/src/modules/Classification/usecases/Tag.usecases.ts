import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { Tag } from '../domain/tags/tag';
import { ITagRepository } from '../domain/tags/tag.repository.interface';
import { TagRepository } from '../persistence/tags/tag.repository';
import { CreateTagDto, UpdateTagDto } from '../controllers/tags/tag.dto';
@Injectable()
export class TagUseCases {
private tagdomain=new Tag();
  private readonly logger = new LoggerService('TagService');
  /**
  * A constructor which injects a repository class that used to manage record in the database
  */
  constructor(@InjectRepository(TagRepository)
  private tagRepository: ITagRepository) { }

/**
 * A method that calls the repository insert method to save  Tag to databse
 * @param createTagDto  An information of  Tag  that need to be saved
 * @returns Promise<Tag which contain  created Tag information
 * See the [definition of the CreateTagDto file]{@link CreateTagDto} to see a list of required properties
 */
  async createTag( tagDto:CreateTagDto): Promise<Tag> {
    var tag = new Tag();
    tag =CreateTagDto.fromDTO(tagDto);  
    const result = await this.tagRepository.insertTag(tag);
    this.logger.log('CreateTagUseCases execute', 'New tag have been inserted');
    return result;
  }
/**
 * A method that invoke a repository delete method  to  delete a Tag from the database by id
 * @param id An id of a Tag. A Tag with this id should exist in the database
 * @returns void 
*/
  async deleteTag(id: string): Promise<void> {
    await this.tagRepository.deleteById(id);
    this.logger.log('DeleteTagUseCases execute', `Tag ${id} have been deleted`);
  }

/**
 * A method that invoke a repository method findById() to fetchs a Tag from the database by id
 * @param id An id of a Tag. A Tag with this id should exist in the database
 * @returns A Promise which contain a Specific   Tag information
 * See the [definition of the Tag file]{@link Tag} to see a list of required properties
 */
  async getTag(id: string): Promise<Tag> {
    return await this.tagRepository.findById(id);
  }

/**
 * A method that invokes a method findAll() of  repository method to fetchs all Tag from the database 
 * @returns Promise with list of  Tag which contain  Tag information
 */
  async fetTags(): Promise<Tag[]> {
    return await this.tagRepository.findAll();
  }

/**
 * A method that invokes a repository method updateTag(tag) to update a Tag 
 * @param updateTagDto  An information of  Tag 
 * @returns no returned data
 */ 
async updateTag(tagDto:UpdateTagDto): Promise<void> {
    var  var tag= await this.tagRepository.findById(tagDto.id);
   if(tag!=null){
    
    tag =UpdateTagDto.fromDTO(tagDto);
    await this.tagRepository.updateTag( tag.id, tag);
   }else{
   threw new Error("Not Found");
   }   
    
    this.logger.log('UpdateTagUseCases execute', `Tag ${ tag.id} have been updated`);
  }
  
 
   



}