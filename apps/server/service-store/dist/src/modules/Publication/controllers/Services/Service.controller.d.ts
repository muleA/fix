import { CreateMediaDto, UpdateMediaDto } from './Media.dto';
import { CreateServiceFeeDto, UpdateServiceFeeDto } from './ServiceFee.dto';
import { CreateProcessingTimeDto, UpdateProcessingTimeDto } from './ProcessingTime.dto';
import { CreateServiceDependencyDto, UpdateServiceDependencyDto } from './ServiceDependency.dto';
import { CreateLanguageDto, UpdateLanguageDto } from './Language.dto';
import { CreateServiceResourceDto, UpdateServiceResourceDto } from './ServiceResource.dto';
import { ServicePresenter } from './service.presenter';
import { CreateServiceDto, UpdateServiceDto } from '../services/service.dto';
import { ServiceUseCases } from '../../usecases/service.usecases';
export declare class ServicesController {
    private useCase;
    constructor(useCase: ServiceUseCases);
    getService(id: string): Promise<ServicePresenter>;
    getServices(): Promise<ServicePresenter[]>;
    updateService(updateServiceDto: UpdateServiceDto): Promise<string>;
    deleteService(id: string): Promise<string>;
    createService(createServiceDto: CreateServiceDto): Promise<ServicePresenter>;
    addMedia(createMediaDto: CreateMediaDto): Promise<ServicePresenter>;
    editMedia(createMediaDto: UpdateMediaDto): Promise<string>;
    removeMedia(id: string): Promise<string>;
    updateMedia(createMediaDto: CreateMediaDto[]): Promise<string>;
    addServiceFee(createServiceFeeDto: CreateServiceFeeDto): Promise<ServicePresenter>;
    editServiceFee(createServiceFeeDto: UpdateServiceFeeDto): Promise<string>;
    removeServiceFee(id: string): Promise<string>;
    updateServiceFee(createServiceFeeDto: CreateServiceFeeDto[]): Promise<string>;
    addProcessingTime(createProcessingTimeDto: CreateProcessingTimeDto): Promise<ServicePresenter>;
    editProcessingTime(createProcessingTimeDto: UpdateProcessingTimeDto): Promise<string>;
    removeProcessingTime(id: string): Promise<string>;
    updateProcessingTime(createProcessingTimeDto: CreateProcessingTimeDto[]): Promise<string>;
    addServiceDependency(createServiceDependencyDto: CreateServiceDependencyDto): Promise<ServicePresenter>;
    editServiceDependency(createServiceDependencyDto: UpdateServiceDependencyDto): Promise<string>;
    removeServiceDependency(id: string): Promise<string>;
    updateServiceDependency(createServiceDependencyDto: CreateServiceDependencyDto[]): Promise<string>;
    addLanguage(createLanguageDto: CreateLanguageDto): Promise<ServicePresenter>;
    editLanguage(createLanguageDto: UpdateLanguageDto): Promise<string>;
    removeLanguage(id: string): Promise<string>;
    updateLanguage(createLanguageDto: CreateLanguageDto[]): Promise<string>;
    addServiceResource(createServiceResourceDto: CreateServiceResourceDto): Promise<ServicePresenter>;
    editServiceResource(createServiceResourceDto: UpdateServiceResourceDto): Promise<string>;
    removeServiceResource(id: string): Promise<string>;
    updateServiceResource(createServiceResourceDto: CreateServiceResourceDto[]): Promise<string>;
}