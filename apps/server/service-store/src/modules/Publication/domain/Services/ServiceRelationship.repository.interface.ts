import { ServiceRelationship } from './serviceRelationship';
export interface IServiceRelationshipRepository {
  insertServiceRelationship(serviceRelationship: ServiceRelationship): Promise<ServiceRelationship>;
  findAll(): Promise<ServiceRelationship[]>;
  findById(id: string): Promise<ServiceRelationship>; 
  updateServiceRelationship(id: string,serviceRelationship: ServiceRelationship): Promise<void>;
  deleteById(id: string): Promise<void>;

}