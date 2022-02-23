import { Service } from '../../domain/Services/service';
import { UpdateMediaDto } from './Media.dto';
import { UpdateServiceFeeDto } from './ServiceFee.dto';
import { UpdateProcessingTimeDto } from './ProcessingTime.dto';
import { UpdateServiceDependencyDto } from './ServiceDependency.dto';
import { UpdateLanguageDto } from './Language.dto';
import { UpdateApplicationFormDto } from './ApplicationForm.dto';
import { UpdateServiceResourceDto } from './ServiceResource.dto';
export declare class UpdateServiceDto {
    id: string;
    name: string;
    description: string;
    code: string;
    fullyQualifiedName: string;
    medias: UpdateMediaDto[];
    supportedQualifications: string;
    version: number;
    procedure: string;
    serviceFees: UpdateServiceFeeDto[];
    processingTimes: UpdateProcessingTimeDto[];
    serviceDependencies: UpdateServiceDependencyDto[];
    languages: UpdateLanguageDto[];
    applicationForm: UpdateApplicationFormDto;
    serviceResources: UpdateServiceResourceDto[];
    targetCustomers: string;
    status: string;
    isPublic: boolean;
    isPublished: boolean;
    isArchived: boolean;
    tags: string;
    deliveryMethod: string;
    serviceOwnerId: string;
    averageRating: number;
    enableReview: boolean;
    policy: string;
    publishedOn: Date;
    static fromDTO(serviceDto: UpdateServiceDto): Service;
}
export declare class CreateServiceDto {
    id: string;
    name: string;
    description: string;
    code: string;
    fullyQualifiedName: string;
    medias: UpdateMediaDto[];
    supportedQualifications: string;
    version: number;
    procedure: string;
    serviceFees: UpdateServiceFeeDto[];
    processingTimes: UpdateProcessingTimeDto[];
    serviceDependencies: UpdateServiceDependencyDto[];
    languages: UpdateLanguageDto[];
    applicationForm: UpdateApplicationFormDto;
    serviceResources: UpdateServiceResourceDto[];
    targetCustomers: string;
    status: string;
    isPublic: boolean;
    isPublished: boolean;
    isArchived: boolean;
    tags: string;
    deliveryMethod: string;
    serviceOwnerId: string;
    averageRating: number;
    enableReview: boolean;
    policy: string;
    publishedOn: Date;
    static fromDTO(serviceDto: CreateServiceDto): Service;
}