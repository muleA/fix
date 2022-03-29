import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
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
import { CategoryEntity } from "src/modules/Classification/persistence/categorys/category.entity";
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
  @Column()
  supportedQualifications: string;
  @Column('double precision')
  version: number;
  @Column()
  procedure: string;
  @Column({ type: 'jsonb' })
  applicationForm: ApplicationForm;
  @Column()
  targetCustomers: string;
  @Column({ default: false })
  isPublic: boolean;
  @Column()
  isPublished: boolean;
  @Column({ default: false })
  isArchived: boolean;
  @Column()
  tags: string;
  @Column()
  deliveryMethod: string;
  @Column({ nullable: true })  //for testing only nullable will remove later
  serviceOwnerId: string;
  @Column('double precision', { default: 0.0 })
  averageRating: number;
  @Column()
  enableReview: boolean;
  @Column()
  policy: string;
  @Column()
  publishedOn: Date;
  // @Column({ nullable: true })
  // categoryId: string;

  @OneToMany(type => MediaEntity, media => media.service, { cascade: true, eager: true })
  medias: MediaEntity[];
  @OneToMany(type => ServiceFeeEntity, serviceFee => serviceFee.service, { cascade: true, eager: true })
  serviceFees: ServiceFeeEntity[];
  @OneToMany(type => ProcessingTimeEntity, processingTime => processingTime.service, { cascade: true, eager: true })
  processingTimes: ProcessingTimeEntity[];
  @OneToMany(type => ServiceDependencyEntity, serviceDependency => serviceDependency.service, { cascade: true, eager: true })
  serviceDependencies: ServiceDependencyEntity[];
  @OneToMany(type => LanguageEntity, language => language.service, { cascade: true, eager: true })
  languages: LanguageEntity[];
  @OneToMany(type => ServiceResourceEntity, serviceResource => serviceResource.service, { cascade: true, eager: true })
  serviceResources: ServiceResourceEntity[];
  @ManyToOne(type => ServiceOwnerEntity, { cascade: true }) // if it is bi-directional  we will add   , serviceOwner => serviceOwner.services
  @JoinColumn({ name: 'serviceOwnerId' })
  @ManyToMany(() => CategoryEntity, category => category.services, { cascade: true, onDelete: 'SET NULL' })
  categories: CategoryEntity[];
}