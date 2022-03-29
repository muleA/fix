import { ServiceEntryPresenter } from './ServiceEntry.presenter';
import { CreateServiceEntryDto, UpdateServiceEntryDto } from './ServiceEntry.dto';
import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query, Param, Patch } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceCollectionPresenter } from './serviceCollection.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateServiceCollectionDto, UpdateServiceCollectionDto } from '../serviceCollections/serviceCollection.dto';
import { ServiceCollectionUseCases } from '../../usecases/serviceCollection.usecases';
import { ServiceResourcePresenter } from './ServiceResource.presenter';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from './ServiceResource.dto';
@Controller('service-collections')
@ApiTags('service-collections')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ServiceCollectionPresenter)
export class ServiceCollectionsController {
    /**
    *A constructor that injects ServiceCollectionUseCases
    */
    defaultUserName: string = "95d50138-333e-4451-a51d-a6568d0561bd";
    constructor(private useCase: ServiceCollectionUseCases) { }
    /**
     * A method that fetchs a ServiceCollection from the database by id
     * @param id An id of a ServiceCollection. A ServiceCollection with this id should exist in the database
     * @returns A ServiceCollectionPresenter which contain  ServiceCollection information
     * See the [definition of the ServiceCollectionPresenter file]{@link ServiceCollectionPresenter} to see a list of required properties
     */
    @Get('get-service-collection/:id')
    @ApiResponseType(ServiceCollectionPresenter, false)
    async getServiceCollection(@Param('id') id: string) {
        const serviceCollection = await this.useCase.getServiceCollection(id);
        // return new ServiceCollectionPresenter(serviceCollection);
        return serviceCollection;
    }
    /**
     * A method that fetchs all ServiceCollection from the database 
     * @returns A list of  ServiceCollectionPresenter which contain  ServiceCollection information
     * See the [definition of the ServiceCollectionPresenter file]{@link ServiceCollectionPresenter} to see a list of required properties
     */
    @Get('get-service-collections')
    @ApiResponseType(ServiceCollectionPresenter, true)
    async getServiceCollections() {
        const serviceCollections = await this.useCase.fetServiceCollections();
        return serviceCollections;
        // return serviceCollections.map((serviceCollection) => new ServiceCollectionPresenter(serviceCollection));
    }
    /**
     * A method that update a ServiceCollection 
     * @param updateServiceCollectionDto  An information of  ServiceCollection 
     * @returns A ServiceCollectionPresenter which contain  ServiceCollection information
     * See the [definition of the updateServiceCollectionDto file]{@link updateServiceCollectionDto} to see a list of required properties
     */
    @Put('update-service-collection/:id')
    @ApiResponseType(ServiceCollectionPresenter, true)
    async updateServiceCollection(@Param('id') id: string, @Body() updateServiceCollectionDto: UpdateServiceCollectionDto) {
        await this.useCase.updateServiceCollection(id, updateServiceCollectionDto);
        return 'success';
    }
    /**
     * A method that delete a ServiceCollection from the database by id
     * @param id An id of a ServiceCollection. A ServiceCollection with this id should exist in the database
     * @returns success which  informs the status of the success
    */
    @Delete('delete-service-collection/:id')
    @ApiResponseType(ServiceCollectionPresenter, true)
    async deleteServiceCollection(@Param('id') id: string) {
        await this.useCase.deleteServiceCollection(id);
        return 'success';
    }
    /**
     * A method that creates a ServiceCollection 
     * @param createServiceCollectionDto  An information of  ServiceCollection  that need to be saved
     * @returns A ServiceCollectionPresenter which contain  created ServiceCollection information
     * See the [definition of the CreateServiceCollectionDto file]{@link CreateServiceCollectionDto} to see a list of required properties
     */
    @Post('create-service-collection')
    @ApiResponseType(ServiceCollectionPresenter, true)
    async createServiceCollection(@Body() createServiceCollectionDto: CreateServiceCollectionDto) {
        createServiceCollectionDto.createdBy = this.defaultUserName;
        createServiceCollectionDto.updatedBy = this.defaultUserName;
        const serviceCollectionCreated = await this.useCase.createServiceCollection(createServiceCollectionDto);
        // return new ServiceCollectionPresenter(serviceCollectionCreated );
        return serviceCollectionCreated;
    }
    @Post('add-service-entry')
    @ApiResponseType(ServiceEntryPresenter, true)
    async addServiceEntry(@Body() createServiceEntryDto: CreateServiceEntryDto) {
        const serviceEntryCreated = await this.useCase.addServiceEntry(createServiceEntryDto);
        return new ServiceCollectionPresenter(serviceEntryCreated);
    }
    /**
     * A method that update a ServiceEntry 
     * @param updateServiceEntryDto  An information of  ServiceEntry 
     * @returns Success Which notify the  ServiceEntry information updated
    */
    @Put('edit-service-entry')
    @ApiResponseType(ServiceEntryPresenter, true)
    async editServiceEntry(@Body() createServiceEntryDto: UpdateServiceEntryDto) {
        await this.useCase.updateServiceEntry(createServiceEntryDto);
        return 'success';
    }
    /**
     * A method that delete a ServiceEntry from the database by id
     * @param id An id of a ServiceEntry. A ServiceEntry with this id should exist in the database
     * @returns success which  informs the status of the remove operation successed 
    */
    @Delete('remove-service-entry')
    @ApiResponseType(ServiceEntryPresenter, true)
    async removeServiceEntry(@Query() id: string) {
        await this.useCase.deleteServiceEntry(id);
        return 'success';
    }
    /**
     * A method that Remove  and  add  new list of ServiceEntry to database
     * @param List<createServiceEntryDto> A list of ServiceEntry to be saved into database 
     * @returns Success Which notify the  ServiceEntry information saved successfully
    */
    @Put('update-service-entries')
    @ApiResponseType(ServiceEntryPresenter, true)
    async updateServiceEntry(@Body() createServiceEntryDto: CreateServiceEntryDto[]) {
        await this.useCase.updateServiceEntries(createServiceEntryDto);
        return 'success';
    }


    @Post('add-service-collection-resource/:serviceCollectionId')
    @ApiResponseType(ServiceResourcePresenter, true)
    async addServiceResource(@Param('serviceCollectionId') serviceCollectionId: string, @Body() createServiceResourceDto: CreateServiceResourceDto) {
        createServiceResourceDto.createdBy = this.defaultUserName;
        createServiceResourceDto.updatedBy = this.defaultUserName;
        const serviceResourceCreated = await this.useCase.addServiceResource(serviceCollectionId, createServiceResourceDto);
        // return new ServicePresenter(serviceResourceCreated);
        return "Added Service Resource";
    }

    /**
     * A method that update a ServiceResource 
     * @param updateServiceResourceDto  An information of  ServiceResource 
     * @returns Success Which notify the  ServiceResource information updated
    */

    @Patch('edit-resource/:serviceCollectionId/:id')
    @ApiResponseType(ServiceResourcePresenter, true)
    async editServiceResource(@Param('serviceCollectionId') serviceCollectionId: string, id: string, @Body() updateServiceResourceDto: UpdateServiceResourceDto) {
        updateServiceResourceDto.id = id;
        await this.useCase.updateServiceResource(serviceCollectionId, id, updateServiceResourceDto);
        return 'success';
    }
    /**
     * A method that delete a ServiceResource from the database by id
     * @param id An id of a ServiceResource. A ServiceResource with this id should exist in the database
     * @returns success which  informs the status of the remove operation successed 
    */
    @Delete('remove-service-resource')
    @ApiResponseType(ServiceResourcePresenter, true)
    async removeServiceResource(@Query() id: string) {
        await this.useCase.deleteServiceResource(id);
        return 'success';
    }
    /**
     * A method that Remove  and  add  new list of ServiceResource to database
     * @param List<createServiceResourceDto> A list of ServiceResource to be saved into database 
     * @returns Success Which notify the  ServiceResource information saved successfully
    */
    @Put('update-service-collection-resources')
    @ApiResponseType(ServiceResourcePresenter, true)
    async updateServiceResource(@Body() createServiceResourceDto: CreateServiceResourceDto[]) {
        await this.useCase.updateResources(createServiceResourceDto);
        return 'success';
    }
}