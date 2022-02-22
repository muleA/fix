import {
  Entity,
  Column,
  PrimaryGeneratedColumn, OneToMany,
} from "typeorm";
import { ServiceFeeEntity } from './ServiceFee.entity';
import { LanguageEntity } from "./Language.entity";
import { ProcessingTimeEntity } from "./ProcessingTime.entity";
import { ServiceDependencyEntity } from "./ServiceDependency.entity";
import { ServiceResourceEntity } from "./ServiceResource.entity";
import { CommonEntity } from "src/modules/shared/CommonEntity";
@Entity({ name: "services" })
export class ServiceEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  code: string;
  @Column()
  fullyQualifiedName: string;
  @OneToMany(type => ServiceFeeEntity, media => media.serviceId, { cascade: true })
  medias: ServiceFeeEntity[];
  @Column()
  supportedQualifications: string;
  @Column()
  version: number;
  @Column()
  procedure: string;
  @OneToMany(type => ServiceFeeEntity, serviceFee => serviceFee.serviceId, { cascade: true })
  serviceFees: ServiceFeeEntity[];
  @OneToMany(type => ProcessingTimeEntity, processingTime => processingTime.serviceId, { cascade: true })
  processingTimes: ProcessingTimeEntity[];
  @OneToMany(type => ServiceDependencyEntity, serviceDependency => serviceDependency.serviceId, { cascade: true })
  serviceDependencies: ServiceDependencyEntity[];
  @OneToMany(type => LanguageEntity, language => language.serviceId, { cascade: true })
  languages: LanguageEntity[];
  @Column()
  applicationForm: ApplicationForm; // it is a value object entity
  @OneToMany(type => ServiceResourceEntity, serviceResource => serviceResource.serviceId, { cascade: true })
  serviceResources: ServiceResourceEntity[];
  @Column()
  targetCustomers: string;
  @Column()
  status: string;
  @Column()
  isPublic: boolean;
  @Column()
  isPublished: boolean;
  @Column()
  isArchived: boolean;
  @Column()
  tags: string;
  @Column()
  deliveryMethod: string;
  @Column()
  serviceOwnerId: string;
  @Column()
  averageRating: number;
  @Column()
  enableReview: boolean;
  @Column()
  policy: string;
  @Column()
  publishedOn: Date;
}