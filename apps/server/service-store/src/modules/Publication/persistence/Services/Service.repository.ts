
import { EntityRepository, getConnection, Repository } from "typeorm";
import { Service } from '../../domain/services/service';
import { IServiceRepository } from '../../domain/services/service.repository.interface';
import { ServiceEntity } from './service.entity';
import { Media } from '../../domain/Services/media';
import { MediaEntity } from './media.entity';
import { string } from "yup/lib/locale";
import { NotFoundException } from "@nestjs/common";
import { UpdateServiceDto } from "../../controllers/services/service.dto";
import { ServiceFeeEntity } from "./ServiceFee.entity";
import { ServiceFee } from "../../domain/services/ServiceFee";
import { ProcessingTimeEntity } from "./ProcessingTime.entity";
import { ProcessingTime } from "../../domain/services/ProcessingTime";
import { Language } from "../../domain/services/Language";
import { LanguageEntity } from "./Language.entity";
import { ServiceDependency } from "../../domain/services/ServiceDependency";
import { ServiceDependencyEntity } from "./ServiceDependency.entity";
import { ServiceResource } from "../../domain/services/ServiceResource";
import { ServiceResourceEntity } from "./ServiceResource.entity";
//@Injectable() 
@EntityRepository(ServiceEntity)
export class ServiceRepository extends Repository<ServiceEntity> implements IServiceRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates Service information in the database 
  * the following singular updateService is used to insert new child entity
  * by updating the service entity and save the new child entity
  */
  async updateService(id: string, service: Service): Promise<void> {
    const serviceEntity = this.toServiceEntity(service);
    await this.save(serviceEntity);
  }

  async updateServices(id: string, updateServiceDto: UpdateServiceDto): Promise<void> {
    const result = await this.update(id, updateServiceDto);
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

  async softDeleteById(id: string): Promise<void> {
    const result = await this.softDelete({ id: id });
    if (!result.affected) {
      throw new NotFoundException(`The id ${id} is not found from the service list`);
    }
  }

  async restoreDeleteService(id: string) {
    const restoreResponse = await this.restore(id);
    if (!restoreResponse.affected) {
      throw new NotFoundException(id);
    }
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
    if (service.medias !== null)
      service.medias = serviceEntity.medias.map(element => { return this.toMedia(element) });
    service.supportedQualifications = serviceEntity.supportedQualifications;
    service.version = serviceEntity.version;
    service.procedure = serviceEntity.procedure;
    if (service.serviceFees !== null)
      service.serviceFees = serviceEntity.serviceFees.map(element => { return this.toServiceFee(element) });
    if (service.processingTimes !== null)
      service.processingTimes = serviceEntity.processingTimes.map(element => { return this.toProcessingTime(element) });

    if (service.serviceDependencies !== null)
      service.serviceDependencies = serviceEntity.serviceDependencies.map(element => { return this.toServiceDependency(element) });
    if (service.languages !== null)
      service.languages = serviceEntity.languages.map(element => { return this.toLanguage(element) });
    if (service.serviceResources !== null)
      service.serviceResources = serviceEntity.serviceResources.map(element => { return this.toServiceResource(element) });

    service.applicationForm = serviceEntity.applicationForm;
    service.targetCustomers = serviceEntity.targetCustomers;
    service.status = serviceEntity.status;
    service.isPublic = serviceEntity.isPublic;
    service.isPublished = serviceEntity.isPublished;
    service.isArchived = serviceEntity.isArchived;
    service.tags = serviceEntity.tags;
    service.deliveryMethod = serviceEntity.deliveryMethod;
    service.serviceOwnerId = serviceEntity.serviceOwner;
    service.averageRating = serviceEntity.averageRating;
    service.enableReview = serviceEntity.enableReview;
    service.policy = serviceEntity.policy;
    service.publishedOn = serviceEntity.publishedOn;
    service.createdBy = serviceEntity.createdBy;
    service.updatedBy = serviceEntity.updatedBy;
    return service;
  }

  /**
 * A method that maps Media Entity object to Media domain object
 *@param mediaEntity An Media which comprises service id 
 *@returns A Service which contain  Service information
 */

  private toMedia(mediaEntity: MediaEntity): Media {
    let media = new Media();
    media.id = mediaEntity.id;
    media.serviceId = mediaEntity.serviceId;
    media.url = mediaEntity.url;
    media.caption = mediaEntity.caption;
    media.type = mediaEntity.type;
    media.createdBy = mediaEntity.createdBy;
    media.updatedBy = mediaEntity.updatedBy;
    console.log(media);
    return media;
  }

  /**
  * A method that maps ServiceFee Entity object to ServiceFee domain object
  *@param ServiceFeeEntity An ServiceFee which comprises service id 
  *@returns A Service which contain  Service information
  */
  private toServiceFee(serviceFeeEntity: ServiceFeeEntity): ServiceFee {
    let serviceFee = new ServiceFee();
    serviceFee.id = serviceFeeEntity.id;
    serviceFee.serviceId = serviceFeeEntity.serviceId;
    serviceFee.fee = serviceFeeEntity.fee;
    serviceFee.currency = serviceFeeEntity.currency;
    serviceFee.description = serviceFeeEntity.description;
    serviceFee.createdBy = serviceFeeEntity.createdBy;
    serviceFee.updatedBy = serviceFeeEntity.updatedBy;
    return serviceFee;
  }

  private toProcessingTime(processingTimeEntity: ProcessingTimeEntity): ProcessingTime {
    let processingTime = new ProcessingTime();
    processingTime.id = processingTimeEntity.id;
    processingTime.serviceId = processingTimeEntity.serviceId;
    processingTime.time = processingTimeEntity.time;
    processingTime.currency = processingTimeEntity.currency;
    processingTime.description = processingTimeEntity.description;
    processingTime.createdBy = processingTimeEntity.createdBy;
    processingTime.updatedBy = processingTimeEntity.updatedBy;
    // console.log(processingTime);
    return processingTime;
  }


  private toServiceDependency(serviceDependencyEntity: ServiceDependencyEntity): ServiceDependency {
    let serviceDependency = new ServiceDependency();
    serviceDependency.id = serviceDependencyEntity.id;
    serviceDependency.serviceId = serviceDependencyEntity.serviceId;
    serviceDependency.dependsOn = serviceDependencyEntity.dependsOn;
    serviceDependency.type = serviceDependencyEntity.type;
    serviceDependency.createdBy = serviceDependencyEntity.createdBy;
    serviceDependency.updatedBy = serviceDependencyEntity.updatedBy;
    return serviceDependency;
  }

  private toLanguage(languageEntity: LanguageEntity): Language {
    let language = new Language();
    language.id = languageEntity.id;
    language.serviceId = languageEntity.serviceId;
    language.name = languageEntity.name;
    language.code = languageEntity.code;
    language.createdBy = languageEntity.createdBy;
    language.updatedBy = languageEntity.updatedBy;
    return language;
  }

  private toServiceResource(serviceResourceEntity: ServiceResourceEntity): ServiceResource {
    let serviceResource = new ServiceResource();
    serviceResource.id = serviceResourceEntity.id;
    serviceResource.serviceId = serviceResourceEntity.serviceId;
    serviceResource.attachmentUrl = serviceResourceEntity.attachmentUrl;
    serviceResource.content = serviceResourceEntity.content;
    serviceResource.createdBy = serviceResourceEntity.createdBy;
    serviceResource.updatedBy = serviceResourceEntity.updatedBy;
    return serviceResource;
  }

  /**
   *A method that copy Service data to a ServiceEntity   object 
   *@param service An service which comprises  Service information
   *@returns A Service which contain  Service information
   */

  private toServiceEntity(service: Service): ServiceEntity {
    const serviceEntity: ServiceEntity = new ServiceEntity();
    // serviceEntity.id = service.id;
    serviceEntity.name = service.name;
    serviceEntity.description = service.description;
    serviceEntity.code = service.code;
    serviceEntity.fullyQualifiedName = service.fullyQualifiedName;
    /**
     * The if statement is used to determine whether or not
     *  the child object has a value. 
     * We can map a child to the parent entity => service entity if it has a value; 
     * otherwise, we can't pass anything about the child entity => media.
     */
    if (service.medias !== null) {
      serviceEntity.medias = service.medias.map(element => { return this.toMediaEntity(element) });
    }
    serviceEntity.supportedQualifications = service.supportedQualifications;
    serviceEntity.version = service.version;
    serviceEntity.procedure = service.procedure;
    /**
 * The if statement is used to determine whether or not
 *  the child object has a value. 
 * We can map a child to the parent entity => service entity if it has a value; 
 * otherwise, we can't pass anything about the child entity => serviceFees.
 */
    if (service.serviceFees !== null) {
      serviceEntity.serviceFees = service.serviceFees.map(element => { return this.toServiceFeeEntity(element) });
    }


    if (service.processingTimes !== null) {
      serviceEntity.processingTimes = service.processingTimes.map(element => { return this.toProcessingTimeEntity(element) });
    }

    if (service.serviceDependencies !== null) {
      serviceEntity.serviceDependencies = service.serviceDependencies.map(element => { return this.toServiceDependencyEntity(element) });
    }


    if (service.languages !== null) {
      serviceEntity.languages = service.languages.map(element => { return this.toLanguageEntity(element) });
    }
    serviceEntity.applicationForm = service.applicationForm;

    if (service.serviceResources) {
      serviceEntity.serviceResources = service.serviceResources.map(element => { return this.toServiceResourceEntity(element) });
    }
    serviceEntity.targetCustomers = service.targetCustomers;
    serviceEntity.status = service.status;
    serviceEntity.isPublic = service.isPublic;
    serviceEntity.isPublished = service.isPublished;
    serviceEntity.isArchived = service.isArchived;
    serviceEntity.tags = service.tags;
    serviceEntity.deliveryMethod = service.deliveryMethod;
    serviceEntity.serviceOwner = service.serviceOwnerId;
    serviceEntity.averageRating = service.averageRating;
    serviceEntity.enableReview = service.enableReview;
    serviceEntity.policy = service.policy;
    serviceEntity.publishedOn = service.publishedOn;
    serviceEntity.createdBy = service.createdBy;
    serviceEntity.updatedBy = service.updatedBy;
    return serviceEntity;
  }


  /**
* A method that maps Media Entity object to Media domain object
*@param Media A Media domain model object which compraises  service id 
*@returns A mediaentity which contain  Media  information service id
*/
  private toMediaEntity(media: Media): MediaEntity {
    const mediaEntity: MediaEntity = new MediaEntity();
    mediaEntity.serviceId = media.serviceId;
    mediaEntity.id = media.id;
    mediaEntity.url = media.url;
    mediaEntity.caption = media.caption;
    mediaEntity.type = media.type;
    mediaEntity.createdBy = media.createdBy;
    mediaEntity.updatedBy = media.updatedBy;
    return mediaEntity;
  }
  /**
 * A method that maps ServiceFee Entity object to ServiceFee domain object
 *@param ServiceFee A ServiceFee domain model object which compraises  service id 
 *@returns A serviceFeeentity which contain  ServiceFee  information service id
 */
  private toServiceFeeEntity(serviceFee: ServiceFee): ServiceFeeEntity {
    const serviceFeeEntity: ServiceFeeEntity = new ServiceFeeEntity();
    serviceFeeEntity.serviceId = serviceFee.serviceId;
    serviceFeeEntity.id = serviceFee.id;
    serviceFeeEntity.fee = serviceFee.fee;
    serviceFeeEntity.currency = serviceFee.currency;
    serviceFeeEntity.description = serviceFee.description;
    serviceFeeEntity.createdBy = serviceFee.createdBy;
    serviceFeeEntity.updatedBy = serviceFee.updatedBy;
    return serviceFeeEntity;
  }

  private toProcessingTimeEntity(processingTime: ProcessingTime): ProcessingTimeEntity {
    const processingTimeEntity: ProcessingTimeEntity = new ProcessingTimeEntity();
    processingTimeEntity.serviceId = processingTime.serviceId;
    processingTimeEntity.id = processingTime.id;
    processingTimeEntity.time = processingTime.time;
    processingTimeEntity.currency = processingTime.currency;
    processingTimeEntity.description = processingTime.description;
    processingTimeEntity.createdBy = processingTime.createdBy;
    processingTimeEntity.updatedBy = processingTime.updatedBy;
    return processingTimeEntity;
  }

  private toServiceDependencyEntity(serviceDependency: ServiceDependency): ServiceDependencyEntity {
    const serviceDependencyEntity: ServiceDependencyEntity = new ServiceDependencyEntity();
    serviceDependencyEntity.serviceId = serviceDependency.serviceId;
    serviceDependencyEntity.id = serviceDependency.id;
    serviceDependencyEntity.dependsOn = serviceDependency.dependsOn;
    serviceDependencyEntity.type = serviceDependency.type;
    serviceDependencyEntity.createdBy = serviceDependency.createdBy;
    serviceDependencyEntity.updatedBy = serviceDependency.updatedBy;
    return serviceDependencyEntity;
  }

  private toLanguageEntity(language: Language): LanguageEntity {
    const languageEntity: LanguageEntity = new LanguageEntity();
    languageEntity.serviceId = language.serviceId;
    languageEntity.id = language.id;
    languageEntity.name = language.name;
    languageEntity.code = language.code;
    languageEntity.createdBy = language.createdBy;
    languageEntity.updatedBy = language.updatedBy;
    return languageEntity;
  }

  private toServiceResourceEntity(serviceResource: ServiceResource): ServiceResourceEntity {
    const serviceResourceEntity: ServiceResourceEntity = new ServiceResourceEntity();
    serviceResourceEntity.serviceId = serviceResource.serviceId;
    serviceResourceEntity.id = serviceResource.id;
    serviceResourceEntity.attachmentUrl = serviceResource.attachmentUrl;
    serviceResourceEntity.content = serviceResource.content;
    serviceResourceEntity.createdBy = serviceResource.createdBy;
    serviceResourceEntity.updatedBy = serviceResource.updatedBy;
    return serviceResourceEntity;
  }



  async removeAndSaveMedias(service: Service) {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(MediaEntity)
      .where("serviceId:serviceId", { serviceId: service.id })
      .execute();
    const serviceEntity = this.toServiceEntity(service);
    let result = await this.save(serviceEntity);
    return this.toService(result);
  }


}
