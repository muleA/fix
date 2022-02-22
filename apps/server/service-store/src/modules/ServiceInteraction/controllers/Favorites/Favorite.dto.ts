import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Favorite } from '../../domain/Favorites/favorite';
/**
*A class which contains proporties of Favorite that used to receive paramamer values to be updated in the database
*/
export class UpdateFavoriteDto {
  @IsNotEmpty()
  @ApiProperty()
  id: string;
  @IsNotEmpty()
  @ApiProperty()
  serviceName: string;
  @IsNotEmpty()
  @ApiProperty()
  serviceId: string;
  @IsNotEmpty()
  @ApiProperty()
  userId: string;
  /**
*A method that mapes  UpdateFavoriteDto object data to  Favorite domain object
*@returns Favorite domain object which contains Favorite  information
*/
  static fromDTO(favoriteDto: UpdateFavoriteDto): Favorite {
    const favorite: Favorite = new Favorite();
    favorite.id = favoriteDto.id;
    favorite.serviceName = favoriteDto.serviceName;
    favorite.serviceId = favoriteDto.serviceId;
    favorite.userId = favoriteDto.userId;
    return favorite;
  }
}
/**
*A class wich contains proporties of Favorite that used to receive paramamer values to be saved to database
*
*/
export class CreateFavoriteDto { 
  @ApiProperty()
  @IsNotEmpty()
  serviceName: string;
  @ApiProperty()
  @IsNotEmpty()
  serviceId: string;
  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  /**
*A method that mapes  CreateFavoriteDto object data to  Favorite domain object
*@returns Favorite domain object which contains Favorite  information
*/
  static fromDTO(favoriteDto: CreateFavoriteDto): Favorite {
    const favorite: Favorite = new Favorite();   
    favorite.serviceName = favoriteDto.serviceName;
    favorite.serviceId = favoriteDto.serviceId;
    favorite.userId = favoriteDto.userId;
    return favorite;
  }
}