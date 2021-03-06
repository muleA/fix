import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsUUID, IsString, IsFQDN } from 'class-validator';
import { Media } from '../../domain/services/Media';


/**
*A class which contains proporties of Media that used to receive paramamer values to be updated in the database
*/
export class UpdateMediaDto {

  @ApiProperty()
  // @IsNotEmpty()  
  // @IsUUID() // commented for test only
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  caption: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID()
  serviceId: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID() // will un comment when we build the user management
  updatedBy: string;

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



    // media.serviceId = mediaDto.serviceId;



    media.updatedBy = mediaDto.updatedBy;


    return media;
  }
}
/**
*A class wich contains proporties of Media that used to receive paramamer values to be saved to database
*
*/
export class CreateMediaDto {

  @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  caption: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID()
  serviceId: string;

  // @ApiProperty() 
  // @IsNotEmpty()
  // @IsUUID()// will un comment when we build the user management
  createdBy: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID() // will un comment when we build the user management
  updatedBy: string;

  /**
*A method that mapes  CreateMediaDto object data to  Media domain object
*@returns Media domain object which contains Media  information
*/
  static fromDTO(mediaDto: CreateMediaDto): Media {
    const media: Media = new Media();

    // media.id = mediaDto.id;  // no need of id child entity because the system generates an id automatically

    media.url = mediaDto.url;

    media.caption = mediaDto.caption;

    media.type = mediaDto.type;

    media.serviceId = mediaDto.serviceId;

    media.createdBy = mediaDto.createdBy;

    media.updatedBy = mediaDto.updatedBy;
    return media;
  }

}
