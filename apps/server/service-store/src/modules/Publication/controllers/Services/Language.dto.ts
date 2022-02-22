import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsUUID, IsString } from 'class-validator';
import { Language } from '../../domain/services/Language';


/**
*A class which contains proporties of Language that used to receive paramamer values to be updated in the database
*/
export class UpdateLanguageDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  code: string;


  /**
*A method that mapes  UpdateLanguageDto object data to  Language domain object
*@returns Language domain object which contains Language  information
*/
  static fromDTO(languageDto: UpdateLanguageDto): Language {
    const language: Language = new Language();

    language.id = languageDto.id;



    language.serviceId = languageDto.serviceId;



    language.name = languageDto.name;



    language.code = languageDto.code;


    return language;
  }
}
/**
*A class wich contains proporties of Language that used to receive paramamer values to be saved to database
*
*/
export class CreateLanguageDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  code: string;


  /**
*A method that mapes  CreateLanguageDto object data to  Language domain object
*@returns Language domain object which contains Language  information
*/
  static fromDTO(languageDto: CreateLanguageDto): Language {
    const language: Language = new Language();

    language.id = languageDto.id;

    language.serviceId = languageDto.serviceId;

    language.name = languageDto.name;

    language.code = languageDto.code;
    return language;
  }
}