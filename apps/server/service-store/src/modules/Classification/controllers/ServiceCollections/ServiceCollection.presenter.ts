import { ApiProperty } from '@nestjs/swagger';
import { ServiceCollection } from '../../domain/ServiceCollections/serviceCollection';
import {ServiceEntryPresenter } from './ServiceEntry.presenter';
   import {ServiceResourcePresenter } from './ServiceResource.presenter';
/**
*A class which contains proporties of ServiceCollection that used to put data to be returned to client
*
*/
export class ServiceCollectionPresenter {
@ApiProperty()
id: string;
@ApiProperty()
name: string;
@ApiProperty()
description: string;
@ApiProperty()
code: string;
@ApiProperty()
serviceEntries:ServiceEntryPresenter[];
@ApiProperty()
supportedQualifications: string;
@ApiProperty()
version: number;
@ApiProperty()
procedure: string;
@ApiProperty()
isPublic: boolean;
@ApiProperty()
tags: string;
@ApiProperty()
resources:ServiceResourcePresenter[];
@ApiProperty()
targetCustomers: string;
@ApiProperty()
isArchived: boolean;
@ApiProperty()
createdAt: Date;
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  ServiceCollection domain object Property value to  ServiceCollectionPresenter properties
*/
constructor(serviceCollection: ServiceCollection) {
this.id = serviceCollection.id;  
this.name = serviceCollection.name;  
this.description = serviceCollection.description;  
this.code = serviceCollection.code;  
this.serviceEntries = serviceCollection.serviceEntries.map(item=>  { return new ServiceEntryPresenter(item)});  
this.supportedQualifications = serviceCollection.supportedQualifications;  
this.version = serviceCollection.version;  
this.procedure = serviceCollection.procedure;  
this.isPublic = serviceCollection.isPublic;  
this.tags = serviceCollection.tags;  
this.resources = serviceCollection.serviceResources.map(item=> { return new ServiceResourcePresenter(item)});  
this.targetCustomers = serviceCollection.targetCustomers;  
this.isArchived = serviceCollection.isArchived;  
this.createdAt = serviceCollection.createdAt;  
this.updatedAt = serviceCollection.updatedAt;  
  }
}