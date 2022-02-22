import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";

import { ServiceFeeEntity } from './ServiceFee.entity';
import {CommonEntity} from 'src/modules/shared/CommonEntity';
import { Media } from "../../domain/services/Media";
import { ProcessingTime } from "../../domain/services/ProcessingTime";
import { ServiceDependency } from "../../domain/services/ServiceDependency";
import { Language } from "../../domain/services/Language";
import { ApplicationForm } from "../../domain/services/ApplicationForm";
import { ServiceResource } from "../../domain/services/ServiceResource";
@Entity({ name: "services" })
export class ServiceEntity  extends CommonEntity{
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
  medias: Media[];
  
  @Column()
  supportedQualifications: string;
  
  @Column()
  version: number;
  
  @Column()
  procedure: string;
  

  @OneToMany(type => ServiceFeeEntity, serviceFee => serviceFee.serviceId , { cascade: true })
  serviceFees: ServiceFeeEntity[];
 
  
  @Column()
  processingTimes: ProcessingTime[];
  
  @Column()
  serviceDependencies: ServiceDependency[];
  
  @Column()
  languages: Language[];
  
  @Column()
  applicationForm: ApplicationForm;
  
  @Column()
  resources: ServiceResource[];
  
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