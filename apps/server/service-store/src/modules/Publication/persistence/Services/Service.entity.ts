import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "service" })
export class ServiceEntity {
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
  
  @Column()
  serviceFees: ServiceFee[];
  
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
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}