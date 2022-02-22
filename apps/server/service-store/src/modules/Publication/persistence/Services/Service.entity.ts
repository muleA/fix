import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { ServiceFeeEntity } from './ServiceFee.entity';
import { LanguageEntity } from "./Language.entity";
import { ProcessingTimeEntity } from "./ProcessingTime.entity";
import { ServiceDependencyEntity } from "./ServiceDependency.entity";
import { ServiceResourceEntity } from "./ServiceResource.entity";
import { CommonEntity } from "src/modules/shared/CommonEntity";
import { ApplicationForm } from "../../domain/services/ApplicationForm";
import { MediaEntity } from "./Media.entity";
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
  @OneToMany(type => MediaEntity, media => media.service, { cascade: true })
  medias: MediaEntity[];
  @Column()
  supportedQualifications: string;
  @Column()
  version: number;
  @Column()
  procedure: string;
  @OneToMany(type => ServiceFeeEntity, serviceFee => serviceFee.service, { cascade: true })
  serviceFees: ServiceFeeEntity[];
  @OneToMany(type => ProcessingTimeEntity, processingTime => processingTime.service, { cascade: true })
  processingTimes: ProcessingTimeEntity[];
  @OneToMany(type => ServiceDependencyEntity, serviceDependency => serviceDependency.service, { cascade: true })
  serviceDependencies: ServiceDependencyEntity[];
  @OneToMany(type => LanguageEntity, language => language.service, { cascade: true })
  languages: LanguageEntity[];
  @Column('jsonb')
  applicationForm: ApplicationForm; // it is a value object entity
  @OneToMany(type => ServiceResourceEntity, serviceResource => serviceResource.service, { cascade: true })
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