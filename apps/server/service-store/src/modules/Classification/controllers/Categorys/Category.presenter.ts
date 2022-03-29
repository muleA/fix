import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../domain/categorys/category';
 
/**
*A class which contains proporties of Category that used to put data to be returned to client
*
*/
export class CategoryPresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
name: string;
  
@ApiProperty()
description: string;
  
@ApiProperty()
code: string;
  
@ApiProperty()
parentId: string;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  Category domain object Property value to  CategoryPresenter properties
*/
constructor(category: Category) {
  
this.id = category.id;  

  
this.name = category.name;  

  
this.description = category.description;  

  
this.code = category.code;  

  
this.parentId = category.parentId;  

  
this.createdAt = category.createdAt;  

  
this.updatedAt = category.updatedAt;  

  
    
  }
}