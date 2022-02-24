<<<<<<< HEAD
import { EntityRepository, Repository } from "typeorm";
=======

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository, } from 'typeorm';
>>>>>>> f2a6b908b25f2c05f98be81524f77c16822794c6
import { Service } from '../../domain/services/service';
import { IServiceRepository } from '../../domain/services/service.repository.interface';
import { ServiceEntity } from './service.entity';

//@Injectable()
@EntityRepository(ServiceRepository)
export class ServiceRepository extends Repository<ServiceEntity> implements IServiceRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates Service information in the database 
  */
  async updateService(id: string, service: Service): Promise<void> {
    const serviceEntity = this.toServiceEntity(service);
    await this.update({ id: service.id }, serviceEntity);
  }
  /**
   * A method that inserts ServiceEntity  into  database 
   *
   */
  async insertService(service: Service): Promise<Service> {
    const serviceEntity = this.toServiceEntity(service);
    const result = await this.insert(serviceEntity);
    console.log(result.generatedMaps);
    return this.toService(result.generatedMaps[0] as ServiceEntity);
  }
  /**
  * A method that fetches all Services from the database 
  *
  */
  async findAll(): Promise<Service[]> {
    const servicesEntity = await this.find();
    return servicesEntity.map((serviceEntity) => this.toService(serviceEntity));
  }
  /**
  * A method that fetches a specific Service by id  from the database 
  *@param  an Id of Service
  *@returns A Promise of Service
  */
  async findById(id: string): Promise<Service> {
    const serviceEntity = await this.findOneOrFail(id);
    return this.toService(serviceEntity);
  }
  /**
    * A method that deletes a specific Service by id from the database
    *@param  an Id of Service
     */
  async deleteById(id: string): Promise<void> {
    await this.delete({ id: id });
  }
  /**
  *A method that copy ServiceEntity data  a  Service domain  
  *@param serviceEntity which compraises  Service information
  *@returns Service information
  */
  private toService(serviceEntity: ServiceEntity): Service {
    const service: Service = new Service();
    service.id = serviceEntity.id;
    service.name = serviceEntity.name;
    service.description = serviceEntity.description;
    service.code = serviceEntity.code;
    service.fullyQualifiedName = serviceEntity.fullyQualifiedName;
    // service.medias = serviceEntity.medias;
    service.supportedQualifications = serviceEntity.supportedQualifications;
    service.version = serviceEntity.version;
    service.procedure = serviceEntity.procedure;
    // service.serviceFees = serviceEntity.serviceFees;
    // service.processingTimes = serviceEntity.processingTimes;
    // service.serviceDependencies = serviceEntity.serviceDependencies;
    // service.languages = serviceEntity.languages;
    service.applicationForm = serviceEntity.applicationForm;
    // service.serviceResources = serviceEntity.serviceResources;
    service.targetCustomers = serviceEntity.targetCustomers;
    service.status = serviceEntity.status;
    service.isPublic = serviceEntity.isPublic;
    service.isPublished = serviceEntity.isPublished;
    service.isArchived = serviceEntity.isArchived;
    service.tags = serviceEntity.tags;
    service.deliveryMethod = serviceEntity.deliveryMethod;
    service.serviceOwnerId = serviceEntity.serviceOwnerId;
    service.averageRating = serviceEntity.averageRating;
    service.enableReview = serviceEntity.enableReview;
    service.policy = serviceEntity.policy;
    service.publishedOn = serviceEntity.publishedOn;
    service.createdAt = serviceEntity.createdAt;
    service.updatedAt = serviceEntity.updatedAt;
    return service;
  }
  /**
   *A method that copy Service data to a ServiceEntity   object 
   *@param service An service which compraises  Service information
   *@returns A Service which contain  Service information
   */

  private toServiceEntity(service: Service): ServiceEntity {
    const serviceEntity: ServiceEntity = new ServiceEntity();
    serviceEntity.id = service.id;
    serviceEntity.name = service.name;
    serviceEntity.description = service.description;
    serviceEntity.code = service.code;
    serviceEntity.fullyQualifiedName = service.fullyQualifiedName;
    //serviceEntity.medias = service.medias;
    serviceEntity.supportedQualifications = service.supportedQualifications;
    serviceEntity.version = service.version;
    serviceEntity.procedure = service.procedure;
    // serviceEntity.serviceFees = service.serviceFees;
    // serviceEntity.processingTimes = service.processingTimes;
    // serviceEntity.serviceDependencies = service.serviceDependencies;
    // serviceEntity.languages = service.languages;
    serviceEntity.applicationForm = service.applicationForm;
    //serviceEntity.serviceResources = service.serviceResources;
    serviceEntity.targetCustomers = service.targetCustomers;
    serviceEntity.status = service.status;
    serviceEntity.isPublic = service.isPublic;
    serviceEntity.isPublished = service.isPublished;
    serviceEntity.isArchived = service.isArchived;
    serviceEntity.tags = service.tags;
    serviceEntity.deliveryMethod = service.deliveryMethod;
    serviceEntity.serviceOwnerId = service.serviceOwnerId;
    serviceEntity.averageRating = service.averageRating;
    serviceEntity.enableReview = service.enableReview;
    serviceEntity.policy = service.policy;
    serviceEntity.publishedOn = service.publishedOn;
    serviceEntity.createdAt = service.createdAt;
    serviceEntity.updatedAt = service.updatedAt;
    return serviceEntity;
  }
  

}