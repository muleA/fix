import { ApiProperty } from '@nestjs/swagger';
import { Media } from '../../domain/Medias/media';
 
/**
*A class which contains proporties of Media that used to put data to be returned to client
*
*/
export class MediaPresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
url: string;
  
@ApiProperty()
caption: string;
  
@ApiProperty()
type: string;
  
@ApiProperty()
serviceId: string;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  Media domain object Property value to  MediaPresenter properties
*/
constructor(media: Media) {
  
this.id = media.id;  

  
this.url = media.url;  

  
this.caption = media.caption;  

  
this.type = media.type;  

  
this.serviceId = media.serviceId;  

  
this.createdAt = media.createdAt;  

  
this.updatedAt = media.updatedAt;  

  
    
  }
}