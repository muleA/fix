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

import { Inject, Injectable, Logger } from '@nestjs/common';
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
  private serviceRepository: ServiceRepository) { }

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

  /**
   * A method that invoke a repository method findById() to fetchs a Service from the database by id
   * @param id An id of a Service. A Service with this id should exist in the database
   * @returns A Promise which contain a Specific   Service information
   * See the [definition of the Service file]{@link Service} to see a list of required properties
   */
  async getService(id: string): Promise<Service> {
    return await this.serviceRepository.findById(id);
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
  async updateService(serviceDto: UpdateServiceDto): Promise<void> {
    var service = await this.serviceRepository.findById(serviceDto.id);
    if (service != null) {

      service = UpdateServiceDto.fromDTO(serviceDto);
      await this.serviceRepository.updateService(service.id, service);
    } else {
      throw new Error("Not Found");
    }

    this.logger.log('UpdateServiceUseCases execute', `Service ${service.id} have been updated`);
  }




  async addMedia(createMediaDto: CreateMediaDto) {
    var media = new Media();
    media = CreateMediaDto.fromDTO(createMediaDto);
    this.servicedomain = await this.serviceRepository.findById(createMediaDto.id)
    this.servicedomain.addMedia(media);
    const result = await this.serviceRepository.insertService(this.servicedomain);
    this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
    return result;
  }
  /**
   * A method that update a Media 
   * @param updateMediaDto  An information of  Media 
   * @returns Success Which notify the  Media information updated
  */
  async updateMedia(updateMediaDto: UpdateMediaDto) {
    var media = new Media();
    media = UpdateMediaDto.fromDTO(updateMediaDto);
    this.servicedomain = await this.serviceRepository.findById(updateMediaDto.id)
    this.servicedomain.updateMedia(media);
    const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
    return result;
  }

  /**
   * A method that delete a Media from the database by id
   * @param id An id of a Media. A Media with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async deleteMedia(id: string) {
    await this.servicedomain.removeMedia(id);
    this.logger.log('DeleteMediaUseCases execute', `Media ${id} have been deleted`);
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


  async addServiceFee(createServiceFeeDto: CreateServiceFeeDto) {
    var serviceFee = new ServiceFee();
    serviceFee = CreateServiceFeeDto.fromDTO(createServiceFeeDto);
    this.servicedomain = await this.serviceRepository.findById(createServiceFeeDto.id)
    this.servicedomain.addServiceFee(serviceFee);
    const result = await this.serviceRepository.insertService(this.servicedomain);
    this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
    return result;
  }
  /**
   * A method that update a ServiceFee 
   * @param updateServiceFeeDto  An information of  ServiceFee 
   * @returns Success Which notify the  ServiceFee information updated
  */
  async updateServiceFee(updateServiceFeeDto: UpdateServiceFeeDto) {
    var serviceFee = new ServiceFee();
    serviceFee = UpdateServiceFeeDto.fromDTO(updateServiceFeeDto);
    this.servicedomain = await this.serviceRepository.findById(updateServiceFeeDto.id)
    this.servicedomain.updateServiceFee(serviceFee);
    const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    this.logger.log('CreateServiceFeeUseCases execute', 'New Media have been inserted');
    return result;
  }

  /**
   * A method that delete a ServiceFee from the database by id
   * @param id An id of a ServiceFee. A ServiceFee with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed 
  */
  async deleteServiceFee(id: string) {
    await this.servicedomain.removeServiceFee(id);
    this.logger.log('DeleteServiceFeeUseCases execute', `ServiceFee ${id} have been deleted`);
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


  async addProcessingTime(createProcessingTimeDto: CreateProcessingTimeDto) {
    var processingTime = new ProcessingTime();
    processingTime = CreateProcessingTimeDto.fromDTO(createProcessingTimeDto);
    this.servicedomain = await this.serviceRepository.findById(createProcessingTimeDto.id)
    this.servicedomain.addProcessingTime(processingTime);
    const result = await this.serviceRepository.insertService(this.servicedomain);
    this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
    return result;
  }
  /**
   * A method that update a ProcessingTime 
   * @param updateProcessingTimeDto  An information of  ProcessingTime 
   * @returns Success Which notify the  ProcessingTime information updated
  */
  async updateProcessingTime(updateProcessingTimeDto: UpdateProcessingTimeDto) {
    var processingTime = new ProcessingTime();
    processingTime = UpdateProcessingTimeDto.fromDTO(updateProcessingTimeDto);
    this.servicedomain = await this.serviceRepository.findById(updateProcessingTimeDto.id)
    this.servicedomain.updateProcessingTime(processingTime);
    const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    this.logger.log('CreateProcessingTimeUseCases execute', 'New Media have been inserted');
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


  async addServiceDependency(createServiceDependencyDto: CreateServiceDependencyDto) {
    var serviceDependency = new ServiceDependency();
    serviceDependency = CreateServiceDependencyDto.fromDTO(createServiceDependencyDto);
    this.servicedomain = await this.serviceRepository.findById(createServiceDependencyDto.id)
    this.servicedomain.addServiceDependency(serviceDependency);
    const result = await this.serviceRepository.insertService(this.servicedomain);
    this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
    return result;
  }
  /**
   * A method that update a ServiceDependency 
   * @param updateServiceDependencyDto  An information of  ServiceDependency 
   * @returns Success Which notify the  ServiceDependency information updated
  */
  async updateServiceDependency(updateServiceDependencyDto: UpdateServiceDependencyDto) {
    var serviceDependency = new ServiceDependency();
    serviceDependency = UpdateServiceDependencyDto.fromDTO(updateServiceDependencyDto);
    this.servicedomain = await this.serviceRepository.findById(updateServiceDependencyDto.id)
    this.servicedomain.updateServiceDependency(serviceDependency);
    const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    this.logger.log('CreateServiceDependencyUseCases execute', 'New Media have been inserted');
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


  async addLanguage(createLanguageDto: CreateLanguageDto) {
    var language = new Language();
    language = CreateLanguageDto.fromDTO(createLanguageDto);
    this.servicedomain = await this.serviceRepository.findById(createLanguageDto.id)
    this.servicedomain.addLanguage(language);
    const result = await this.serviceRepository.insertService(this.servicedomain);
    this.logger.log('CreateMediaUseCases execute', 'New Media have been inserted');
    return result;
  }
  /**
   * A method that update a Language 
   * @param updateLanguageDto  An information of  Language 
   * @returns Success Which notify the  Language information updated
  */
  async updateLanguage(updateLanguageDto: UpdateLanguageDto) {
    var language = new Language();
    language = UpdateLanguageDto.fromDTO(updateLanguageDto);
    this.servicedomain = await this.serviceRepository.findById(updateLanguageDto.id)
    this.servicedomain.updateLanguage(language);
    const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    this.logger.log('CreateLanguageUseCases execute', 'New Media have been inserted');
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


  async addServiceResource(createServiceResourceDto: CreateServiceResourceDto) {
    var serviceResource = new ServiceResource();
    serviceResource = CreateServiceResourceDto.fromDTO(createServiceResourceDto);
    this.servicedomain = await this.serviceRepository.findById(createServiceResourceDto.id)
    this.servicedomain.addServiceResource(serviceResource);
    const result = await this.serviceRepository.insertService(this.servicedomain);
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
    serviceResource = UpdateServiceResourceDto.fromDTO(updateServiceResourceDto);
    this.servicedomain = await this.serviceRepository.findById(updateServiceResourceDto.id)
    this.servicedomain.updateServiceResource(serviceResource);
    const result = await this.serviceRepository.updateService(this.servicedomain.id, this.servicedomain);
    this.logger.log('CreateServiceResourceUseCases execute', 'New Media have been inserted');
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