import { InjectRepository } from '@nestjs/typeorm'; 
import { DelegatedService } from '../serviceProviders/DelegatedService';
import { IServiceProviderRepository } from '../../domain/serviceProviders/serviceProvider.repository.interface';
import { Address } from '../ServiceOwners/address';
import { ContactInfo } from '../serviceOwners/ContactInfo';
export class  ServiceProvider {
 constructor() { } 
 id: string;  
shortName: string;  
fullName: string;  
sector: string;  
contactInfo: ContactInfo;  
location: Location;  
address: Address;  
delegatedServices: DelegatedService[];  
code: string;  
organizationId: string;  
organizationName: string;  
createdAt: Date;  
updatedAt: Date;  
 
/**
 * A method that add DelegatedService to the database> 
 * @param delegatedService  An information of  DelegatedService 
 * @returns do not return any data
*/ 
async addDelegatedService(createDelegatedService: DelegatedService) {
  this.delegatedServices.push(createDelegatedService);
}

/**
 * A method that update a DelegatedService 
 * @param delegatedService  An information of  DelegatedService 
 * @returns Success Which notify the  DelegatedService information updated
*/ 
async updateDelegatedService(delegatedService: DelegatedService) {
var existIndex=this.delegatedServices.findIndex( element=>element.id==delegatedService.id);
this.delegatedServices[existIndex]= delegatedService;
}
/**
 * A method that delete a DelegatedService from the database by id
 * @param id An id of a DelegatedService. A DelegatedService with this id should exist in the database
 * @returns success which  informs the status of the remove operation successed 
*/
async removeDelegatedService( id: string) {
 this.delegatedServices=this.delegatedServices.filter( element=>element.id!=id);
}
/**
 * A method that Remove  and  add  new list of DelegatedService to database
 * @param List<createDelegatedService> A list of DelegatedService to be saved into database 
 * @returns Success Which notify the  DelegatedService information saved successfully
*/ 
async updateDelegatedServices(delegatedServices: DelegatedService[]) 
{
this.delegatedServices=[];
this.delegatedServices=delegatedServices;
}
  
}