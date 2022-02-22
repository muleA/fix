import { Service } from './service';
export interface IServiceRepository {
  insertService(service: Service): Promise<Service>;
  findAll(): Promise<Service[]>;
  findById(id: string): Promise<Service>; 
  updateService(id: string,service: Service): Promise<void>;
  deleteById(id: string): Promise<void>;

}