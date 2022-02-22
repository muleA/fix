import { CreateServiceEntryDto, UpdateServiceEntryDto } from '../controllers/serviceCollections/ServiceEntry.dto';
import { ServiceEntry } from '../domain/serviceCollections/ServiceEntry';
  import { CreateServiceResourceDto, UpdateServiceResourceDto } from '../controllers/serviceCollections/ServiceResource.dto';
import { ServiceResource } from '../domain/serviceCollections/ServiceResource';
  
import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { ServiceCollection } from '../domain/serviceCollections/serviceCollection';
import { IServiceCollectionRepository } from '../domain/serviceCollections/serviceCollection.repository.interface';
import { ServiceCollectionRepository } from '../persistence/serviceCollections/serviceCollection.repository';
import { CreateServiceCollectionDto, UpdateServiceCollectionDto } from '../controllers/serviceCollections/serviceCollection.dto';
@Injectable()
export class ServiceCollectionUseCases {
private serviceCollectiondomain=new ServiceCollection();
  private readonly logger = new LoggerService('ServiceCollectionService');
  /**
  * A constructor which injects a repository class that used to manage record in the database
  */
  constructor(@InjectRepository(ServiceCollectionRepository)
  private serviceCollectionRepository: IServiceCollectionRepository) { }

/**
 * A method that calls the repository insert method to save  ServiceCollection to databse
 * @param createServiceCollectionDto  An information of  ServiceCollection  that need to be saved
 * @returns Promise<ServiceCollection which contain  created ServiceCollection information
 * See the [definition of the CreateServiceCollectionDto file]{@link CreateServiceCollectionDto} to see a list of required properties
 */
  async createServiceCollection( serviceCollectionDto:CreateServiceCollectionDto): Promise<ServiceCollection> {
    var serviceCollection = new ServiceCollection();
    serviceCollection =CreateServiceCollectionDto.fromDTO(serviceCollectionDto);  
    const result = await this.serviceCollectionRepository.insertServiceCollection(serviceCollection);
    this.logger.log('CreateServiceCollectionUseCases execute', 'New serviceCollection have been inserted');
    return result;
  }
/**
 * A method that invoke a repository delete method  to  delete a ServiceCollection from the database by id
 * @param id An id of a ServiceCollection. A ServiceCollection with this id should exist in the database
 * @returns void 
*/
  async deleteServiceCollection(id: string): Promise<void> {
    await this.serviceCollectionRepository.deleteById(id);
    this.logger.log('DeleteServiceCollectionUseCases execute', `ServiceCollection ${id} have been deleted`);
  }

/**
 * A method that invoke a repository method findById() to fetchs a ServiceCollection from the database by id
 * @param id An id of a ServiceCollection. A ServiceCollection with this id should exist in the database
 * @returns A Promise which contain a Specific   ServiceCollection information
 * See the [definition of the ServiceCollection file]{@link ServiceCollection} to see a list of required properties
 */
  async getServiceCollection(id: string): Promise<ServiceCollection> {
    return await this.serviceCollectionRepository.findById(id);
  }

/**
 * A method that invokes a method findAll() of  repository method to fetchs all ServiceCollection from the database 
 * @returns Promise with list of  ServiceCollection which contain  ServiceCollection information
 */
  async fetServiceCollections(): Promise<ServiceCollection[]> {
    return await this.serviceCollectionRepository.findAll();
  }

/**
 * A method that invokes a repository method updateServiceCollection(serviceCollection) to update a ServiceCollection 
 * @param updateServiceCollectionDto  An information of  ServiceCollection 
 * @returns no returned data
 */ 
async updateServiceCollection(serviceCollectionDto:UpdateServiceCollectionDto): Promise<void> {
    var  var serviceCollection= await this.serviceCollectionRepository.findById(serviceCollectionDto.id);
   if(serviceCollection!=null){
    
    serviceCollection =UpdateServiceCollectionDto.fromDTO(serviceCollectionDto);
    await this.serviceCollectionRepository.updateServiceCollection( serviceCollection.id, serviceCollection);
   }else{
   threw new Error("Not Found");
   }   
    
    this.logger.log('UpdateServiceCollectionUseCases execute', `ServiceCollection ${ serviceCollection.id} have been updated`);
  }
  
 
   

async addServiceEntry(createServiceEntryDto: CreateServiceEntryDto) {
var serviceEntry = new ServiceEntry();
serviceEntry =CreateServiceEntryDto.fromDTO(createServiceEntryDto); 
this.serviceCollectiondomain= await this.serviceCollectionRepository.findById(createServiceEntryDto.id) 
this.serviceCollectiondomain.addServiceEntry(serviceEntry);
const result = await this.serviceCollectionRepository.insertServiceCollection(this.serviceCollectiondomain);
this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
return result;  
}
/**
 * A method that update a ServiceEntry 
 * @param updateServiceEntryDto  An information of  ServiceEntry 
 * @returns Success Which notify the  ServiceEntry information updated
*/ 
async updateServiceEntry(updateServiceEntryDto: UpdateServiceEntryDto) {
var serviceEntry = new ServiceEntry();
serviceEntry =UpdateServiceEntryDto.fromDTO(updateServiceEntryDto); 
this.serviceCollectiondomain= await this.serviceCollectionRepository.findById(updateServiceEntryDto.id) 
this.serviceCollectiondomain.updateServiceEntry(serviceEntry);
const result = await this.serviceCollectionRepository.updateServiceCollection(this.serviceCollectiondomain.id,this.serviceCollectiondomain);
this.logger.log('CreateServiceEntryUseCases execute', 'New Media have been inserted');
return result; 
}

/**
 * A method that delete a ServiceEntry from the database by id
 * @param id An id of a ServiceEntry. A ServiceEntry with this id should exist in the database
 * @returns success which  informs the status of the remove operation successed 
*/
async deleteServiceEntry( id: string) {
 await this.serviceCollectiondomain.removeServiceEntry(id);
this.logger.log('DeleteServiceEntryUseCases execute', `ServiceEntry ${id} have been deleted`);
}

/**
 * A method that Remove  and  add  new list of ServiceEntry to database
 * @param List<createServiceEntryDto> A list of ServiceEntry to be saved into database 
 * @returns Success Which notify the  ServiceEntry information saved successfully
*/ 
async updateServiceEntries(createServiceEntryDto: CreateServiceEntryDto[]) 
{
var serviceEntry : ServiceEntry[];
serviceEntry=createServiceEntryDto.map(item=>{  
return CreateServiceEntryDto.fromDTO(item);
})
this.serviceCollectiondomain= await this.serviceCollectionRepository.findById(createServiceEntryDto[0].id) 
await this.serviceCollectiondomain.updateServiceEntries(serviceEntry );
await this.serviceCollectionRepository.updateServiceCollection( this.serviceCollectiondomain.id, this.serviceCollectiondomain);
}
   

async addServiceResource(createServiceResourceDto: CreateServiceResourceDto) {
var serviceResource = new ServiceResource();
serviceResource =CreateServiceResourceDto.fromDTO(createServiceResourceDto); 
this.serviceCollectiondomain= await this.serviceCollectionRepository.findById(createServiceResourceDto.id) 
this.serviceCollectiondomain.addServiceResource(serviceResource);
const result = await this.serviceCollectionRepository.insertServiceCollection(this.serviceCollectiondomain);
this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
return result;  
}
/**
 * A method that update a ServiceResource 
 * @param updateServiceResourceDto  An information of  ServiceResource 
 * @returns Success Which notify the  ServiceResource information updated
*/ 
async updateServiceResource(updateServiceResourceDto: UpdateServiceResourceDto) {
var serviceResource = new ServiceResource();
serviceResource =UpdateServiceResourceDto.fromDTO(updateServiceResourceDto); 
this.serviceCollectiondomain= await this.serviceCollectionRepository.findById(updateServiceResourceDto.id) 
this.serviceCollectiondomain.updateServiceResource(serviceResource);
const result = await this.serviceCollectionRepository.updateServiceCollection(this.serviceCollectiondomain.id,this.serviceCollectiondomain);
this.logger.log('CreateServiceResourceUseCases execute', 'New Media have been inserted');
return result; 
}

/**
 * A method that delete a ServiceResource from the database by id
 * @param id An id of a ServiceResource. A ServiceResource with this id should exist in the database
 * @returns success which  informs the status of the remove operation successed 
*/
async deleteServiceResource( id: string) {
 await this.serviceCollectiondomain.removeServiceResource(id);
this.logger.log('DeleteServiceResourceUseCases execute', `ServiceResource ${id} have been deleted`);
}

/**
 * A method that Remove  and  add  new list of ServiceResource to database
 * @param List<createServiceResourceDto> A list of ServiceResource to be saved into database 
 * @returns Success Which notify the  ServiceResource information saved successfully
*/ 
async updateResources(createServiceResourceDto: CreateServiceResourceDto[]) 
{
var serviceResource : ServiceResource[];
serviceResource=createServiceResourceDto.map(item=>{  
return CreateServiceResourceDto.fromDTO(item);
})
this.serviceCollectiondomain= await this.serviceCollectionRepository.findById(createServiceResourceDto[0].id) 
await this.serviceCollectiondomain.updateResources(serviceResource );
await this.serviceCollectionRepository.updateServiceCollection( this.serviceCollectiondomain.id, this.serviceCollectiondomain);
}
   



}