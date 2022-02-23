import { EntityRepository, Repository,  } from 'typeorm';
import { ServiceCollection } from '../../domain/serviceCollections/serviceCollection';
import { IServiceCollectionRepository } from '../../domain/serviceCollections/serviceCollection.repository.interface';
import { ServiceCollectionEntity } from './serviceCollection.entity';
//@Injectable()
@EntityRepository(ServiceCollectionEntity)
export class ServiceCollectionRepository extends Repository<ServiceCollectionEntity> implements IServiceCollectionRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates ServiceCollection information in the database 
  */
  async updateServiceCollection(id:string,serviceCollection: ServiceCollection): Promise<void> {
    const serviceCollectionEntity = this.toServiceCollectionEntity(serviceCollection);
    await this.update( {id: serviceCollection.id}, serviceCollectionEntity);
  }
 /**
  * A method that inserts ServiceCollectionEntity  into  database 
  *
  */
  async insertServiceCollection(serviceCollection: ServiceCollection): Promise<ServiceCollection> {
    const serviceCollectionEntity = this.toServiceCollectionEntity(serviceCollection);
    const result = await this.insert(serviceCollectionEntity);
    console.log(result.generatedMaps);
    return  this.toServiceCollection(result.generatedMaps[0] as ServiceCollectionEntity);   
  }
  /**
  * A method that fetches all ServiceCollections from the database 
  *
  */
  async findAll(): Promise<ServiceCollection[]> {
    const serviceCollectionsEntity = await this.find();
    return serviceCollectionsEntity.map((serviceCollectionEntity) => this.toServiceCollection(serviceCollectionEntity));
  }
  /**
  * A method that fetches a specific ServiceCollection by id  from the database 
  *@param  an Id of ServiceCollection
  *@returns A Promise of ServiceCollection
  */ 
  async findById(id: string): Promise<ServiceCollection> {
    const serviceCollectionEntity = await this.findOneOrFail(id);
    return this.toServiceCollection(serviceCollectionEntity);
  }
/**
  * A method that deletes a specific ServiceCollection by id from the database
  *@param  an Id of ServiceCollection
   */
  async deleteById(id: string): Promise<void> {
   await this.delete({ id: id });
  }
  /**
  *A method that copy ServiceCollectionEntity data  a  ServiceCollection domain  
  *@param serviceCollectionEntity which compraises  ServiceCollection information
  *@returns ServiceCollection information
  */
private toServiceCollection(serviceCollectionEntity: ServiceCollectionEntity): ServiceCollection {
const serviceCollection: ServiceCollection = new ServiceCollection();   
    serviceCollection.id= serviceCollectionEntity.id;
    serviceCollection.name= serviceCollectionEntity.name;
    serviceCollection.description= serviceCollectionEntity.description;
    serviceCollection.code= serviceCollectionEntity.code;
   // serviceCollection.serviceEntries= serviceCollectionEntity.serviceEntries;
    serviceCollection.supportedQualifications= serviceCollectionEntity.supportedQualifications;
    serviceCollection.version= serviceCollectionEntity.version;
    serviceCollection.procedure= serviceCollectionEntity.procedure;
    serviceCollection.isPublic= serviceCollectionEntity.isPublic;
    serviceCollection.tags= serviceCollectionEntity.tags;
  //  serviceCollection.serviceResources= serviceCollectionEntity.serviceResources;
    serviceCollection.targetCustomers= serviceCollectionEntity.targetCustomers;
    serviceCollection.isArchived= serviceCollectionEntity.isArchived;
    serviceCollection.createdAt= serviceCollectionEntity.createdAt;
    serviceCollection.updatedAt= serviceCollectionEntity.updatedAt;
     return serviceCollection;
}
 /**
  *A method that copy ServiceCollection data to a ServiceCollectionEntity   object 
  *@param serviceCollection An serviceCollection which compraises  ServiceCollection information
  *@returns A ServiceCollection which contain  ServiceCollection information
  */
 private toServiceCollectionEntity(serviceCollection: ServiceCollection): ServiceCollectionEntity {
   const serviceCollectionEntity: ServiceCollectionEntity = new ServiceCollectionEntity();    
    serviceCollectionEntity.id= serviceCollection.id;
    serviceCollectionEntity.name= serviceCollection.name;
    serviceCollectionEntity.description= serviceCollection.description;
    serviceCollectionEntity.code= serviceCollection.code;
  // serviceCollectionEntity.serviceEntries= serviceCollection.serviceEntries;
    serviceCollectionEntity.supportedQualifications= serviceCollection.supportedQualifications;
    serviceCollectionEntity.version= serviceCollection.version;
    serviceCollectionEntity.procedure= serviceCollection.procedure;
    serviceCollectionEntity.isPublic= serviceCollection.isPublic;
    serviceCollectionEntity.tags= serviceCollection.tags;
  //  serviceCollectionEntity.serviceResources= serviceCollection.serviceResources;
    serviceCollectionEntity.targetCustomers= serviceCollection.targetCustomers;
    serviceCollectionEntity.isArchived= serviceCollection.isArchived;
    serviceCollectionEntity.createdAt= serviceCollection.createdAt;
    serviceCollectionEntity.updatedAt= serviceCollection.updatedAt;
 return serviceCollectionEntity;
  }
}