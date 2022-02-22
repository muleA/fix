import { EntityRepository, Repository,  } from 'typeorm';
import { ServiceOwner } from '../../domain/serviceOwners/serviceOwner';
import { IServiceOwnerRepository } from '../../domain/serviceOwners/serviceOwner.repository.interface';
import { ServiceOwnerEntity } from './serviceOwner.entity';

//@Injectable()
@EntityRepository(ServiceOwnerEntity)
export class ServiceOwnerRepository extends Repository<ServiceOwnerEntity> implements IServiceOwnerRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates ServiceOwner information in the database 
  */
  async updateServiceOwner(id:string,serviceOwner: ServiceOwner): Promise<void> {
    const serviceOwnerEntity = this.toServiceOwnerEntity(serviceOwner);
    await this.update( {id: serviceOwner.id}, serviceOwnerEntity);
  }
 /**
  * A method that inserts ServiceOwnerEntity  into  database 
  *
  */
  async insertServiceOwner(serviceOwner: ServiceOwner): Promise<ServiceOwner> {
    const serviceOwnerEntity = this.toServiceOwnerEntity(serviceOwner);
    const result = await this.insert(serviceOwnerEntity);
    console.log(result.generatedMaps);
    return  this.toServiceOwner(result.generatedMaps[0] as ServiceOwnerEntity);   
  }
  /**
  * A method that fetches all ServiceOwners from the database 
  *
  */
  async findAll(): Promise<ServiceOwner[]> {
    const serviceOwnersEntity = await this.find();
    return serviceOwnersEntity.map((serviceOwnerEntity) => this.toServiceOwner(serviceOwnerEntity));
  }
  /**
  * A method that fetches a specific ServiceOwner by id  from the database 
  *@param  an Id of ServiceOwner
  *@returns A Promise of ServiceOwner
  */ 
  async findById(id: string): Promise<ServiceOwner> {
    const serviceOwnerEntity = await this.findOneOrFail(id);
    return this.toServiceOwner(serviceOwnerEntity);
  }
/**
  * A method that deletes a specific ServiceOwner by id from the database
  *@param  an Id of ServiceOwner
   */
  async deleteById(id: string): Promise<void> {
   await this.delete({ id: id });
  }
  /**
  *A method that copy ServiceOwnerEntity data  a  ServiceOwner domain  
  *@param serviceOwnerEntity which compraises  ServiceOwner information
  *@returns ServiceOwner information
  */
private toServiceOwner(serviceOwnerEntity: ServiceOwnerEntity): ServiceOwner {
const serviceOwner: ServiceOwner = new ServiceOwner();   
    serviceOwner.id= serviceOwnerEntity.id;
    serviceOwner.shortName= serviceOwnerEntity.shortName;
    serviceOwner.fullName= serviceOwnerEntity.fullName;
    serviceOwner.sector= serviceOwnerEntity.sector;
    //serviceOwner.contactInfo= serviceOwnerEntity.contactInfo;
    //serviceOwner.address= serviceOwnerEntity.address;
    serviceOwner.code= serviceOwnerEntity.code;
    serviceOwner.organizationId= serviceOwnerEntity.organizationId;
    serviceOwner.organizationName= serviceOwnerEntity.organizationName;
    serviceOwner.createdAt= serviceOwnerEntity.createdAt;
    serviceOwner.updatedAt= serviceOwnerEntity.updatedAt;
     return serviceOwner;
}
 /**
  *A method that copy ServiceOwner data to a ServiceOwnerEntity   object 
  *@param serviceOwner An serviceOwner which compraises  ServiceOwner information
  *@returns A ServiceOwner which contain  ServiceOwner information
  */
    
 private toServiceOwnerEntity(serviceOwner: ServiceOwner): ServiceOwnerEntity {
   const serviceOwnerEntity: ServiceOwnerEntity = new ServiceOwnerEntity();    
    serviceOwnerEntity.id= serviceOwner.id;
    serviceOwnerEntity.shortName= serviceOwner.shortName;
    serviceOwnerEntity.fullName= serviceOwner.fullName;
    serviceOwnerEntity.sector= serviceOwner.sector;
    //serviceOwnerEntity.contactInfo= serviceOwner.contactInfo;
    //serviceOwnerEntity.address= serviceOwner.address;
    serviceOwnerEntity.code= serviceOwner.code;
    serviceOwnerEntity.organizationId= serviceOwner.organizationId;
    serviceOwnerEntity.organizationName= serviceOwner.organizationName;
    serviceOwnerEntity.createdAt= serviceOwner.createdAt;
    serviceOwnerEntity.updatedAt= serviceOwner.updatedAt;
 return serviceOwnerEntity;
  }
 
}