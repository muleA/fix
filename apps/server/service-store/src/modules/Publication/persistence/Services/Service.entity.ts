import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ServiceFeeEntity } from './ServiceFee.entity';
import { LanguageEntity } from "./Language.entity";
import { ProcessingTimeEntity } from "./ProcessingTime.entity";
import { ServiceDependencyEntity } from "./ServiceDependency.entity";
import { ServiceResourceEntity } from "./ServiceResource.entity";
import { CommonEntity } from "src/modules/shared/CommonEntity";
import { ApplicationForm } from "../../domain/services/ApplicationForm";
import { MediaEntity } from "./Media.entity";
import { ServiceOwnerEntity } from "../serviceOwners/serviceOwner.entity";
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
  @OneToMany(type => MediaEntity, media => media.service, { eager: true, cascade: true, onDelete: 'CASCADE' })
  medias: MediaEntity[];
  @Column()
  supportedQualifications: string;
  @Column('double precision')
  version: number;
  @Column()
  procedure: string;
  @OneToMany(type => ServiceFeeEntity, serviceFee => serviceFee.service, { eager: true, cascade: true, onDelete: 'CASCADE' })
  serviceFees: ServiceFeeEntity[];
  @OneToMany(type => ProcessingTimeEntity, processingTime => processingTime.service, { eager: true, cascade: true, onDelete: 'CASCADE' })
  processingTimes: ProcessingTimeEntity[];
  @OneToMany(type => ServiceDependencyEntity, serviceDependency => serviceDependency.service, { eager: true, cascade: true, onDelete: 'CASCADE' })
  serviceDependencies: ServiceDependencyEntity[];
  @OneToMany(type => LanguageEntity, language => language.service, { eager: true, cascade: true, onDelete: 'CASCADE' })
  languages: LanguageEntity[];
  @Column('jsonb', { nullable: true }) // the option nullable is for testing purpose only
  applicationForm: ApplicationForm; // it is a value object entity
  @OneToMany(type => ServiceResourceEntity, serviceResource => serviceResource.service, { eager: true, cascade: true, onDelete: 'CASCADE' })
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
  @ManyToOne(type => ServiceOwnerEntity)
  @JoinColumn({ name: 'serviceOwnerId' })
  serviceOwner: string;
  @Column('double precision')
  averageRating: number;
  @Column()
  enableReview: boolean;
  @Column()
  policy: string;
  @Column()
  publishedOn: Date;
}