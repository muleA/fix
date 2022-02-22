Tag
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository,  } from 'typeorm';
import { Tag } from '../../domain/tags/tag';
import { ITagRepository } from '../../domain/tags/tag.repository.interface';
import { TagEntity } from './tag.entity';

//@Injectable()
@EntityRepository(TagEntity)
export class TagRepository extends Repository<TagEntity> implements ITagRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates Tag information in the database 
  */
  async updateTag(id:string,tag: Tag): Promise<void> {
    const tagEntity = this.toTagEntity(tag);
    await this.update( {id: tag.id}, tagEntity);
  }
 /**
  * A method that inserts TagEntity  into  database 
  *
  */
  async insertTag(tag: Tag): Promise<Tag> {
    const tagEntity = this.toTagEntity(tag);
    const result = await this.insert(tagEntity);
    console.log(result.generatedMaps);
    return  this.toTag(result.generatedMaps[0] as TagEntity);   
  }
  /**
  * A method that fetches all Tags from the database 
  *
  */
  async findAll(): Promise<Tag[]> {
    const tagsEntity = await this.find();
    return tagsEntity.map((tagEntity) => this.toTag(tagEntity));
  }
  /**
  * A method that fetches a specific Tag by id  from the database 
  *@param  an Id of Tag
  *@returns A Promise of Tag
  */ 
  async findById(id: string): Promise<Tag> {
    const tagEntity = await this.findOneOrFail(id);
    return this.toTag(tagEntity);
  }
/**
  * A method that deletes a specific Tag by id from the database
  *@param  an Id of Tag
   */
  async deleteById(id: string): Promise<void> {
   await this.delete({ id: id });
  }
  /**
  *A method that copy TagEntity data  a  Tag domain  
  *@param tagEntity which compraises  Tag information
  *@returns Tag information
  */
private toTag(tagEntity: TagEntity): Tag {
const tag: Tag = new Tag();   
    tag.id= tagEntity.id;
    tag.name= tagEntity.name;
    tag.description= tagEntity.description;
    tag.createdAt= tagEntity.createdAt;
    tag.updatedAt= tagEntity.updatedAt;
     return tag;
}
 /**
  *A method that copy Tag data to a TagEntity   object 
  *@param tag An tag which compraises  Tag information
  *@returns A Tag which contain  Tag information
  */
    
 private toTagEntity(tag: Tag): TagEntity {
   const tagEntity: TagEntity = new TagEntity();    
    tagEntity.id= tag.id;
    tagEntity.name= tag.name;
    tagEntity.description= tag.description;
    tagEntity.createdAt= tag.createdAt;
    tagEntity.updatedAt= tag.updatedAt;
 return tagEntity;
  }
 
}