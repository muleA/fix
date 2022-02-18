import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "serviceCollection" })
export class ServiceCollectionEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  name: string;
  
  @Column()
  description: string;
  
  @Column()
  code: string;
  
  @Column()
  serviceEntries: ServiceEntry[];
  
  @Column()
  supportedQualifications: string;
  
  @Column()
  version: number;
  
  @Column()
  procedure: string;
  
  @Column()
  isPublic: boolean;
  
  @Column()
  tags: string;
  
  @Column()
  resources: ServiceResource[];
  
  @Column()
  targetCustomers: string;
  
  @Column()
  isArchived: boolean;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}