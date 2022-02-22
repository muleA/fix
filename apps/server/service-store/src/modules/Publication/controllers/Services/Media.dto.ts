import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsFQDN } from 'class-validator';
import { Media } from '../../domain/Medias/media';

/**
*A class which contains proporties of Media that used to receive paramamer values to be updated in the database
*/
export class UpdateMediaDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsFQDN()
  url: string;

  @ApiProperty()
  @IsString()
  caption: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  serviceId: string;

  /**
*A method that mapes  UpdateMediaDto object data to  Media domain object
*@returns Media domain object which contains Media  information
*/
  static fromDTO(mediaDto: UpdateMediaDto): Media {
    const media: Media = new Media();

    media.id = mediaDto.id;



    media.url = mediaDto.url;



    media.caption = mediaDto.caption;



    media.type = mediaDto.type;



    media.serviceId = mediaDto.serviceId;


    return media;
  }
}
/**
*A class wich contains proporties of Media that used to receive paramamer values to be saved to database
*
*/
export class CreateMediaDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsFQDN()
  url: string;

  @ApiProperty()
  @IsString()
  caption: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  serviceId: string;

  /**
*A method that mapes  CreateMediaDto object data to  Media domain object
*@returns Media domain object which contains Media  information
*/
  static fromDTO(mediaDto: CreateMediaDto): Media {
    const media: Media = new Media();

    media.id = mediaDto.id;

    media.url = mediaDto.url;

    media.caption = mediaDto.caption;

    media.type = mediaDto.type;

    media.serviceId = mediaDto.serviceId;
    return media;
  }
}