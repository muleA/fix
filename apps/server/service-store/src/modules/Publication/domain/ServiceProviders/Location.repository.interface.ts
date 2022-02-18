import { Location } from './location';
export interface ILocationRepository {
  insertLocation(location: Location): Promise<Location>;
  findAll(): Promise<Location[]>;
  findById(id: string): Promise<Location>; 
  updateLocation(id: string,location: Location): Promise<void>;
  deleteById(id: string): Promise<void>;

}