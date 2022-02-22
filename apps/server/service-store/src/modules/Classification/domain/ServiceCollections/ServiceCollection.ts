import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntry } from '../serviceCollections/ServiceEntry';

import { IServiceCollectionRepository } from '../../domain/serviceCollections/serviceCollection.repository.interface';
import { ServiceResource } from 'src/modules/Publication/domain/services/ServiceResource';
export class  ServiceCollection {
 constructor() { } 
 id: string;  
name: string;  
description: string;  
code: string;  
serviceEntries: ServiceEntry[];  
supportedQualifications: string;  
version: number;  
procedure: string;  
isPublic: boolean;  
tags: string;  
resources: ServiceResource[];  
targetCustomers: string;  
isArchived: boolean;  
createdAt: Date;  
updatedAt: Date;  
/**
 * A method that add ServiceEntry to the database> 
 * @param serviceEntry  An information of  ServiceEntry 
 * @returns do not return any data
*/ 
async addServiceEntry(createServiceEntry: ServiceEntry) {
  this.serviceEntries.push(createServiceEntry);
}
/**
 * A method that update a ServiceEntry 
 * @param serviceEntry  An information of  ServiceEntry 
 * @returns Success Which notify the  ServiceEntry information updated
*/ 
async updateServiceEntry(serviceEntry: ServiceEntry) {
var existIndex=this.serviceEntries.findIndex( element=>element.id==serviceEntry.id);
this.serviceEntries[existIndex]= serviceEntry;
}
/**
 * A method that delete a ServiceEntry from the database by id
 * @param id An id of a ServiceEntry. A ServiceEntry with this id should exist in the database
 * @returns success which  informs the status of the remove operation successed 
*/
async removeServiceEntry( id: string) {
 this.serviceEntries=this.serviceEntries.filter( element=>element.id!=id);
}
/**
 * A method that Remove  and  add  new list of ServiceEntry to database
 * @param List<createServiceEntry> A list of ServiceEntry to be saved into database 
 * @returns Success Which notify the  ServiceEntry information saved successfully
*/ 
async updateServiceEntries(serviceEntries: ServiceEntry[]) 
{
this.serviceEntries=[];
this.serviceEntries=serviceEntries;
}
/**
 * A method that add ServiceResource to the database> 
 * @param serviceResource  An information of  ServiceResource 
 * @returns do not return any data
*/ 
async addServiceResource(createServiceResource: ServiceResource) {
  this.resources.push(createServiceResource);
}
/**
 * A method that update a ServiceResource 
 * @param serviceResource  An information of  ServiceResource 
 * @returns Success Which notify the  ServiceResource information updated
*/ 
async updateServiceResource(serviceResource: ServiceResource) {
var existIndex=this.resources.findIndex( element=>element.id==serviceResource.id);
this.resources[existIndex]= serviceResource;
}
/**
 * A method that delete a ServiceResource from the database by id
 * @param id An id of a ServiceResource. A ServiceResource with this id should exist in the database
 * @returns success which  informs the status of the remove operation successed 
*/
async removeServiceResource( id: string) {
 this.resources=this.resources.filter( element=>element.id!=id);
}
/**
 * A method that Remove  and  add  new list of ServiceResource to database
 * @param List<createServiceResource> A list of ServiceResource to be saved into database 
 * @returns Success Which notify the  ServiceResource information saved successfully
*/ 
async updateResources(resources: ServiceResource[]) 
{
this.resources=[];
this.resources=resources;
}
}