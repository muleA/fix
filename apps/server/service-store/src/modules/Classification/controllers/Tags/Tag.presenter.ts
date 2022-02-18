import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '../../domain/Tags/tag';
 
/**
*A class which contains proporties of Tag that used to put data to be returned to client
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
*A constructor which copy  Tag domain object Property value to  TagPresenter properties
*/
constructor(tag: Tag) {
  
this.id = tag.id;  

  
this.name = tag.name;  

  
this.description = tag.description;  

  
this.createdAt = tag.createdAt;  

  
this.updatedAt = tag.updatedAt;  

  
    
  }
}