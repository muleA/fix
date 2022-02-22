import { ServiceOwner } from './serviceOwner';
export interface IServiceOwnerRepository {
  insertServiceOwner(serviceOwner: ServiceOwner): Promise<ServiceOwner>;
  findAll(): Promise<ServiceOwner[]>;
  findById(id: string): Promise<ServiceOwner>; 
  updateServiceOwner(id: string,serviceOwner: ServiceOwner): Promise<void>;
  deleteById(id: string): Promise<void>;

}