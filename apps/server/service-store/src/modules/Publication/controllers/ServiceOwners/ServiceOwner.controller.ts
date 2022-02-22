import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceOwnerPresenter } from './serviceOwner.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateServiceOwnerDto, UpdateServiceOwnerDto } from '../serviceOwners/serviceOwner.dto';
import { ServiceOwnerUseCases } from '../../usecases/serviceOwner.usecases';

@Controller('serviceOwners')
@ApiTags('serviceOwners')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ServiceOwnerPresenter)

export class ServiceOwnersController {
/**
*A constructor that injects ServiceOwnerUseCases
*/
constructor(private useCase: ServiceOwnerUseCases) {}
/**
 * A method that fetchs a ServiceOwner from the database by id
 * @param id An id of a ServiceOwner. A ServiceOwner with this id should exist in the database
 * @returns A ServiceOwnerPresenter which contain  ServiceOwner information
 * See the [definition of the ServiceOwnerPresenter file]{@link ServiceOwnerPresenter} to see a list of required properties
 */
@Get('get-serviceOwner')
@ApiResponseType(ServiceOwnerPresenter, false)
async getServiceOwner(@Query() id: string) {
const serviceOwner = await this.useCase.getServiceOwner(id);
return new ServiceOwnerPresenter(serviceOwner);
}
/**
 * A method that fetchs all ServiceOwner from the database 
 * @returns A list of  ServiceOwnerPresenter which contain  ServiceOwner information
 * See the [definition of the ServiceOwnerPresenter file]{@link ServiceOwnerPresenter} to see a list of required properties
 */
@Get('get-serviceOwners')
@ApiResponseType(ServiceOwnerPresenter, true)
async getServiceOwners() {
const serviceOwners = await this.useCase.fetServiceOwners();
return serviceOwners.map((serviceOwner) => new ServiceOwnerPresenter(serviceOwner));
}

/**
 * A method that update a ServiceOwner 
 * @param updateServiceOwnerDto  An information of  ServiceOwner 
 * @returns A ServiceOwnerPresenter which contain  ServiceOwner information
 * See the [definition of the updateServiceOwnerDto file]{@link updateServiceOwnerDto} to see a list of required properties
 */ 
 @Put('update-serviceOwner')
@ApiResponseType(ServiceOwnerPresenter, true)
async updateServiceOwner(@Body() updateServiceOwnerDto: UpdateServiceOwnerDto) {
await this.useCase.updateServiceOwner(updateServiceOwnerDto);
return 'success';
}
/**
 * A method that delete a ServiceOwner from the database by id
 * @param id An id of a ServiceOwner. A ServiceOwner with this id should exist in the database
 * @returns success which  informs the status of the success
*/
@Delete('delete-serviceOwner')
@ApiResponseType(ServiceOwnerPresenter, true)
async deleteServiceOwner(@Query() id: string) {
await this.useCase.deleteServiceOwner(id);
return 'success';
}

/**
 * A method that creates a ServiceOwner 
 * @param createServiceOwnerDto  An information of  ServiceOwner  that need to be saved
 * @returns A ServiceOwnerPresenter which contain  created ServiceOwner information
 * See the [definition of the CreateServiceOwnerDto file]{@link CreateServiceOwnerDto} to see a list of required properties
 */ 
@Post('create-serviceOwner')
@ApiResponseType(ServiceOwnerPresenter, true)
async createServiceOwner(@Body() createServiceOwnerDto: CreateServiceOwnerDto) {
const serviceOwnerCreated = await this.useCase.createServiceOwner( createServiceOwnerDto);
return new ServiceOwnerPresenter(serviceOwnerCreated );
}
  

}