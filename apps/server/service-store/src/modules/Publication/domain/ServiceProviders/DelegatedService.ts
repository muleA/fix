import { InjectRepository } from '@nestjs/typeorm';

export class DelegatedService {
  constructor() {}
  id: string;
  providerId: string;
  serviceId: string;
  title: string;
  dispatchingRule: string;
  status: string;
  createdBy: string;
  updatedBy: string;
  deletedBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
