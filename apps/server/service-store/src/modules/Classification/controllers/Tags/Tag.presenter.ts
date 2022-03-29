import { ApiProperty } from '@nestjs/swagger';
import { Tags } from '../../domain/tags/tags';
/**
*A class which contains proporties of Tags that used to put data to be returned to client
*
*/
export class TagPresenter {
@ApiProperty()
id: string;
@ApiProperty()
name: string;
@ApiProperty()
description: string;
@ApiProperty()
createdAt: Date;
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  Tags domain object Property value to  TagPresenter properties
*/
constructor(tag: Tags) {
this.id = tag.id;  
this.name = tag.name;  
this.description = tag.description;  
this.createdAt = tag.createdAt;  
this.updatedAt = tag.updatedAt;  
  }
}