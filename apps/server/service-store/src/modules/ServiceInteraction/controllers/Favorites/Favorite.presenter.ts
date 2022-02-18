import { ApiProperty } from '@nestjs/swagger';
import { Favorite } from '../../domain/Favorites/favorite';
 
/**
*A class which contains proporties of Favorite that used to put data to be returned to client
*
*/
export class FavoritePresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
serviceName: string;
  
@ApiProperty()
serviceId: string;
  
@ApiProperty()
userId: string;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  Favorite domain object Property value to  FavoritePresenter properties
*/
constructor(favorite: Favorite) {
  
this.id = favorite.id;  

  
this.serviceName = favorite.serviceName;  

  
this.serviceId = favorite.serviceId;  

  
this.userId = favorite.userId;  

  
this.createdAt = favorite.createdAt;  

  
this.updatedAt = favorite.updatedAt;  

  
    
  }
}