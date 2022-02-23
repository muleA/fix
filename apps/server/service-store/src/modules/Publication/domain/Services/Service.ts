
import { Media } from '../services/Media';

import { ServiceFee } from '../services/ServiceFee';

import { ProcessingTime } from '../services/ProcessingTime';

import { ServiceDependency } from '../services/ServiceDependency';

import { Language } from '../services/Language';
import { ApplicationForm } from '../services/ApplicationForm';

import { ServiceResource } from '../services/ServiceResource';

export class Service {
  constructor() { }
  id: string;
  name: string;
  description: string;
  code: string;
  fullyQualifiedName: string;
  medias: Media[];
  supportedQualifications: string;
  version: number;
  procedure: string;
  serviceFees: ServiceFee[];
  processingTimes: ProcessingTime[];
  serviceDependencies: ServiceDependency[];
  languages: Language[];
  applicationForm: ApplicationForm;
  serviceResources: ServiceResource[];
  targetCustomers: string;
  status: string;
  isPublic: boolean;
  isPublished: boolean;
  isArchived: boolean;
  tags: string;
  deliveryMethod: string;
  serviceOwnerId: string;
  averageRating: number;
  enableReview: boolean;
  policy: string;
  publishedOn: Date;
  createdAt: Date;
  updatedAt: Date;

  /**
   * A method that add Media to the database> 
   * @param media  An information of  Media 
   * @returns do not return any data
  */
  async addMedia(createMedia: Media) {
    this.medias.push(createMedia);
  }

  /**
   * A method that update a Media 
   * @param media  An information of  Media 
   * @returns Success Which notify the  Media information updated
  */
  async updateMedia(media: Media) {
    var existIndex = this.medias.findIndex(element => element.id == media.id);
    this.medias[existIndex] = media;
  }
  /**
   * A method that delete a Media from the database by id
   * @param id An id of a Media. A Media with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async removeMedia(id: string) {
    this.medias = this.medias.filter(element => element.id != id);
  }
  /**
   * A method that Remove  and  add  new list of Media to database
   * @param List<createMedia> A list of Media to be saved into database 
   * @returns Success Which notify the  Media information saved successfully
  */
  async updateMedias(medias: Media[]) {
    this.medias = [];
    this.medias = medias;
  }

  /**
   * A method that add ServiceFee to the database> 
   * @param serviceFee  An information of  ServiceFee 
   * @returns do not return any data
  */
  async addServiceFee(createServiceFee: ServiceFee) {
    this.serviceFees.push(createServiceFee);
  }

  /**
   * A method that update a ServiceFee 
   * @param serviceFee  An information of  ServiceFee 
   * @returns Success Which notify the  ServiceFee information updated
  */
  async updateServiceFee(serviceFee: ServiceFee) {
    var existIndex = this.serviceFees.findIndex(element => element.id == serviceFee.id);
    this.serviceFees[existIndex] = serviceFee;
  }
  /**
   * A method that delete a ServiceFee from the database by id
   * @param id An id of a ServiceFee. A ServiceFee with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async removeServiceFee(id: string) {
    this.serviceFees = this.serviceFees.filter(element => element.id != id);
  }
  /**
   * A method that Remove  and  add  new list of ServiceFee to database
   * @param List<createServiceFee> A list of ServiceFee to be saved into database 
   * @returns Success Which notify the  ServiceFee information saved successfully
  */
  async updateServiceFees(serviceFees: ServiceFee[]) {
    this.serviceFees = [];
    this.serviceFees = serviceFees;
  }

  /**
   * A method that add ProcessingTime to the database> 
   * @param processingTime  An information of  ProcessingTime 
   * @returns do not return any data
  */
  async addProcessingTime(createProcessingTime: ProcessingTime) {
    this.processingTimes.push(createProcessingTime);
  }

  /**
   * A method that update a ProcessingTime 
   * @param processingTime  An information of  ProcessingTime 
   * @returns Success Which notify the  ProcessingTime information updated
  */
  async updateProcessingTime(processingTime: ProcessingTime) {
    var existIndex = this.processingTimes.findIndex(element => element.id == processingTime.id);
    this.processingTimes[existIndex] = processingTime;
  }
  /**
   * A method that delete a ProcessingTime from the database by id
   * @param id An id of a ProcessingTime. A ProcessingTime with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async removeProcessingTime(id: string) {
    this.processingTimes = this.processingTimes.filter(element => element.id != id);
  }
  /**
   * A method that Remove  and  add  new list of ProcessingTime to database
   * @param List<createProcessingTime> A list of ProcessingTime to be saved into database 
   * @returns Success Which notify the  ProcessingTime information saved successfully
  */
  async updateProcessingTimes(processingTimes: ProcessingTime[]) {
    this.processingTimes = [];
    this.processingTimes = processingTimes;
  }

  /**
   * A method that add ServiceDependency to the database> 
   * @param serviceDependency  An information of  ServiceDependency 
   * @returns do not return any data
  */
  async addServiceDependency(createServiceDependency: ServiceDependency) {
    this.serviceDependencies.push(createServiceDependency);
  }

  /**
   * A method that update a ServiceDependency 
   * @param serviceDependency  An information of  ServiceDependency 
   * @returns Success Which notify the  ServiceDependency information updated
  */
  async updateServiceDependency(serviceDependency: ServiceDependency) {
    var existIndex = this.serviceDependencies.findIndex(element => element.id == serviceDependency.id);
    this.serviceDependencies[existIndex] = serviceDependency;
  }
  /**
   * A method that delete a ServiceDependency from the database by id
   * @param id An id of a ServiceDependency. A ServiceDependency with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async removeServiceDependency(id: string) {
    this.serviceDependencies = this.serviceDependencies.filter(element => element.id != id);
  }
  /**
   * A method that Remove  and  add  new list of ServiceDependency to database
   * @param List<createServiceDependency> A list of ServiceDependency to be saved into database 
   * @returns Success Which notify the  ServiceDependency information saved successfully
  */
  async updateServiceDependencies(serviceDependencies: ServiceDependency[]) {
    this.serviceDependencies = [];
    this.serviceDependencies = serviceDependencies;
  }

  /**
   * A method that add Language to the database> 
   * @param language  An information of  Language 
   * @returns do not return any data
  */
  async addLanguage(createLanguage: Language) {
    this.languages.push(createLanguage);
  }

  /**
   * A method that update a Language 
   * @param language  An information of  Language 
   * @returns Success Which notify the  Language information updated
  */
  async updateLanguage(language: Language) {
    var existIndex = this.languages.findIndex(element => element.id == language.id);
    this.languages[existIndex] = language;
  }
  /**
   * A method that delete a Language from the database by id
   * @param id An id of a Language. A Language with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async removeLanguage(id: string) {
    this.languages = this.languages.filter(element => element.id != id);
  }
  /**
   * A method that Remove  and  add  new list of Language to database
   * @param List<createLanguage> A list of Language to be saved into database 
   * @returns Success Which notify the  Language information saved successfully
  */
  async updateLanguages(languages: Language[]) {
    this.languages = [];
    this.languages = languages;
  }

  /**
   * A method that add ServiceResource to the database> 
   * @param serviceResource  An information of  ServiceResource 
   * @returns do not return any data
  */
  async addServiceResource(createServiceResource: ServiceResource) {
    this.serviceResources.push(createServiceResource);
  }

  /**
   * A method that update a ServiceResource 
   * @param serviceResource  An information of  ServiceResource 
   * @returns Success Which notify the  ServiceResource information updated
  */
  async updateServiceResource(serviceResource: ServiceResource) {
    var existIndex = this.serviceResources.findIndex(element => element.id == serviceResource.id);
    this.serviceResources[existIndex] = serviceResource;
  }
  /**
   * A method that delete a ServiceResource from the database by id
   * @param id An id of a ServiceResource. A ServiceResource with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async removeServiceResource(id: string) {
    this.serviceResources = this.serviceResources.filter(element => element.id != id);
  }
  /**
   * A method that Remove  and  add  new list of ServiceResource to database
   * @param List<createServiceResource> A list of ServiceResource to be saved into database 
   * @returns Success Which notify the  ServiceResource information saved successfully
  */
  async updateResources(serviceResources: ServiceResource[]) {
    this.serviceResources = [];
    this.serviceResources = serviceResources;
  }

}