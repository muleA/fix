import { MediaPresenter } from './Media.presenter';
import { CreateMediaDto, UpdateMediaDto } from './Media.dto';
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

import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServicePresenter } from './service.presenter';
import { ApiResponseType } from '../../../../infrastructure/swagger/response.decorator';
import { CreateServiceDto, UpdateServiceDto } from '../services/service.dto';
import { ServiceUseCases } from '../../usecases/service.usecases';

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
   @Get('get-service')
   @ApiResponseType(ServicePresenter, false)
   async getService(@Query() id: string) {
      const service = await this.useCase.getService(id);
      return new ServicePresenter(service);
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
      return services.map((service) => new ServicePresenter(service));
   }

   /**
    * A method that update a Service 
    * @param updateServiceDto  An information of  Service 
    * @returns A ServicePresenter which contain  Service information
    * See the [definition of the updateServiceDto file]{@link updateServiceDto} to see a list of required properties
    */
   @Put('update-service')
   @ApiResponseType(ServicePresenter, true)
   async updateService(@Body() updateServiceDto: UpdateServiceDto) {
      await this.useCase.updateService(updateServiceDto);
      return 'success';
   }
   /**
    * A method that delete a Service from the database by id
    * @param id An id of a Service. A Service with this id should exist in the database
    * @returns success which  informs the status of the success
   */
   @Delete('delete-service')
   @ApiResponseType(ServicePresenter, true)
   async deleteService(@Query() id: string) {
      await this.useCase.deleteService(id);
      return 'success';
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
      return new ServicePresenter(serviceCreated);
   }

   @Post('add-Media')
   @ApiResponseType(MediaPresenter, true)
   async addMedia(@Body() createMediaDto: CreateMediaDto) {
      const mediaCreated = await this.useCase.addMedia(createMediaDto);
      return new ServicePresenter(mediaCreated);
   }
   /**
    * A method that update a Media 
    * @param updateMediaDto  An information of  Media 
    * @returns Success Which notify the  Media information updated
   */
   @Put('edit-Media')
   @ApiResponseType(MediaPresenter, true)
   async editMedia(@Body() createMediaDto: UpdateMediaDto) {
      await this.useCase.updateMedia(createMediaDto);
      return 'success';
   }

   /**
    * A method that delete a Media from the database by id
    * @param id An id of a Media. A Media with this id should exist in the database
    * @returns success which  informs the status of the remove operation successed 
   */
   @Delete('remove-Media')
   @ApiResponseType(MediaPresenter, true)
   async removeMedia(@Query() id: string) {
      await this.useCase.deleteMedia(id);
      return 'success';
   }

   /**
    * A method that Remove  and  add  new list of Media to database
    * @param List<createMediaDto> A list of Media to be saved into database 
    * @returns Success Which notify the  Media information saved successfully
   */
   @Put('update-Medias')
   @ApiResponseType(MediaPresenter, true)
   async updateMedia(@Body() createMediaDto: CreateMediaDto[]) {
      await this.useCase.updateMedias(createMediaDto);
      return 'success';
   }

   @Post('add-ServiceFee')
   @ApiResponseType(ServiceFeePresenter, true)
   async addServiceFee(@Body() createServiceFeeDto: CreateServiceFeeDto) {
      const serviceFeeCreated = await this.useCase.addServiceFee(createServiceFeeDto);
      return new ServicePresenter(serviceFeeCreated);
   }
   /**
    * A method that update a ServiceFee 
    * @param updateServiceFeeDto  An information of  ServiceFee 
    * @returns Success Which notify the  ServiceFee information updated
   */
   @Put('edit-ServiceFee')
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
   @Delete('remove-ServiceFee')
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
   @Put('update-ServiceFees')
   @ApiResponseType(ServiceFeePresenter, true)
   async updateServiceFee(@Body() createServiceFeeDto: CreateServiceFeeDto[]) {
      await this.useCase.updateServiceFees(createServiceFeeDto);
      return 'success';
   }

   @Post('add-ProcessingTime')
   @ApiResponseType(ProcessingTimePresenter, true)
   async addProcessingTime(@Body() createProcessingTimeDto: CreateProcessingTimeDto) {
      const processingTimeCreated = await this.useCase.addProcessingTime(createProcessingTimeDto);
      return new ServicePresenter(processingTimeCreated);
   }
   /**
    * A method that update a ProcessingTime 
    * @param updateProcessingTimeDto  An information of  ProcessingTime 
    * @returns Success Which notify the  ProcessingTime information updated
   */
   @Put('edit-ProcessingTime')
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
   @Delete('remove-ProcessingTime')
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
   @Put('update-ProcessingTimes')
   @ApiResponseType(ProcessingTimePresenter, true)
   async updateProcessingTime(@Body() createProcessingTimeDto: CreateProcessingTimeDto[]) {
      await this.useCase.updateProcessingTimes(createProcessingTimeDto);
      return 'success';
   }

   @Post('add-ServiceDependency')
   @ApiResponseType(ServiceDependencyPresenter, true)
   async addServiceDependency(@Body() createServiceDependencyDto: CreateServiceDependencyDto) {
      const serviceDependencyCreated = await this.useCase.addServiceDependency(createServiceDependencyDto);
      return new ServicePresenter(serviceDependencyCreated);
   }
   /**
    * A method that update a ServiceDependency 
    * @param updateServiceDependencyDto  An information of  ServiceDependency 
    * @returns Success Which notify the  ServiceDependency information updated
   */
   @Put('edit-ServiceDependency')
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
   @Delete('remove-ServiceDependency')
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
   @Put('update-ServiceDependencies')
   @ApiResponseType(ServiceDependencyPresenter, true)
   async updateServiceDependency(@Body() createServiceDependencyDto: CreateServiceDependencyDto[]) {
      await this.useCase.updateServiceDependencies(createServiceDependencyDto);
      return 'success';
   }

   @Post('add-Language')
   @ApiResponseType(LanguagePresenter, true)
   async addLanguage(@Body() createLanguageDto: CreateLanguageDto) {
      const languageCreated = await this.useCase.addLanguage(createLanguageDto);
      return new ServicePresenter(languageCreated);
   }
   /**
    * A method that update a Language 
    * @param updateLanguageDto  An information of  Language 
    * @returns Success Which notify the  Language information updated
   */
   @Put('edit-Language')
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
   @Delete('remove-Language')
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
   @Put('update-Languages')
   @ApiResponseType(LanguagePresenter, true)
   async updateLanguage(@Body() createLanguageDto: CreateLanguageDto[]) {
      await this.useCase.updateLanguages(createLanguageDto);
      return 'success';
   }

   @Post('add-ServiceResource')
   @ApiResponseType(ServiceResourcePresenter, true)
   async addServiceResource(@Body() createServiceResourceDto: CreateServiceResourceDto) {
      const serviceResourceCreated = await this.useCase.addServiceResource(createServiceResourceDto);
      return new ServicePresenter(serviceResourceCreated);
   }
   /**
    * A method that update a ServiceResource 
    * @param updateServiceResourceDto  An information of  ServiceResource 
    * @returns Success Which notify the  ServiceResource information updated
   */
   @Put('edit-ServiceResource')
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
   @Delete('remove-ServiceResource')
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
   @Put('update-Resources')
   @ApiResponseType(ServiceResourcePresenter, true)
   async updateServiceResource(@Body() createServiceResourceDto: CreateServiceResourceDto[]) {
      await this.useCase.updateResources(createServiceResourceDto);
      return 'success';
   }


}