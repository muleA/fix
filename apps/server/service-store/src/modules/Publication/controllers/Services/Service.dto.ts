import { ApiProperty } from '@nestjs/swagger';
import {
   IsBoolean, IsNotEmpty, IsNumber,
   IsString, IsDate, MaxLength,
   IsArray, IsEnum, IsDecimal, IsUUID, IsBooleanString,
} from 'class-validator';
import { Service } from '../../domain/Services/service';
import { CreateMediaDto, UpdateMediaDto } from './Media.dto';
import { CreateServiceFeeDto, UpdateServiceFeeDto } from './ServiceFee.dto';
import { CreateProcessingTimeDto, UpdateProcessingTimeDto } from './ProcessingTime.dto';
import { CreateServiceDependencyDto, UpdateServiceDependencyDto } from './ServiceDependency.dto';
import { CreateLanguageDto, UpdateLanguageDto } from './Language.dto';
import { CreateApplicationFormDto, UpdateApplicationFormDto } from './ApplicationForm.dto';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from './ServiceResource.dto';
/**
*A class which contains proporties of Service that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceDto {
   // @ApiProperty()
   // @IsNotEmpty()
   // @IsUUID() commented for testing only
   id: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   name: string;
   @ApiProperty()
   @IsString()
   description: string;
   @ApiProperty()
   // @IsNotEmpty()
   @IsString()
   code: string;
   @ApiProperty()
   @IsString()
   fullyQualifiedName: string;
   @ApiProperty()
   // @IsArray()   //commented for testing
   medias: UpdateMediaDto[];
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   supportedQualifications: string;
   @ApiProperty()
   @IsDecimal()
   version: number;
   @ApiProperty()
   // @IsNotEmpty()
   @IsString()
   procedure: string;
   @ApiProperty()
   // @IsArray()   //commented for testing
   serviceFees: UpdateServiceFeeDto[];
   @ApiProperty()
   // @IsArray()   //commented for testing
   processingTimes: UpdateProcessingTimeDto[];
   @ApiProperty()
   // @IsArray()   //commented for testing
   serviceDependencies: UpdateServiceDependencyDto[];
   @ApiProperty()
   // @IsArray()   //commented for testing
   languages: UpdateLanguageDto[];
   // @IsNotEmpty()  commented for testing only
   applicationForm: UpdateApplicationFormDto;
   @ApiProperty()
   // @IsArray()   //commented for testing
   serviceResources: UpdateServiceResourceDto[];
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   targetCustomers: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   status: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsBooleanString()
   isPublic: boolean;
   @ApiProperty()
   @IsBooleanString()
   isPublished: boolean;
   @ApiProperty()
   @IsBooleanString()
   @IsNotEmpty()
   isArchived: boolean;
   @ApiProperty()
   @IsString()
   tags: string;
   @ApiProperty()
   @IsNotEmpty()
   deliveryMethod: string;
   @ApiProperty()
   // @IsNotEmpty()
   // @IsUUID()   // commented for testing only
   serviceOwnerId: string;
   @ApiProperty()
   @IsDecimal()
   averageRating: number;
   @ApiProperty()
   @IsBooleanString()
   @IsNotEmpty()
   enableReview: boolean;
   @ApiProperty()
   @IsString()
   policy: string;
   @ApiProperty()
   // @IsDate()    commented for testing only
   publishedOn: Date;
   @ApiProperty()
   createdBy: string;
   @ApiProperty()
   updatedBy: string;

   /**
 *A method that mapes  UpdateServiceDto object data to  Service domain object
 *@returns Service domain object which contains Service  information
 */
   static fromDTO(serviceDto: UpdateServiceDto): Service {
      const service: Service = new Service();
      service.id = serviceDto.id;
      service.name = serviceDto.name;
      service.description = serviceDto.description;
      service.code = serviceDto.code;
      service.fullyQualifiedName = serviceDto.fullyQualifiedName;
      if (service.medias)
         service.medias = serviceDto.medias.map(item => UpdateMediaDto.fromDTO(item));
      service.supportedQualifications = serviceDto.supportedQualifications;
      service.version = serviceDto.version;
      service.procedure = serviceDto.procedure;
      if (service.serviceFees)
         service.serviceFees = serviceDto.serviceFees.map(item => UpdateServiceFeeDto.fromDTO(item));
      if (service.processingTimes)
         service.processingTimes = serviceDto.processingTimes.map(item => UpdateProcessingTimeDto.fromDTO(item));
      if (service.serviceDependencies)
         service.serviceDependencies = serviceDto.serviceDependencies.map(item => UpdateServiceDependencyDto.fromDTO(item));
      if (service.languages)
         service.languages = serviceDto.languages.map(item => UpdateLanguageDto.fromDTO(item));
      if (service.serviceResources)
         service.serviceResources = serviceDto.serviceResources.map(item => UpdateServiceResourceDto.fromDTO(item));
      if (service.applicationForm)
         service.applicationForm = UpdateApplicationFormDto.fromDTO(serviceDto.applicationForm);
      service.targetCustomers = serviceDto.targetCustomers;
      service.status = serviceDto.status;
      service.isPublic = serviceDto.isPublic;
      service.isPublished = serviceDto.isPublished;
      service.isArchived = serviceDto.isArchived;
      service.tags = serviceDto.tags;
      service.deliveryMethod = serviceDto.deliveryMethod;
      if (service.serviceOwnerId)
         service.serviceOwnerId = serviceDto.serviceOwnerId;
      service.averageRating = serviceDto.averageRating;
      service.enableReview = serviceDto.enableReview;
      service.policy = serviceDto.policy;
      service.publishedOn = serviceDto.publishedOn;
      service.createdBy = serviceDto.createdBy;
      service.updatedBy = serviceDto.updatedBy;
      return service;
   }
}
/**
*A class wich contains proporties of Service that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceDto {
   @ApiProperty()
   // @IsNotEmpty()
   // @IsUUID() commented for testing only
   id: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   name: string;
   @ApiProperty()
   @IsString()
   description: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   code: string;
   @ApiProperty()
   @IsString()
   fullyQualifiedName: string;
   @ApiProperty()
   // @IsArray()   //commented for testing
   medias: UpdateMediaDto[];
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   supportedQualifications: string;
   @ApiProperty()
   @IsDecimal()
   version: number;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   procedure: string;
   @ApiProperty()
   // @IsArray()   //commented for testing
   serviceFees: UpdateServiceFeeDto[];
   @ApiProperty()
   // @IsArray()   //commented for testing
   processingTimes: UpdateProcessingTimeDto[];
   @ApiProperty()
   // @IsArray()   //commented for testing
   serviceDependencies: UpdateServiceDependencyDto[];
   @ApiProperty()
   // @IsArray()   //commented for testing
   languages: UpdateLanguageDto[];
   // @IsNotEmpty()  commented for testing only
   applicationForm: UpdateApplicationFormDto;
   @ApiProperty()
   // @IsArray()   //commented for testing
   serviceResources: UpdateServiceResourceDto[];
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   targetCustomers: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   status: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsBooleanString()
   isPublic: boolean;
   @ApiProperty()
   @IsBooleanString()
   isPublished: boolean;
   @ApiProperty()
   @IsBooleanString()
   @IsNotEmpty()
   isArchived: boolean;
   @ApiProperty()
   @IsString()
   tags: string;
   @ApiProperty()
   @IsNotEmpty()
   deliveryMethod: string;
   @ApiProperty()
   // @IsNotEmpty()
   // @IsUUID()   // commented for testing only
   serviceOwnerId: string;
   @ApiProperty()
   @IsDecimal()
   averageRating: number;
   @ApiProperty()
   @IsBooleanString()
   @IsNotEmpty()
   enableReview: boolean;
   @ApiProperty()
   @IsString()
   policy: string;
   @ApiProperty()
   // @IsDate()    commented for testing only
   publishedOn: Date;
   @ApiProperty()
   createdBy: string;
   @ApiProperty()
   updatedBy: string;
   /**
 *A method that mapes  CreateServiceDto object data to  Service domain object
 *@returns Service domain object which contains Service  information
 */
   static fromDTO(serviceDto: CreateServiceDto): Service {
      const service: Service = new Service();
      service.id = serviceDto.id;
      service.name = serviceDto.name;
      service.description = serviceDto.description;
      service.code = serviceDto.code;
      service.fullyQualifiedName = serviceDto.fullyQualifiedName;
      // if (!service.medias)
      //    service.medias = serviceDto.medias.map(item => CreateMediaDto.fromDTO(item));
      service.supportedQualifications = serviceDto.supportedQualifications;
      service.version = serviceDto.version;
      service.procedure = serviceDto.procedure;
      // service.serviceFees = serviceDto.serviceFees.map(item => CreateServiceFeeDto.fromDTO(item));
      // service.processingTimes = serviceDto.processingTimes.map(item => CreateProcessingTimeDto.fromDTO(item));
      // service.serviceDependencies = serviceDto.serviceDependencies.map(item => CreateServiceDependencyDto.fromDTO(item));
      // service.languages = serviceDto.languages.map(item => CreateLanguageDto.fromDTO(item));
      //service.serviceResources = serviceDto.serviceResources.map(item => CreateServiceResourceDto.fromDTO(item));
      // service.applicationForm = CreateApplicationFormDto.fromDTO(serviceDto.applicationForm);
      service.applicationForm = serviceDto.applicationForm;
      service.targetCustomers = serviceDto.targetCustomers;
      service.status = serviceDto.status;
      service.isPublic = serviceDto.isPublic;
      service.isPublished = serviceDto.isPublished;
      service.isArchived = serviceDto.isArchived;
      service.tags = serviceDto.tags;
      service.deliveryMethod = serviceDto.deliveryMethod;
      service.serviceOwnerId = serviceDto.serviceOwnerId;
      service.averageRating = serviceDto.averageRating;
      service.enableReview = serviceDto.enableReview;
      service.policy = serviceDto.policy;
      service.publishedOn = serviceDto.publishedOn;
      service.createdBy = serviceDto.createdBy;
      service.updatedBy = serviceDto.updatedBy;
      return service;
   }
}