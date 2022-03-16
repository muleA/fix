export interface ApplicationForm {
  title: string;
  formUrl: string;
  status: string;
  taskName: string;
}

export interface Service {
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
  serviceOwnerId: string;
  averageRating: number;
  enableReview: boolean;
  policy: string;
  publishedOn: Date;
}
