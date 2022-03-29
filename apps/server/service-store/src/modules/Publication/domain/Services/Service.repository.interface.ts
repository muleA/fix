import { Service } from './service';
export interface IServiceRepository {
  insertService(service: Service): Promise<Service>;
  findAll(): Promise<Service[]>;
  findById(id: string): Promise<Service>;
  updateService(id: string, service: Service): Promise<void>; // for service children entity
  updateServices(id: string, service): Promise<void>; //for the service entity
  deleteById(id: string): Promise<void>;
  softDeleteById(id: string): Promise<void>;
  restoreDeleteService(id: string): Promise<void>;
  //to remove individual child entity
  removeAndSaveMedia(service: Service): Promise<Service>;
  removeAndSaveServiceFee(service: Service): Promise<Service>;
  removeAndSaveProcessingTime(service: Service): Promise<Service>;
  removeAndSaveServiceDependency(service: Service): Promise<Service>;
  removeAndSaveLanguage(service: Service): Promise<Service>;
  removeAndSaveServiceResource(service: Service): Promise<Service>;
}