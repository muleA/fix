import { Media } from './media';
export interface IMediaRepository {
  insertMedia(media: Media): Promise<Media>;
  findAll(): Promise<Media[]>;
  findById(id: string): Promise<Media>; 
  updateMedia(id: string,media: Media): Promise<void>;
  deleteById(id: string): Promise<void>;

}