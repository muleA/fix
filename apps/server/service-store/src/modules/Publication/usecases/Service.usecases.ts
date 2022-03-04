import { CreateMediaDto, UpdateMediaDto } from '../controllers/services/Media.dto';
import { Media } from '../domain/services/Media';
import { CreateServiceFeeDto, UpdateServiceFeeDto } from '../controllers/services/ServiceFee.dto';
import { ServiceFee } from '../domain/services/ServiceFee';
import { CreateProcessingTimeDto, UpdateProcessingTimeDto } from '../controllers/services/ProcessingTime.dto';
import { ProcessingTime } from '../domain/services/ProcessingTime';
import { CreateServiceDependencyDto, UpdateServiceDependencyDto } from '../controllers/services/ServiceDependency.dto';
import { ServiceDependency } from '../domain/services/ServiceDependency';
import { CreateLanguageDto, UpdateLanguageDto } from '../controllers/services/Language.dto';
import { Language } from '../domain/services/Language';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from '../controllers/services/ServiceResource.dto';
import { ServiceResource } from '../domain/services/ServiceResource';

import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { Service } from '../domain/services/service';
import { IServiceRepository } from '../domain/services/service.repository.interface';
import { ServiceRepository } from '../persistence/services/service.repository';
import { CreateServiceDto, UpdateServiceDto } from '../controllers/services/service.dto';
@Injectable()
export class ServiceUseCases {
  private servicedomain = new Service();
  private readonly logger = new LoggerService('ServiceService');
  /**
  * A constructor which injects a repository class that used to manage record in the database
  */
  constructor(@InjectRepository(ServiceRepository)
  private serviceRepository: IServiceRepository) { }

  /**
   * A method that calls the repository insert method to save  Service to databse
   * @param createServiceDto  An information of  Service  that need to be saved
   * @returns Promise<Service which contain  created Service information
   * See the [definition of the CreateServiceDto file]{@link CreateServiceDto} to see a list of required properties
   */
  async createService(serviceDto: CreateServiceDto): Promise<Service> {
    var service = new Service();
    service = CreateServiceDto.fromDTO(serviceDto);
    const result = await this.serviceRepository.insertService(service);
    this.logger.log('CreateServiceUseCases execute', 'New service have been inserted');
    return result;
  }
  /**
   * A method that invoke a repository delete method  to  delete a Service from the database by id
   * @param id An id of a Service. A Service with this id should exist in the database
   * @returns void 
  */
  async deleteService(id: string): Promise<void> {
    await this.serviceRepository.deleteById(id);
    this.logger.log('DeleteServiceUseCases execute', `Service ${id} have been deleted`);
  }
  async softDeleteService(id: string): Promise<void> {
    await this.serviceRepository.softDeleteById(id);

  }
  async restoreDeleteService(id: string): Promise<void> {
    await this.serviceRepository.restoreDeleteService(id);

  }


  /**
   * A method that invoke a repository method findById() to fetchs a Service from the database by id
   * @param id An id of a Service. A Service with this id should exist in the database
   * @returns A Promise which contain a Specific   Service information
   * See the [definition of the Service file]{@link Service} to see a list of required properties
   */
  async getService(id: string) {
    return await this.serviceRepository.findById(id)
    // {
    //   relations: ['medias', 'serviceFees', 'serviceResources', 'processingTimes', 'serviceDependencies', 'languages']
    // });
  }

  /**
   * A method that invokes a method findAll() of  repository method to fetchs all Service from the database 
   * @returns Promise with list of  Service which contain  Service information
   */
  async fetServices(): Promise<Service[]> {
    return await this.serviceRepository.findAll();
  }

  /**
   * A method that invokes a repository method updateService(service) to update a Service 
   * @param updateServiceDto  An information of  Service 
   * @returns no returned data
   */

  async updateServices(id: string, updateServiceDto: UpdateServiceDto): Promise<void> {
    var service = new Service();
    service = UpdateServiceDto.fromDTO(updateServiceDto);
    const result = await this.serviceRepository.updateServices(id, service);
    this.logger.log('UpdateServiceUseCases execute', ' Service have been Updated');
    return result;
  }

  async addMedia(id: string, createMediaDto: CreateMediaDto): Promise<boolean> {
    this.servicedomain = await this.serviceRepository.findById(id); // this id is service id
    console.log(` service found by id= ${id}`, this.servicedomain);
    if (this.servicedomain) {
      let mediaDomain = CreateMediaDto.fromDTO(createMediaDto);
      console.log(mediaDomain);
      if (!this.servicedomain.medias) {
        this.servicedomain.medias = [];
      }
      this.servicedomain.addMedia(mediaDomain);
      console.log(this.servicedomain);
      const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
      this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
      console.log(result);
      return true;
    }
    return false;
  }


  /**
   * A method that update a Media 
   * @param updateMediaDto  An information of  Media 
   * @returns Success Which notify the  Media information updated
  */
  async updateMedia(serviceId: string, id: string, updateMediaDto: UpdateMediaDto): Promise<void> {
    this.servicedomain = await this.serviceRepository.findById(serviceId);
    let mediaDomain = UpdateMediaDto.fromDTO(updateMediaDto);
    this.servicedomain.updateMedia(mediaDomain);
    console.log(this.servicedomain);
    this.servicedomain.updateMedia(mediaDomain);
    const result = await this.serviceRepository.updateService(id, this.servicedomain);
    this.logger.log('UpdateMediaUseCases execute', ' Media have been Update');
    console.log("Updated Service with media");
    return result;

  }
  /**
   * A method that delete a Media from the database by id
   * @param id An id of a Media. A Media with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */

  async deleteMedia(serviceId: string, id: string): Promise<void> {
    let service = new Service();
    service = await this.serviceRepository.findById(serviceId);
    if (service) {
      await service.removeMedia(id);
      this.serviceRepository.removeAndSaveMedia(service);
      console.log(service);
      this.logger.log('DeleteMediaUseCases execute', `Service id ${serviceId} and Media ${id} have been filtered`);
    }
  }
  /**
   * A method that Remove  and  add  new list of Media to database
   * @param List<createMediaDto> A list of Media to be saved into database 
   * @returns Success Which notify the  Media information saved successfully
  */
  async updateMedias(createMediaDto: CreateMediaDto[]) {
    var media: Media[];
    media = createMediaDto.map(item => {
      return CreateMediaDto.fromDTO(item);
    })
    this.servicedomain = await this.serviceRepository.findById(createMediaDto[0].id)
    await this.servicedomain.updateMedias(media);
    await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
  }


  async addServiceFee(id: string, createServiceFeeDto: CreateServiceFeeDto) {
    this.servicedomain = await this.serviceRepository.findById(id);
    if (this.servicedomain) {
      let serviceFeeDomain = CreateServiceFeeDto.fromDTO(createServiceFeeDto);
      if (!this.servicedomain.serviceFees) {
        this.servicedomain.serviceFees = [];
      }
      this.servicedomain.addServiceFee(serviceFeeDomain);
      const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
      this.logger.log('Create ServiceFee UseCases execute', 'New ServiceFee have been inserted');
      console.log("Service with ServiceFee" + result);
      return true;
    }
    return false;
  }

  /**
   * A method that update a ServiceFee 
   * @param updateServiceFeeDto  An information of  ServiceFee 
   * @returns Success Which notify the  ServiceFee information updated
  */
  async updateServiceFee(serviceId: string, id: string, updateServiceFeeDto: UpdateServiceFeeDto) {
    this.servicedomain = await this.serviceRepository.findById(serviceId);
    let mediaDomain = UpdateServiceFeeDto.fromDTO(updateServiceFeeDto);
    this.servicedomain.updateServiceFee(mediaDomain);
    const result = await this.serviceRepository.updateService(id, this.servicedomain);
    this.logger.log('UpdateServiceFeeUseCases execute', ' serviceFee have been updated');
    return result;
  }

  /**
   * A method that delete a ServiceFee from the database by id
   * @param id An id of a ServiceFee. A ServiceFee with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async deleteServiceFee(serviceId: string, id: string): Promise<void> {
    this.servicedomain = await this.serviceRepository.findById(serviceId);
    if (this.servicedomain) {
      await this.servicedomain.removeServiceFee(id);
      this.serviceRepository.removeAndSaveServiceFee(this.servicedomain);
      console.log(this.servicedomain);
      this.logger.log('DeleteServiceFeeUseCases execute', `ServiceFee ${id} have been deleted`);
    }
  }

  /**
   * A method that Remove  and  add  new list of ServiceFee to database
   * @param List<createServiceFeeDto> A list of ServiceFee to be saved into database 
   * @returns Success Which notify the  ServiceFee information saved successfully
  */
  async updateServiceFees(createServiceFeeDto: CreateServiceFeeDto[]) {
    var serviceFee: ServiceFee[];
    serviceFee = createServiceFeeDto.map(item => {
      return CreateServiceFeeDto.fromDTO(item);
    })
    this.servicedomain = await this.serviceRepository.findById(createServiceFeeDto[0].id)
    await this.servicedomain.updateServiceFees(serviceFee);
    await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
  }


  async addProcessingTime(id: string, createProcessingTimeDto: CreateProcessingTimeDto) {
    this.servicedomain = await this.serviceRepository.findById(id);
    if (this.servicedomain) {
      let createProcessingTime = CreateProcessingTimeDto.fromDTO(createProcessingTimeDto);
      if (!this.servicedomain.processingTimes) {
        this.servicedomain.processingTimes = [];
      }
      this.servicedomain.addProcessingTime(createProcessingTime);
      const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
      console.log("Service with ProcessingTime" + result);
      return true;
    }
    return false;
  }
  /**
   * A method that update a ProcessingTime 
   * @param updateProcessingTimeDto  An information of  ProcessingTime 
   * @returns Success Which notify the  ProcessingTime information updated
  */
  async updateProcessingTime(serviceId: string, id: string, updateProcessingTimeDto: UpdateProcessingTimeDto) {
    this.servicedomain = await this.serviceRepository.findById(serviceId);
    let mediaDomain = UpdateProcessingTimeDto.fromDTO(updateProcessingTimeDto);
    this.servicedomain.updateProcessingTime(mediaDomain);
    const result = await this.serviceRepository.updateService(id, this.servicedomain);
    this.logger.log('UpdateProcessingTimeUseCases execute', 'Processing time has being updated');
    return result;
  }
  /**
   * A method that delete a ProcessingTime from the database by id
   * @param id An id of a ProcessingTime. A ProcessingTime with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async deleteProcessingTime(id: string) {
    await this.servicedomain.removeProcessingTime(id);
    this.logger.log('DeleteProcessingTimeUseCases execute', `ProcessingTime ${id} have been deleted`);
  }

  /**
   * A method that Remove  and  add  new list of ProcessingTime to database
   * @param List<createProcessingTimeDto> A list of ProcessingTime to be saved into database 
   * @returns Success Which notify the  ProcessingTime information saved successfully
  */
  async updateProcessingTimes(createProcessingTimeDto: CreateProcessingTimeDto[]) {
    var processingTime: ProcessingTime[];
    processingTime = createProcessingTimeDto.map(item => {
      return CreateProcessingTimeDto.fromDTO(item);
    })
    this.servicedomain = await this.serviceRepository.findById(createProcessingTimeDto[0].id)
    await this.servicedomain.updateProcessingTimes(processingTime);
    await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
  }


  async addServiceDependency(id: string, createServiceDependencyDto: CreateServiceDependencyDto) {
    this.servicedomain = await this.serviceRepository.findById(id);
    if (this.servicedomain) {
      let createServiceDependency = CreateServiceDependencyDto.fromDTO(createServiceDependencyDto);
      if (!this.servicedomain.serviceDependencies) {
        this.servicedomain.serviceDependencies = [];
      }
      this.servicedomain.addServiceDependency(createServiceDependency);
      const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
      console.log("Service with ServiceDependency" + result);
      return true;
    }
    return false;
  }
  /**
   * A method that update a ServiceDependency 
   * @param updateServiceDependencyDto  An information of  ServiceDependency 
   * @returns Success Which notify the  ServiceDependency information updated
  */
  async updateServiceDependency(serviceId: string, id: string, updateServiceDependencyDto: UpdateServiceDependencyDto) {
    this.servicedomain = await this.serviceRepository.findById(serviceId);
    let mediaDomain = UpdateServiceDependencyDto.fromDTO(updateServiceDependencyDto);
    this.servicedomain.updateServiceDependency(mediaDomain);
    const result = await this.serviceRepository.updateService(id, this.servicedomain);
    this.logger.log('UpdateServiceDependencyUseCases execute', 'Updated service dependency');
    return result;
  }
  /**
   * A method that delete a ServiceDependency from the database by id
   * @param id An id of a ServiceDependency. A ServiceDependency with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async deleteServiceDependency(id: string) {
    await this.servicedomain.removeServiceDependency(id);
    this.logger.log('DeleteServiceDependencyUseCases execute', `ServiceDependency ${id} have been deleted`);
  }

  /**
   * A method that Remove  and  add  new list of ServiceDependency to database
   * @param List<createServiceDependencyDto> A list of ServiceDependency to be saved into database 
   * @returns Success Which notify the  ServiceDependency information saved successfully
  */
  async updateServiceDependencies(createServiceDependencyDto: CreateServiceDependencyDto[]) {
    var serviceDependency: ServiceDependency[];
    serviceDependency = createServiceDependencyDto.map(item => {
      return CreateServiceDependencyDto.fromDTO(item);
    })
    this.servicedomain = await this.serviceRepository.findById(createServiceDependencyDto[0].id)
    await this.servicedomain.updateServiceDependencies(serviceDependency);
    await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
  }


  async addLanguage(id: string, createLanguageDto: CreateLanguageDto) {
    this.servicedomain = await this.serviceRepository.findById(id);
    if (this.servicedomain) {
      let createLanguage = CreateLanguageDto.fromDTO(createLanguageDto);
      if (!this.servicedomain.languages) {
        this.servicedomain.languages = [];
      }
      this.servicedomain.addLanguage(createLanguage);
      const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
      console.log("Service with Language" + result);
      return true;
    }
    return false;
  }
  /**
   * A method that update a Language 
   * @param updateLanguageDto  An information of  Language 
   * @returns Success Which notify the  Language information updated
  */
  async updateLanguage(serviceId: string, id: string, updateLanguageDto: UpdateLanguageDto) {
    this.servicedomain = await this.serviceRepository.findById(serviceId);
    let mediaDomain = UpdateLanguageDto.fromDTO(updateLanguageDto);
    this.servicedomain.updateLanguage(mediaDomain);
    const result = await this.serviceRepository.updateService(id, this.servicedomain);
    this.logger.log('update LanguageUseCases execute', 'Language is updated');
    return result;
  }

  /**
   * A method that delete a Language from the database by id
   * @param id An id of a Language. A Language with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async deleteLanguage(id: string) {
    await this.servicedomain.removeLanguage(id);
    this.logger.log('DeleteLanguageUseCases execute', `Language ${id} have been deleted`);
  }

  /**
   * A method that Remove  and  add  new list of Language to database
   * @param List<createLanguageDto> A list of Language to be saved into database 
   * @returns Success Which notify the  Language information saved successfully
  */
  async updateLanguages(createLanguageDto: CreateLanguageDto[]) {
    var language: Language[];
    language = createLanguageDto.map(item => {
      return CreateLanguageDto.fromDTO(item);
    })
    this.servicedomain = await this.serviceRepository.findById(createLanguageDto[0].id)
    await this.servicedomain.updateLanguages(language);
    await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
  }


  async addServiceResource(id: string, createServiceResourceDto: CreateServiceResourceDto) {
    this.servicedomain = await this.serviceRepository.findById(id);
    if (this.servicedomain) {
      let createServiceResource = CreateServiceResourceDto.fromDTO(createServiceResourceDto);
      if (!this.servicedomain.serviceResources) {
        this.servicedomain.serviceResources = [];
      }
      this.servicedomain.addServiceResource(createServiceResource);
      const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
      console.log("Service with ServiceResource" + result);
      return true;
    }
    return false;
  }
  /**
   * A method that update a ServiceResource 
   * @param updateServiceResourceDto  An information of  ServiceResource 
   * @returns Success Which notify the  ServiceResource information updated
  */
  async updateServiceResource(serviceId: string, id: string, updateServiceResourceDto: UpdateServiceResourceDto) {
    this.servicedomain = await this.serviceRepository.findById(serviceId);
    let mediaDomain = UpdateServiceResourceDto.fromDTO(updateServiceResourceDto);
    this.servicedomain.updateServiceResource(mediaDomain);
    const result = await this.serviceRepository.updateService(id, this.servicedomain);
    this.logger.log('Update ServiceResourceUseCases execute', 'service resource updated');
    return result;
  }

  /**
   * A method that delete a ServiceResource from the database by id
   * @param id An id of a ServiceResource. A ServiceResource with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async deleteServiceResource(id: string) {
    await this.servicedomain.removeServiceResource(id);
    this.logger.log('DeleteServiceResourceUseCases execute', `ServiceResource ${id} have been deleted`);
  }

  /**
   * A method that Remove  and  add  new list of ServiceResource to database
   * @param List<createServiceResourceDto> A list of ServiceResource to be saved into database 
   * @returns Success Which notify the  ServiceResource information saved successfully
  */
  async updateResources(createServiceResourceDto: CreateServiceResourceDto[]) {
    var serviceResource: ServiceResource[];
    serviceResource = createServiceResourceDto.map(item => {
      return CreateServiceResourceDto.fromDTO(item);
    })
    this.servicedomain = await this.serviceRepository.findById(createServiceResourceDto[0].id)
    await this.servicedomain.updateResources(serviceResource);
    await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
  }




}