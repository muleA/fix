import { DelegatedServicePresenter } from './DelegatedService.presenter';
import {
  CreateDelegatedServiceDto,
  DeleteDelegateServiceDto,
  UpdateDelegatedServiceDto,
} from './DelegatedService.dto';

import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Param,
} from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceProviderPresenter } from './serviceProvider.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import {
  CreateServiceProviderDto,
  UpdateServiceProviderDto,
} from '../serviceProviders/serviceProvider.dto';
import { ServiceProviderUseCases } from '../../usecases/serviceProvider.usecases';

@Controller('service-providers')
@ApiTags('service-providers')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ServiceProviderPresenter)
export class ServiceProvidersController {
  /**
   *A constructor that injects ServiceProviderUseCases
   */
  constructor(private useCase: ServiceProviderUseCases) {}
  /**
   * A method that fetchs a ServiceProvider from the database by id
   * @param id An id of a ServiceProvider. A ServiceProvider with this id should exist in the database
   * @returns A ServiceProviderPresenter which contain  ServiceProvider information
   * See the [definition of the ServiceProviderPresenter file]{@link ServiceProviderPresenter} to see a list of required properties
   */
  @Get('get-service-provider/:id')
  @ApiResponseType(ServiceProviderPresenter, false)
  async getServiceProvider(@Param('id') id: string) {
    const serviceProvider = await this.useCase.getServiceProvider(id);
    return new ServiceProviderPresenter(serviceProvider);
  }
  /**
   * A method that fetchs all ServiceProvider from the database
   * @returns A list of  ServiceProviderPresenter which contain  ServiceProvider information
   * See the [definition of the ServiceProviderPresenter file]{@link ServiceProviderPresenter} to see a list of required properties
   */
  @Get('get-service-providers')
  @ApiResponseType(ServiceProviderPresenter, true)
  async getServiceProviders() {
    const serviceProviders = await this.useCase.fetServiceProviders();
    return serviceProviders.map(
      (serviceProvider) => new ServiceProviderPresenter(serviceProvider)
    );
  }

  /**
   * A method that update a ServiceProvider
   * @param updateServiceProviderDto  An information of  ServiceProvider
   * @returns A ServiceProviderPresenter which contain  ServiceProvider information
   * See the [definition of the updateServiceProviderDto file]{@link updateServiceProviderDto} to see a list of required properties
   */
  @Put('update-service-provider')
  @ApiResponseType(ServiceProviderPresenter, true)
  async updateServiceProvider(
    @Body() updateServiceProviderDto: UpdateServiceProviderDto
  ) {
    await this.useCase.updateServiceProvider(updateServiceProviderDto);
    return 'success';
  }
  /**
   * A method that delete a ServiceProvider from the database by id
   * @param id An id of a ServiceProvider. A ServiceProvider with this id should exist in the database
   * @returns success which  informs the status of the success
   */
  @Delete('delete-service-provider')
  @ApiResponseType(ServiceProviderPresenter, true)
  async deleteServiceProvider(@Query() id: string) {
    await this.useCase.deleteServiceProvider(id);
    return 'success';
  }

  /**
   * A method that creates a ServiceProvider
   * @param createServiceProviderDto  An information of  ServiceProvider  that need to be saved
   * @returns A ServiceProviderPresenter which contain  created ServiceProvider information
   * See the [definition of the CreateServiceProviderDto file]{@link CreateServiceProviderDto} to see a list of required properties
   */
  @Post('create-service-provider')
  @ApiResponseType(ServiceProviderPresenter, true)
  async createServiceProvider(
    @Body() createServiceProviderDto: CreateServiceProviderDto
  ) {
    const serviceProviderCreated = await this.useCase.createServiceProvider(
      createServiceProviderDto
    );
    return new ServiceProviderPresenter(serviceProviderCreated);
  }

  @Post('add-delegated-service')
  @ApiResponseType(DelegatedServicePresenter, true)
  async addDelegatedService(
    @Body() createDelegatedServiceDto: CreateDelegatedServiceDto
  ) {
    await this.useCase.addDelegatedService(createDelegatedServiceDto);
    return true;
  }
  /**
   * A method that update a DelegatedService
   * @param updateDelegatedServiceDto  An information of  DelegatedService
   * @returns Success Which notify the  DelegatedService information updated
   */
  @Put('edit-delegated-service')
  @ApiResponseType(DelegatedServicePresenter, true)
  async editDelegatedService(
    @Body() createDelegatedServiceDto: UpdateDelegatedServiceDto
  ) {
    await this.useCase.updateDelegatedService(createDelegatedServiceDto);
    return 'success';
  }

  /**
   * A method that delete a DelegatedService from the database by id
   * @param id An id of a DelegatedService. A DelegatedService with this id should exist in the database
   * @returns success which  informs the status of the remove operation successed
   */
  @Delete('remove-delegated-service')
  @ApiResponseType(DelegatedServicePresenter, true)
  async removeDelegatedService(@Query() query: DeleteDelegateServiceDto) {
    if (query.id && query.serviceProviderId) {
      console.log(query);
      await this.useCase.deleteDelegatedService(query);
      return 'success';
    }

    return 'failed';
  }

  /**
   * A method that Remove  and  add  new list of DelegatedService to database
   * @param List<createDelegatedServiceDto> A list of DelegatedService to be saved into database
   * @returns Success Which notify the  DelegatedService information saved successfully
   */
  @Put('update-delegated-services')
  @ApiResponseType(DelegatedServicePresenter, true)
  async updateDelegatedService(
    @Body() createDelegatedServiceDto: CreateDelegatedServiceDto[]
  ) {
    await this.useCase.updateDelegatedServices(createDelegatedServiceDto);
    return 'success';
  }
}
