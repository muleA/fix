import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';
import { Category } from '../../domain/Categorys/category';
   
/**
*A class which contains proporties of Category that used to receive paramamer values to be updated in the database
*/
export class UpdateCategoryDto {
@ApiProperty()
@IsNumberString()
id: string;   
@ApiProperty()
@IsString()
@IsNotEmpty()
name: string;  
@ApiProperty()
@IsOptional()
@IsString()
description: string;  
@ApiProperty()
@IsString()
@IsNotEmpty()
code: string;  
@ApiProperty()
@IsString()
@IsNotEmpty()
parentId: string;  
@ApiProperty()
@IsDate()
@IsNotEmpty()
createdAt: Date;   
@ApiProperty()
updatedAt: Date;
  /**
*A method that mapes  UpdateCategoryDto object data to  Category domain object
*@returns Category domain object which contains Category  information
*/
static fromDTO(categoryDto:UpdateCategoryDto): Category
{
const category: Category = new Category();  
 
category.id=categoryDto.id; 


 
category.name=categoryDto.name; 


 
category.description=categoryDto.description; 


 
category.code=categoryDto.code; 


 
category.parentId=categoryDto.parentId; 


 
category.createdAt=categoryDto.createdAt; 


 
category.updatedAt=categoryDto.updatedAt; 


return category;
  }
}
/**
*A class wich contains proporties of Category that used to receive paramamer values to be saved to database
*
*/
export class CreateCategoryDto {    
@ApiProperty()
@IsNumberString()
id: string;
@ApiProperty()
@IsString()
@IsNotEmpty()
name: string;   
@ApiProperty()
@IsString()
@IsOptional()
description: string;   
@ApiProperty()
@IsString()
@IsNotEmpty()
code: string;   
@ApiProperty()
@IsString()
@IsNotEmpty()
parentId: string;   
@ApiProperty()
@IsDate()
@IsNotEmpty()
createdAt: Date;   
@ApiProperty()
@IsDate()
@IsNotEmpty()
updatedAt: Date;
  /**
*A method that mapes  CreateCategoryDto object data to  Category domain object
*@returns Category domain object which contains Category  information
*/    
static fromDTO(categoryDto:CreateCategoryDto): Category
{
const category: Category = new Category();  
 
category.id=categoryDto.id; 
 
category.name=categoryDto.name; 
 
category.description=categoryDto.description; 
 
category.code=categoryDto.code; 
 
category.parentId=categoryDto.parentId; 
 
category.createdAt=categoryDto.createdAt; 
 
category.updatedAt=categoryDto.updatedAt; 
     return category;
    }
}