import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { ILogger } from '../../../shared/logger/logger.interface';
import { ServiceOwner } from '../domain/serviceOwners/serviceOwner';
import { IServiceOwnerRepository } from '../domain/serviceOwners/serviceOwner.repository.interface';
import { ServiceOwnerRepository } from '../persistence/serviceOwners/serviceOwner.repository';
import {
  CreateServiceOwnerDto,
  UpdateServiceOwnerDto,
} from '../controllers/serviceOwners/serviceOwner.dto';
@Injectable()
export class ServiceOwnerUseCases {
  private serviceOwnerdomain = new ServiceOwner();
  private readonly logger = new LoggerService('ServiceOwnerService');
  /**
   * A constructor which injects a repository class that used to manage record in the database
   */
  constructor(
    @InjectRepository(ServiceOwnerRepository)
    private serviceOwnerRepository: IServiceOwnerRepository
  ) {}

  /**
   * A method that calls the repository insert method to save  ServiceOwner to databse
   * @param createServiceOwnerDto  An information of  ServiceOwner  that need to be saved
   * @returns Promise<ServiceOwner which contain  created ServiceOwner information
   * See the [definition of the CreateServiceOwnerDto file]{@link CreateServiceOwnerDto} to see a list of required properties
   */
  async createServiceOwner(
    serviceOwnerDto: CreateServiceOwnerDto
  ): Promise<ServiceOwner> {
    let serviceOwner = new ServiceOwner();
    serviceOwner = CreateServiceOwnerDto.fromDTO(serviceOwnerDto);
    const result = await this.serviceOwnerRepository.insertServiceOwner(
      serviceOwner
    );
    this.logger.log(
      'CreateServiceOwnerUseCases execute',
      'New serviceOwner have been inserted'
    );
    return result;
  }
  /**
   * A method that invoke a repository delete method  to  delete a ServiceOwner from the database by id
   * @param id An id of a ServiceOwner. A ServiceOwner with this id should exist in the database
   * @returns void
   */
  async deleteServiceOwner(id: string): Promise<void> {
    await this.serviceOwnerRepository.deleteById(id);
    this.logger.log(
      'DeleteServiceOwnerUseCases execute',
      `ServiceOwner ${id} have been deleted`
    );
  }

  /**
   * A method that invoke a repository method findById() to fetchs a ServiceOwner from the database by id
   * @param id An id of a ServiceOwner. A ServiceOwner with this id should exist in the database
   * @returns A Promise which contain a Specific   ServiceOwner information
   * See the [definition of the ServiceOwner file]{@link ServiceOwner} to see a list of required properties
   */
  async getServiceOwner(id: string): Promise<ServiceOwner> {
    return await this.serviceOwnerRepository.findById(id);
  }

  /**
   * A method that invokes a method findAll() of  repository method to fetchs all ServiceOwner from the database
   * @returns Promise with list of  ServiceOwner which contain  ServiceOwner information
   */
  async fetServiceOwners(): Promise<ServiceOwner[]> {
    return await this.serviceOwnerRepository.findAll();
  }

  /**
   * A method that invokes a repository method updateServiceOwner(serviceOwner) to update a ServiceOwner
   * @param updateServiceOwnerDto  An information of  ServiceOwner
   * @returns no returned data
   */
  async updateServiceOwner(
    serviceOwnerDto: UpdateServiceOwnerDto
  ): Promise<void> {
    let serviceOwner = await this.serviceOwnerRepository.findById(
      serviceOwnerDto.id
    );
    if (serviceOwner != null) {
      serviceOwner = UpdateServiceOwnerDto.fromDTO(serviceOwnerDto);
      await this.serviceOwnerRepository.updateServiceOwner(
        serviceOwner.id,
        serviceOwner
      );
    } else {
      throw new Error('Not Found');
    }

    this.logger.log(
      'UpdateServiceOwnerUseCases execute',
      `ServiceOwner ${serviceOwner.id} have been updated`
    );
  }
}
