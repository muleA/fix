import { ProviderLocation } from './ProviderLocation';
export interface ILocationRepository {
  insertLocation(location: ProviderLocation): Promise<ProviderLocation>;
  findAll(): Promise<ProviderLocation[]>;
  findById(id: string): Promise<ProviderLocation>; 
  updateLocation(id: string, location: ProviderLocation): Promise<void>;
  deleteById(id: string): Promise<void>;

}