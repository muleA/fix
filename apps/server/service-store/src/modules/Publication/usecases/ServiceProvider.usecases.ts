import { CreateDelegatedServiceDto, UpdateDelegatedServiceDto } from '../controllers/serviceProviders/DelegatedService.dto';
import { DelegatedService } from '../domain/serviceProviders/DelegatedService';
  
import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { ServiceProvider } from '../domain/serviceProviders/serviceProvider';
import { IServiceProviderRepository } from '../domain/serviceProviders/serviceProvider.repository.interface';
import { ServiceProviderRepository } from '../persistence/serviceProviders/serviceProvider.repository';
import { CreateServiceProviderDto, UpdateServiceProviderDto } from '../controllers/serviceProviders/serviceProvider.dto';
import { ServiceProviderEntity } from '../persistence/serviceProviders/serviceProvider.entity';
@Injectable()
export class ServiceProviderUseCases {
private serviceProviderdomain=new ServiceProvider();
  private readonly logger = new LoggerService('ServiceProviderService');
  /**
  * A constructor which injects a repository class that used to manage record in the database
  */
  constructor(@InjectRepository(ServiceProviderEntity)
  private serviceProviderRepository: IServiceProviderRepository) { }

/**
 * A method that calls the repository insert method to save  ServiceProvider to databse
 * @param createServiceProviderDto  An information of  ServiceProvider  that need to be saved
 * @returns Promise<ServiceProvider which contain  created ServiceProvider information
 * See the [definition of the CreateServiceProviderDto file]{@link CreateServiceProviderDto} to see a list of required properties
 */
  async createServiceProvider( serviceProviderDto:CreateServiceProviderDto): Promise<ServiceProvider> {
    var serviceProvider = new ServiceProvider();
    serviceProvider =CreateServiceProviderDto.fromDTO(serviceProviderDto);  
    const result = await this.serviceProviderRepository.insertServiceProvider(serviceProvider);
    this.logger.log('CreateServiceProviderUseCases execute', 'New serviceProvider have been inserted');
    return result;
  }
/**
 * A method that invoke a repository delete method  to  delete a ServiceProvider from the database by id
 * @param id An id of a ServiceProvider. A ServiceProvider with this id should exist in the database
 * @returns void 
*/
  async deleteServiceProvider(id: string): Promise<void> {
    await this.serviceProviderRepository.deleteById(id);
    this.logger.log('DeleteServiceProviderUseCases execute', `ServiceProvider ${id} have been deleted`);
  }

/**
 * A method that invoke a repository method findById() to fetchs a ServiceProvider from the database by id
 * @param id An id of a ServiceProvider. A ServiceProvider with this id should exist in the database
 * @returns A Promise which contain a Specific   ServiceProvider information
 * See the [definition of the ServiceProvider file]{@link ServiceProvider} to see a list of required properties
 */
  async getServiceProvider(id: string): Promise<ServiceProvider> {
    return await this.serviceProviderRepository.findById(id);
  }

/**
 * A method that invokes a method findAll() of  repository method to fetchs all ServiceProvider from the database 
 * @returns Promise with list of  ServiceProvider which contain  ServiceProvider information
 */
  async fetServiceProviders(): Promise<ServiceProvider[]> {
    return await this.serviceProviderRepository.findAll();
  }

/**
 * A method that invokes a repository method updateServiceProvider(serviceProvider) to update a ServiceProvider 
 * @param updateServiceProviderDto  An information of  ServiceProvider 
 * @returns no returned data
 */ 
async updateServiceProvider(serviceProviderDto:UpdateServiceProviderDto): Promise<void> {
    var   serviceProvider= await this.serviceProviderRepository.findById(serviceProviderDto.id);
   if(serviceProvider!=null){
    
    serviceProvider =UpdateServiceProviderDto.fromDTO(serviceProviderDto);
    await this.serviceProviderRepository.updateServiceProvider( serviceProvider.id, serviceProvider);
   }else{
   throw new Error("Not Found");
   }   
    
    this.logger.log('UpdateServiceProviderUseCases execute', `ServiceProvider ${ serviceProvider.id} have been updated`);
  }
  
 
   

async addDelegatedService(createDelegatedServiceDto: CreateDelegatedServiceDto) {
var delegatedService = new DelegatedService();
delegatedService =CreateDelegatedServiceDto.fromDTO(createDelegatedServiceDto); 
this.serviceProviderdomain= await this.serviceProviderRepository.findById(createDelegatedServiceDto.providerId) 
this.serviceProviderdomain.addDelegatedService(delegatedService);
const result = await this.serviceProviderRepository.insertServiceProvider(this.serviceProviderdomain);
this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
return result;  
}
/**
 * A method that update a DelegatedService 
 * @param updateDelegatedServiceDto  An information of  DelegatedService 
 * @returns Success Which notify the  DelegatedService information updated
*/ 
async updateDelegatedService(updateDelegatedServiceDto: UpdateDelegatedServiceDto) {
var delegatedService = new DelegatedService();
delegatedService =UpdateDelegatedServiceDto.fromDTO(updateDelegatedServiceDto); 
this.serviceProviderdomain= await this.serviceProviderRepository.findById(updateDelegatedServiceDto.id) 
this.serviceProviderdomain.updateDelegatedService(delegatedService);
const result = await this.serviceProviderRepository.updateServiceProvider(this.serviceProviderdomain.id,this.serviceProviderdomain);
this.logger.log('CreateDelegatedServiceUseCases execute', 'New Media have been inserted');
return result; 
}

/**
 * A method that delete a DelegatedService from the database by id
 * @param id An id of a DelegatedService. A DelegatedService with this id should exist in the database
 * @returns success which  informs the status of the remove operation successed 
*/
async deleteDelegatedService( id: string) {
 await this.serviceProviderdomain.removeDelegatedService(id);
this.logger.log('DeleteDelegatedServiceUseCases execute', `DelegatedService ${id} have been deleted`);
}

/**
 * A method that Remove  and  add  new list of DelegatedService to database
 * @param List<createDelegatedServiceDto> A list of DelegatedService to be saved into database 
 * @returns Success Which notify the  DelegatedService information saved successfully
*/ 
async updateDelegatedServices(createDelegatedServiceDto: CreateDelegatedServiceDto[]) 
{
var delegatedService : DelegatedService[];
delegatedService=createDelegatedServiceDto.map(item=>{  
return CreateDelegatedServiceDto.fromDTO(item);
})
this.serviceProviderdomain= await this.serviceProviderRepository.findById(createDelegatedServiceDto[0].providerId) 
await this.serviceProviderdomain.updateDelegatedServices(delegatedService );
await this.serviceProviderRepository.updateServiceProvider( this.serviceProviderdomain.id, this.serviceProviderdomain);
}
   



}