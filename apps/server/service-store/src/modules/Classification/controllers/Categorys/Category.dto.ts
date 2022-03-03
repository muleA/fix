import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsUUID, IsNumberString, IsOptional, IsString } from 'class-validator';
import { Category } from '../../domain/categorys/category';
/**
*A class which contains proporties of Category that used to receive paramamer values to be updated in the database
*/
export class UpdateCategoryDto {
  // @ApiProperty() 
  // @IsNotEmpty()
  // @IsUUID() commented for testing only
  id: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  parentId: string;
  // @ApiProperty()
  // @IsOptional()
  // @IsUUID()
  // serviceId: string;
  @ApiProperty()
  @ApiProperty()
  @IsUUID()
  updatedBy: string;
  /**
*A method that mapes  UpdateCategoryDto object data to  Category domain object
*@returns Category domain object which contains Category  information
*/
  static fromDTO(categoryDto: UpdateCategoryDto): Category {
    const category: Category = new Category();
    category.id = categoryDto.id;
    category.name = categoryDto.name;
    category.description = categoryDto.description;
    category.code = categoryDto.code;
    category.parentId = categoryDto.parentId;
    // category.serviceId = categoryDto.serviceId;
    category.updatedBy = categoryDto.updatedBy;
    return category;
  }
}
/**
*A class wich contains proporties of Category that used to receive paramamer values to be saved to database
*
*/
export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  parentId: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID()
  // serviceId: string;
  // @ApiProperty() //commented until the user management works

  // @ApiProperty() 
  // @IsNotEmpty()
  // @IsUUID()// will un comment when we build the user management
  createdBy: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID() // will un comment when we build the user management
  updatedBy: string;
  /**
*A method that mapes  CreateCategoryDto object data to  Category domain object
*@returns Category domain object which contains Category  information
*/
  static fromDTO(categoryDto: CreateCategoryDto): Category {
    const category: Category = new Category();
    // category.id = categoryDto.id;
    category.name = categoryDto.name;
    category.description = categoryDto.description;
    category.code = categoryDto.code;
    category.parentId = categoryDto.parentId;
    // category.serviceId = categoryDto.serviceId;
    category.createdBy = categoryDto.createdBy;
    category.updatedBy = categoryDto.updatedBy;
    return category;
  }
}