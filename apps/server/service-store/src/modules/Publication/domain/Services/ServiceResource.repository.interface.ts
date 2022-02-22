import { ServiceResource } from './serviceResource';
export interface IServiceResourceRepository {
  insertServiceResource(serviceResource: ServiceResource): Promise<ServiceResource>;
  findAll(): Promise<ServiceResource[]>;
  findById(id: string): Promise<ServiceResource>; 
  updateServiceResource(id: string,serviceResource: ServiceResource): Promise<void>;
  deleteById(id: string): Promise<void>;

}