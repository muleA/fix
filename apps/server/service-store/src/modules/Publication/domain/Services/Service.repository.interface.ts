import { Service } from './service';
export interface IServiceRepository {
  insertService(service: Service): Promise<Service>;
  findAll(): Promise<Service[]>;
  findById(id: string): Promise<Service>;
  updateService(id: string, service: Service): Promise<void>; // for service children entity
  updateServices(id: string, service): Promise<void>; //for the service entity
  deleteById(id: string): Promise<void>;
  removeAndSaveMedias(service: Service): Promise<Service>;
  softDeleteById(id: string): Promise<void>;
  restoreDeleteService(id: string): Promise<void>;

}