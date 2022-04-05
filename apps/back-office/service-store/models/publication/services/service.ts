interface ApplicationForm {
  title: string;
  formUrl: string;
  status: string;
  taskName: string;
}
export interface ServiceFee {
  id: string;
  serviceId: string;
  fee: number;
  currency: string;
  description: string;
}
export interface ServiceResource {
  id: string;
  serviceId: string;
  attachmentUrl: string;
  content: string;
  title: string;
}
export interface ServiceDependency {
  id: string;
  serviceId: string;
  dependsOn: string;
  type: string;
}

export interface ProcessingTime {
  id: string;
  serviceId: string;
  currency: number;
  time: number;
  description: string;
}
export interface Media {
  id: string;
  file: string;
  caption: string;
  type: string;
  serviceId: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface SupportedLanguage {
  id: string;
  serviceId: string;
  name: string;
  code: string;
}
export default interface Service {
  id?: string;
  fullyQualifiedName: string;
  name: string;
  description: string;
  code: string;
  supportedQualifications: string;
  version: string;
  procedure: string;
  applicationForm: ApplicationForm;
  targetCustomers: string;
  isPublic: boolean;
  isPublished: boolean;
  isArchived: boolean;
  tags: string;
  deliveryMethod: string;
  serviceOwnerId?: string;
  serviceProviderId?: string;
  averageRating: number;
  enableReview: boolean;
  policy: string;
  publishedOn: Date;
  languages?: SupportedLanguage[];
  processingTimes?: ProcessingTime[];
  medias?: Media[];
  serviceDependencies?: ServiceDependency[];
  serviceResources?: ServiceResource[];
  serviceFees?: ServiceFee[];
  count?: number;
}
