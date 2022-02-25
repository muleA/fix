import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Tags } from '../../domain/tags/tags';

/**
*A class which contains proporties of Tags that used to receive paramamer values to be updated in the database
*/
export class UpdateTagDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  /**
*A method that mapes  UpdateTagDto object data to  Tags domain object
*@returns Tags domain object which contains Tags  information
*/
  static fromDTO(tagDto: UpdateTagDto): Tags {
    const tag: Tags = new Tags();
    tag.id = tagDto.id;
    tag.name = tagDto.name;
    tag.description = tagDto.description;
    return tag;
  }
}
/**
*A class wich contains proporties of Tags that used to receive paramamer values to be saved to database
*
*/
export class CreateTagDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  /**
*A method that mapes  CreateTagDto object data to  Tags domain object
*@returns Tags domain object which contains Tags  information
*/
  static fromDTO(tagDto: CreateTagDto): Tags {
    const tag: Tags = new Tags();
    tag.id = tagDto.id;
    tag.name = tagDto.name;
    tag.description = tagDto.description;
    return tag;
  }
}