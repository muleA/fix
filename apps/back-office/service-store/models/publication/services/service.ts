export default interface ApplicationForm {
  title: string;
  formUrl: string;
  status: string;
  taskName: string;
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
  applicationForm: ApplicationForm[];
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
}
