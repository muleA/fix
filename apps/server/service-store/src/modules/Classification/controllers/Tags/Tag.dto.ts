import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Tag } from '../../domain/Tags/tag';
   
/**
*A class which contains proporties of Tag that used to receive paramamer values to be updated in the database
*/
export class UpdateTagDto {
  
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
*A method that mapes  UpdateTagDto object data to  Tag domain object
*@returns Tag domain object which contains Tag  information
*/
static fromDTO(tagDto:UpdateTagDto): Tag
{
const tag: Tag = new Tag();  
 
tag.id=tagDto.id; 


 
tag.name=tagDto.name; 


 
tag.description=tagDto.description; 


 
tag.createdAt=tagDto.createdAt; 


 
tag.updatedAt=tagDto.updatedAt; 


return tag;
  }
}
/**
*A class wich contains proporties of Tag that used to receive paramamer values to be saved to database
*
*/
export class CreateTagDto {
     
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
*A method that mapes  CreateTagDto object data to  Tag domain object
*@returns Tag domain object which contains Tag  information
*/    
static fromDTO(tagDto:CreateTagDto): Tag
{
const tag: Tag = new Tag();  
 
tag.id=tagDto.id; 
 
tag.name=tagDto.name; 
 
tag.description=tagDto.description; 
 
tag.createdAt=tagDto.createdAt; 
 
tag.updatedAt=tagDto.updatedAt; 
     return tag;
    }
}