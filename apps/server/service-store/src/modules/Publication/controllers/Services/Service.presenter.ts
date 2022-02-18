import { ApiProperty } from '@nestjs/swagger';
import { Service } from '../../domain/Services/service';
import {MediaPresenter } from './Media.presenter';
   import {ServiceFeePresenter } from './ServiceFee.presenter';
   import {ProcessingTimePresenter } from './ProcessingTime.presenter';
   import {ServiceDependencyPresenter } from './ServiceDependency.presenter';
   import {LanguagePresenter } from './Language.presenter';
   import { ApplicationFormPresenter,  } from './ApplicationForm.presenter';
import {ServiceResourcePresenter } from './ServiceResource.presenter';
    
/**
*A class which contains proporties of Service that used to put data to be returned to client
*
*/
export class ServicePresenter {
     
@ApiProperty()
id: string;
  
@ApiProperty()
name: string;
  
@ApiProperty()
description: string;
  
@ApiProperty()
code: string;
  
@ApiProperty()
fullyQualifiedName: string;
@ApiProperty()
medias:MediaPresenter[];
     
@ApiProperty()
supportedQualifications: string;
  
@ApiProperty()
version: number;
  
@ApiProperty()
procedure: string;
@ApiProperty()
serviceFees:ServiceFeePresenter[];
   @ApiProperty()
processingTimes:ProcessingTimePresenter[];
   @ApiProperty()
serviceDependencies:ServiceDependencyPresenter[];
   @ApiProperty()
languages:LanguagePresenter[];
   applicationForm: ApplicationFormPresenter;
   @ApiProperty()
resources:ServiceResourcePresenter[];
     
@ApiProperty()
targetCustomers: string;
  
@ApiProperty()
status: string;
  
@ApiProperty()
isPublic: boolean;
  
@ApiProperty()
isPublished: boolean;
  
@ApiProperty()
isArchived: boolean;
  
@ApiProperty()
tags: string;
  
@ApiProperty()
deliveryMethod: string;
  
@ApiProperty()
serviceOwnerId: string;
  
@ApiProperty()
averageRating: number;
  
@ApiProperty()
enableReview: boolean;
  
@ApiProperty()
policy: string;
  
@ApiProperty()
publishedOn: Date;
  
@ApiProperty()
createdAt: Date;
  
@ApiProperty()
updatedAt: Date;
/**
*A constructor which copy  Service domain object Property value to  ServicePresenter properties
*/
constructor(service: Service) {
  
this.id = service.id;  

  
this.name = service.name;  

  
this.description = service.description;  

  
this.code = service.code;  

  
this.fullyQualifiedName = service.fullyQualifiedName;  

this.medias = service.medias.map(item=>new MediaPresenter(item));  
     
this.supportedQualifications = service.supportedQualifications;  

  
this.version = service.version;  

  
this.procedure = service.procedure;  

this.serviceFees = service.serviceFees.map(item=>new ServiceFeePresenter(item));  
   this.processingTimes = service.processingTimes.map(item=>new ProcessingTimePresenter(item));  
   this.serviceDependencies = service.serviceDependencies.map(item=>new ServiceDependencyPresenter(item));  
   this.languages = service.languages.map(item=>new LanguagePresenter(item));  
      
this.applicationForm = new ApplicationFormPresenter( service.applicationForm);  
   this.resources = service.resources.map(item=>new ServiceResourcePresenter(item));  
     
this.targetCustomers = service.targetCustomers;  

  
this.status = service.status;  

  
this.isPublic = service.isPublic;  

  
this.isPublished = service.isPublished;  

  
this.isArchived = service.isArchived;  

  
this.tags = service.tags;  

  
this.deliveryMethod = service.deliveryMethod;  

  
this.serviceOwnerId = service.serviceOwnerId;  

  
this.averageRating = service.averageRating;  

  
this.enableReview = service.enableReview;  

  
this.policy = service.policy;  

  
this.publishedOn = service.publishedOn;  

  
this.createdAt = service.createdAt;  

  
this.updatedAt = service.updatedAt;  

  
    
  }
}