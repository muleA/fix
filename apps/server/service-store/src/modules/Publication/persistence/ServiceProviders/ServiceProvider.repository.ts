import { EntityRepository, Repository } from 'typeorm';
import { DelegatedService } from '../../domain/serviceProviders/DelegatedService';
import { ServiceProvider } from '../../domain/serviceProviders/serviceProvider';
import { IServiceProviderRepository } from '../../domain/serviceProviders/serviceProvider.repository.interface';
import { DelegatedServiceEntity } from './DelegatedService.entity';
import { ServiceProviderEntity } from './serviceProvider.entity';

//@Injectable()
@EntityRepository(ServiceProviderEntity)
export class ServiceProviderRepository
  extends Repository<ServiceProviderEntity>
  implements IServiceProviderRepository {
  constructor() {
    super();
  }
  /**
   * A method that updates ServiceProvider information in the database
   */
  async updateServiceProvider(
    id: string,
    serviceProvider: ServiceProvider
  ): Promise<void> {
    const serviceProviderEntity = this.toServiceProviderEntity(serviceProvider);
    await this.update({ id: serviceProvider.id }, serviceProviderEntity);
  }

  /**
   * A method that inserts ServiceProviderEntity  into  database
   *
   */
  async insertServiceProvider(
    serviceProvider: ServiceProvider
  ): Promise<ServiceProvider> {
    const serviceProviderEntity = this.toServiceProviderEntity(serviceProvider);
    const result = await this.insert(serviceProviderEntity);
    console.log(result.generatedMaps);
    return this.toServiceProvider(
      result.generatedMaps[0] as ServiceProviderEntity
    );
  }
  /**
   * A method that fetches all ServiceProviders from the database
   *
   */
  async findAll(): Promise<ServiceProvider[]> {
    const serviceProvidersEntity = await this.find();
    return serviceProvidersEntity.map((serviceProviderEntity) =>
      this.toServiceProvider(serviceProviderEntity)
    );
  }
  /**
   * A method that fetches a specific ServiceProvider by id  from the database
   *@param  an Id of ServiceProvider
   *@returns A Promise of ServiceProvider
   */
  async findById(id: string): Promise<ServiceProvider> {
    const serviceProviderEntity = await this.findOneOrFail(id, {
      relations: ['delegatedServices'],
    });
    return this.toServiceProvider(serviceProviderEntity);
  }
  /**
   * A method that deletes a specific ServiceProvider by id from the database
   *@param  an Id of ServiceProvider
   */
  async deleteById(id: string): Promise<void> {
    await this.delete({ id: id });
  }
  /**
   *A method that copy ServiceProviderEntity data  a  ServiceProvider domain
   *@param serviceProviderEntity which compraises  ServiceProvider information
   *@returns ServiceProvider information
   */
  private toServiceProvider(
    serviceProviderEntity: ServiceProviderEntity
  ): ServiceProvider {
    const serviceProvider: ServiceProvider = new ServiceProvider();
    serviceProvider.id = serviceProviderEntity.id;
    serviceProvider.shortName = serviceProviderEntity.shortName;
    serviceProvider.fullName = serviceProviderEntity.fullName;
    serviceProvider.sector = serviceProviderEntity.sector;
    serviceProvider.contactInfo = serviceProviderEntity.contactInfo;
    serviceProvider.location = serviceProviderEntity.location;
    serviceProvider.address = serviceProviderEntity.address;
    serviceProvider.delegatedServices = serviceProviderEntity.delegatedServices
      ? serviceProviderEntity.delegatedServices.map((element) => {
          return this.toDelegatedService(element);
        })
      : [];
    serviceProvider.code = serviceProviderEntity.code;
    serviceProvider.organizationId = serviceProviderEntity.organizationId;
    serviceProvider.organizationName = serviceProviderEntity.organizationName;
    serviceProvider.createdAt = serviceProviderEntity.createdAt;
    serviceProvider.updatedAt = serviceProviderEntity.updatedAt;
    serviceProvider.deletedAt = serviceProviderEntity.deletedAt;

    serviceProvider.createdBy = serviceProviderEntity.createdBy;
    serviceProvider.updatedBy = serviceProviderEntity.updatedBy;
    serviceProvider.deletedBy = serviceProviderEntity.deletedBy;
    return serviceProvider;
  }
  /**
   *A method that copy ServiceProvider data to a ServiceProviderEntity   object
   *@param serviceProvider An serviceProvider which compraises  ServiceProvider information
   *@returns A ServiceProvider which contain  ServiceProvider information
   */

  private toServiceProviderEntity(
    serviceProvider: ServiceProvider
  ): ServiceProviderEntity {
    const serviceProviderEntity: ServiceProviderEntity = new ServiceProviderEntity();
    serviceProviderEntity.id = serviceProvider.id;
    serviceProviderEntity.shortName = serviceProvider.shortName;
    serviceProviderEntity.fullName = serviceProvider.fullName;
    serviceProviderEntity.sector = serviceProvider.sector;
    serviceProviderEntity.contactInfo = serviceProvider.contactInfo;
    serviceProviderEntity.location = serviceProvider.location;
    serviceProviderEntity.address = serviceProvider.address;
    serviceProviderEntity.delegatedServices = serviceProvider.delegatedServices
      ? serviceProvider.delegatedServices.map((element) => {
          return this.toDelegatedServiceEntity(element);
        })
      : [];
    serviceProviderEntity.code = serviceProvider.code;
    serviceProviderEntity.organizationId = serviceProvider.organizationId;
    serviceProviderEntity.organizationName = serviceProvider.organizationName;
    serviceProviderEntity.createdBy = serviceProvider.createdBy;
    serviceProviderEntity.updatedBy = serviceProvider.updatedBy;
    serviceProviderEntity.deletedBy = serviceProvider.deletedBy;
    // serviceProviderEntity.createdAt = serviceProvider.createdAt;
    // serviceProviderEntity.updatedAt = serviceProvider.updatedAt;
    // serviceProviderEntity.deletedAt = serviceProvider.deletedAt;
    return serviceProviderEntity;
  }

  private toDelegatedServiceEntity(
    delegatedService: DelegatedService
  ): DelegatedServiceEntity {
    const delegatedServiceEntity: DelegatedServiceEntity = new DelegatedServiceEntity();
    delegatedServiceEntity.serviceId = delegatedService.serviceId;
    delegatedServiceEntity.id = delegatedService.id;
    //delegatedServiceEntity.providerId = delegatedService.providerId;
    delegatedServiceEntity.serviceId = delegatedService.serviceId;
    delegatedServiceEntity.title = delegatedService.title;
    delegatedServiceEntity.dispatchingRule = delegatedService.dispatchingRule;
    delegatedServiceEntity.status = delegatedService.status;

    delegatedServiceEntity.createdBy = delegatedService.createdBy;
    delegatedServiceEntity.updatedBy = delegatedService.updatedBy;
    delegatedServiceEntity.deletedBy = delegatedService.deletedBy;

    delegatedServiceEntity.createdAt = delegatedService.createdAt;
    delegatedServiceEntity.updatedAt = delegatedService.updatedAt;
    delegatedServiceEntity.deletedAt = delegatedService.deletedAt;
    return delegatedServiceEntity;
  }
  private toDelegatedService(
    delegatedServiceEntity: DelegatedServiceEntity
  ): DelegatedService {
    const delegatedService = new DelegatedService();
    delegatedService.id = delegatedServiceEntity.id;
    delegatedService.serviceId = delegatedServiceEntity.serviceId;
    //delegatedService.providerId = delegatedServiceEntity.providerId;
    delegatedService.title = delegatedServiceEntity.title;
    delegatedService.dispatchingRule = delegatedServiceEntity.dispatchingRule;
    delegatedService.status = delegatedServiceEntity.status;

    delegatedService.createdBy = delegatedServiceEntity.createdBy;
    delegatedService.updatedBy = delegatedServiceEntity.updatedBy;
    delegatedService.deletedBy = delegatedServiceEntity.deletedBy;

    delegatedService.createdBy = delegatedServiceEntity.createdBy;
    delegatedService.updatedBy = delegatedServiceEntity.updatedBy;
    delegatedService.deletedAt = delegatedServiceEntity.deletedAt;
    return delegatedService;
  }
}
