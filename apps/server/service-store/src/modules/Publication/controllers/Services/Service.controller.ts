import { MediaPresenter } from './Media.presenter';
import { CreateMediaDto, DeleteMediaDto, UpdateMediaDto } from './Media.dto';
import { ServiceFeePresenter } from './ServiceFee.presenter';
import { CreateServiceFeeDto, UpdateServiceFeeDto } from './ServiceFee.dto';
import { ProcessingTimePresenter } from './ProcessingTime.presenter';
import { CreateProcessingTimeDto, UpdateProcessingTimeDto } from './ProcessingTime.dto';
import { ServiceDependencyPresenter } from './ServiceDependency.presenter';
import { CreateServiceDependencyDto, UpdateServiceDependencyDto } from './ServiceDependency.dto';
import { LanguagePresenter } from './Language.presenter';
import { CreateLanguageDto, UpdateLanguageDto } from './Language.dto';
import { ServiceResourcePresenter } from './ServiceResource.presenter';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from './ServiceResource.dto';

import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServicePresenter } from './service.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateServiceDto, UpdateServiceDto } from '../services/service.dto';
import { ServiceUseCases } from '../../usecases/service.usecases';
import { ServiceEntity } from '../../persistence/services/service.entity';

@Controller('services')
@ApiTags('services')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ServicePresenter)

export class ServicesController {
   /**
   *A constructor that injects ServiceUseCases
   */
   constructor(private useCase: ServiceUseCases) { }
   /**
    * A method that fetchs a Service from the database by id
    * @param id An id of a Service. A Service with this id should exist in the database
    * @returns A ServicePresenter which contain  Service information
    * See the [definition of the ServicePresenter file]{@link ServicePresenter} to see a list of required properties
    */
   @Get('get-service/:id')
   @ApiResponseType(ServicePresenter, true)
   async getService(@Param('id') id: string) {
      return await this.useCase.getService(id);
      // return service;
      // return service.map(service => new ServicePresenter(service));
   }
   /**   
    * A method that fetchs all Service from the database 
    * @returns A list of  ServicePresenter which contain  Service information
    * See the [definition of the ServicePresenter file]{@link ServicePresenter} to see a list of required properties
    */
   @Get('get-services')
   @ApiResponseType(ServicePresenter, true)
   async getServices() {
      const services = await this.useCase.fetServices();
      // return services;
      return services.map(service => new ServicePresenter(service));

   }

   /**
    * A method that update a Service 
    * @param updateServiceDto  An information of  Service 
    * @returns A ServicePresenter which contain  Service information
    * See the [definition of the updateServiceDto file]{@link updateServiceDto} to see a list of required properties
    */
   @Put('update-service/:id')
   @ApiResponseType(ServicePresenter, true)
   updateService(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
      const updatedService = this.useCase.updateServices(id, updateServiceDto);
      return "updatedService";
      // return updatedService.map(updateServiceDto => new ServicePresenter(updateServiceDto))


   }
   /**
    * A method that delete a Service from the database by id
    * @param id An id of a Service. A Service with this id should exist in the database
    * @returns success which  informs the status of the success
   */
   @Delete('delete-service/:id')
   @ApiResponseType(ServicePresenter, true)
   async deleteService(@Param('id') id: string) {
      return await this.useCase.deleteService(id);
   }

   @Delete('soft-delete-service/:id')
   @ApiResponseType(ServicePresenter, true)
   async softDeleteService(@Param('id') id: string) {
      const result = await this.useCase.softDeleteService(id);
   }
   @Patch('restore-deleted-service/:id')
   @ApiResponseType(ServicePresenter, true)
   async restoreDeleteService(@Param('id') id: string) {
      const result = await this.useCase.restoreDeleteService(id);
   }

   /**
    * A method that creates a Service 
    * @param createServiceDto  An information of  Service  that need to be saved
    * @returns A ServicePresenter which contain  created Service information
    * See the [definition of the CreateServiceDto file]{@link CreateServiceDto} to see a list of required properties
    */
   @Post('create-service')
   @ApiResponseType(ServicePresenter, true)
   async createService(@Body() createServiceDto: CreateServiceDto) {
      const serviceCreated = await this.useCase.createService(createServiceDto);
      return serviceCreated;
      // return new ServicePresenter(serviceCreated);
   }

   @Post('add-media')
   @ApiResponseType(MediaPresenter, true)
   async addMedia(@Body() createMediaDto: CreateMediaDto) {
      const mediaCreated = await this.useCase.addMedia(createMediaDto);
      // return new ServicePresenter(mediaCreated);  commented for test only
      return true;
   }
   /**
    * A method that update a Media 
    * @param updateMediaDto  An information of  Media 
    * @returns Success Which notify the  Media information updated
   */
   @Patch('edit-media/:id')
   @ApiResponseType(MediaPresenter, true)
   async editMedia(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
      await this.useCase.updateMedia(id, updateMediaDto);
      return 'success';
   }

   /**
    * A method that delete a Media from the database by id
    * @param id An id of a Media. A Media with this id should exist in the database
    * @returns success which  informs the status of the remove operation successed 
   */
   //  @Delete('remove-Media')
   //  @ApiResponseType(MediaPresenter, true)
   //  async deleteMedia( @Body() deleteMediaDto: DeleteMediaDto) {
   //     await this.useCase.deleteMedia( deleteMediaDto.serviceId, deleteMediaDto.mediaId);
   //     return 'success';
   //  }
   // @Delete('delete-service/:id')
   // @ApiResponseType(ServicePresenter, true)
   // async deleteService(@Param('id') id: string) {
   //    return await this.useCase.deleteService(id);
   // }
   @Delete('remove-media/:serviceId/:id')
   @ApiResponseType(MediaPresenter, true)
   async deleteMedia(@Param('serviceId') serviceId: string, @Param('id') id: string) {
      await this.useCase.deleteMedia(serviceId, id);
      return 'Media is deleted! ';
   }
   /**
    * A method that Remove  and  add  new list of Media to database
    * @param List<createMediaDto> A list of Media to be saved into database 
    * @returns Success Which notify the  Media information saved successfully
   */
   @Put('update-medias')
   @ApiResponseType(MediaPresenter, true)
   async updateMedia(@Body() createMediaDto: CreateMediaDto[]) {
      await this.useCase.updateMedias(createMediaDto);
      return 'success';
   }

   @Post('add-service-fee')
   @ApiResponseType(ServiceFeePresenter, true)
   async addServiceFee(@Body() createServiceFeeDto: CreateServiceFeeDto) {
      const serviceFeeCreated = await this.useCase.addServiceFee(createServiceFeeDto);
      // return new ServicePresenter(serviceFeeCreated);
      return "added";
   }
   /**
    * A method that update a ServiceFee 
    * @param updateServiceFeeDto  An information of  ServiceFee 
    * @returns Success Which notify the  ServiceFee information updated
   */
   @Put('edit-service-fee')
   @ApiResponseType(ServiceFeePresenter, true)
   async editServiceFee(@Body() createServiceFeeDto: UpdateServiceFeeDto) {
      await this.useCase.updateServiceFee(createServiceFeeDto);
      return 'success';
   }

   /**
    * A method that delete a ServiceFee from the database by id
    * @param id An id of a ServiceFee. A ServiceFee with this id should exist in the database
    * @returns success which  informs the status of the remove operation successed 
   */
   @Delete('remove-service-fee')
   @ApiResponseType(ServiceFeePresenter, true)
   async removeServiceFee(@Query() id: string) {
      await this.useCase.deleteServiceFee(id);
      return 'success';
   }

   /**
    * A method that Remove  and  add  new list of ServiceFee to database
    * @param List<createServiceFeeDto> A list of ServiceFee to be saved into database 
    * @returns Success Which notify the  ServiceFee information saved successfully
   */
   @Put('update-service-fee')
   @ApiResponseType(ServiceFeePresenter, true)
   async updateServiceFee(@Body() createServiceFeeDto: CreateServiceFeeDto[]) {
      await this.useCase.updateServiceFees(createServiceFeeDto);
      return 'success';
   }

   @Post('add-processing-time')
   @ApiResponseType(ProcessingTimePresenter, true)
   async addProcessingTime(@Body() createProcessingTimeDto: CreateProcessingTimeDto) {
      const processingTimeCreated = await this.useCase.addProcessingTime(createProcessingTimeDto);
      // return new ServicePresenter(processingTimeCreated);
      return "Added Processing time"
   }
   /**
    * A method that update a ProcessingTime 
    * @param updateProcessingTimeDto  An information of  ProcessingTime 
    * @returns Success Which notify the  ProcessingTime information updated
   */
   @Put('edit-processing-time')
   @ApiResponseType(ProcessingTimePresenter, true)
   async editProcessingTime(@Body() createProcessingTimeDto: UpdateProcessingTimeDto) {
      await this.useCase.updateProcessingTime(createProcessingTimeDto);
      return 'success';
   }

   /**
    * A method that delete a ProcessingTime from the database by id
    * @param id An id of a ProcessingTime. A ProcessingTime with this id should exist in the database
    * @returns success which  informs the status of the remove operation successed 
   */
   @Delete('remove-processing-time')
   @ApiResponseType(ProcessingTimePresenter, true)
   async removeProcessingTime(@Query() id: string) {
      await this.useCase.deleteProcessingTime(id);
      return 'success';
   }

   /**
    * A method that Remove  and  add  new list of ProcessingTime to database
    * @param List<createProcessingTimeDto> A list of ProcessingTime to be saved into database 
    * @returns Success Which notify the  ProcessingTime information saved successfully
   */
   @Put('update-processing-times')
   @ApiResponseType(ProcessingTimePresenter, true)
   async updateProcessingTime(@Body() createProcessingTimeDto: CreateProcessingTimeDto[]) {
      await this.useCase.updateProcessingTimes(createProcessingTimeDto);
      return 'success';
   }

   @Post('add-service-dependency')
   @ApiResponseType(ServiceDependencyPresenter, true)
   async addServiceDependency(@Body() createServiceDependencyDto: CreateServiceDependencyDto) {
      const serviceDependencyCreated = await this.useCase.addServiceDependency(createServiceDependencyDto);
      // return new ServicePresenter(serviceDependencyCreated);
      return "Added Service Dependency";
   }
   /**
    * A method that update a ServiceDependency 
    * @param updateServiceDependencyDto  An information of  ServiceDependency 
    * @returns Success Which notify the  ServiceDependency information updated
   */
   @Put('edit-service-dependency')
   @ApiResponseType(ServiceDependencyPresenter, true)
   async editServiceDependency(@Body() createServiceDependencyDto: UpdateServiceDependencyDto) {
      await this.useCase.updateServiceDependency(createServiceDependencyDto);
      return 'success';
   }

   /**
    * A method that delete a ServiceDependency from the database by id
    * @param id An id of a ServiceDependency. A ServiceDependency with this id should exist in the database
    * @returns success which  informs the status of the remove operation successed 
   */
   @Delete('remove-service-dependency')
   @ApiResponseType(ServiceDependencyPresenter, true)
   async removeServiceDependency(@Query() id: string) {
      await this.useCase.deleteServiceDependency(id);
      return 'success';
   }

   /**
    * A method that Remove  and  add  new list of ServiceDependency to database
    * @param List<createServiceDependencyDto> A list of ServiceDependency to be saved into database 
    * @returns Success Which notify the  ServiceDependency information saved successfully
   */
   @Put('update-service-dependency')
   @ApiResponseType(ServiceDependencyPresenter, true)
   async updateServiceDependency(@Body() createServiceDependencyDto: CreateServiceDependencyDto[]) {
      await this.useCase.updateServiceDependencies(createServiceDependencyDto);
      return 'success';
   }

   @Post('add-language')
   @ApiResponseType(LanguagePresenter, true)
   async addLanguage(@Body() createLanguageDto: CreateLanguageDto) {
      const languageCreated = await this.useCase.addLanguage(createLanguageDto);
      // return new ServicePresenter(languageCreated);
      return "Added Language";
   }
   /**
    * A method that update a Language 
    * @param updateLanguageDto  An information of  Language 
    * @returns Success Which notify the  Language information updated
   */
   @Put('edit-language')
   @ApiResponseType(LanguagePresenter, true)
   async editLanguage(@Body() createLanguageDto: UpdateLanguageDto) {
      await this.useCase.updateLanguage(createLanguageDto);
      return 'success';
   }

   /**
    * A method that delete a Language from the database by id
    * @param id An id of a Language. A Language with this id should exist in the database
    * @returns success which  informs the status of the remove operation successed 
   */
   @Delete('remove-language')
   @ApiResponseType(LanguagePresenter, true)
   async removeLanguage(@Query() id: string) {
      await this.useCase.deleteLanguage(id);
      return 'success';
   }

   /**
    * A method that Remove  and  add  new list of Language to database
    * @param List<createLanguageDto> A list of Language to be saved into database 
    * @returns Success Which notify the  Language information saved successfully
   */
   @Put('update-languages')
   @ApiResponseType(LanguagePresenter, true)
   async updateLanguage(@Body() createLanguageDto: CreateLanguageDto[]) {
      await this.useCase.updateLanguages(createLanguageDto);
      return 'success';
   }

   @Post('add-service-resource')
   @ApiResponseType(ServiceResourcePresenter, true)
   async addServiceResource(@Body() createServiceResourceDto: CreateServiceResourceDto) {
      const serviceResourceCreated = await this.useCase.addServiceResource(createServiceResourceDto);
      // return new ServicePresenter(serviceResourceCreated);
      return "Added Service Resource";
   }
   /**
    * A method that update a ServiceResource 
    * @param updateServiceResourceDto  An information of  ServiceResource 
    * @returns Success Which notify the  ServiceResource information updated
   */
   @Put('edit-service-resource')
   @ApiResponseType(ServiceResourcePresenter, true)
   async editServiceResource(@Body() createServiceResourceDto: UpdateServiceResourceDto) {
      await this.useCase.updateServiceResource(createServiceResourceDto);
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
   @Put('update-service-resources')
   @ApiResponseType(ServiceResourcePresenter, true)
   async updateServiceResource(@Body() createServiceResourceDto: CreateServiceResourceDto[]) {
      await this.useCase.updateResources(createServiceResourceDto);
      return 'success';
   }


}