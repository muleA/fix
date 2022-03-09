import { ServiceProvider } from "../service-providers/service-provider";
import ApplicationForm from "./application-form";
import Language from "./language";
import Medias from "./medias";
import ProcessingTime from "./processing-time";
import ServiceDependency from "./service-dependency";
import ServiceFee from "./service-fee";
import ServiceResource from "./service-resource";

/*
Feature - Publication
Service definition (CRUD)
*/
export default interface Service {
    id: string;
    name: string;
    description: string;
    code: string;
    fullyQualifiedName: string;
    medias?: Medias[];
    supportedQualifications?: string;
    version: number;
    procedure: string;
    serviceFees?: ServiceFee[];
    processingTimes?: ProcessingTime[];
    serviceDependencies?: ServiceDependency[];
    serviceProviders:ServiceProvider[];
    languages: Language[];
    applicationForm?: ApplicationForm;
    serviceResources?: ServiceResource[];
    targetCustomers: string;
    isPublic: boolean;
    isPublished: boolean;
    isArchived: boolean;
    tags?: string[];
    deliveryMethod?: string;
    serviceOwnerId: string;
    averageRating?: number;
    enableReview: boolean;
    policy?: string;
    status: string;
    publishedOn: Date;
    createdAt: Date;
    updatedAt: Date;
  
  }
 





 
