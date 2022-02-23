import { ServiceResource } from "src/modules/Publication/domain/services/ServiceResource";
import { ServiceResourceEntity } from "src/modules/Publication/persistence/services/ServiceResource.entity";
import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToOne, OneToMany, ManyToOne
} from "typeorm";
import { ServiceEntryEntity } from "./ServiceEntry.entity";
@Entity({ name: "serviceCollection" })
export class ServiceCollectionEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'description' })
  description?: string;
  @Column({ name: 'code' })
  code: string;
 
  @OneToMany(type => ServiceEntryEntity, serviceEntry => serviceEntry.serviceCollectionId)
  serviceEntries: ServiceEntryEntity[];
  @Column({ name: 'supportedQualifications' })
  supportedQualifications: string;
  @Column({ name: 'version' })
  version: number;
  @Column({ name: 'procedure' })
  procedure: string;
  @Column({ name: 'isPublic' })
  isPublic: boolean;
  @Column({ name: 'tags' })
  tags: string;

  @OneToMany(type => ServiceResourceEntity, resource => resource.service)
  resources: ServiceResource[];
  @Column({ name: 'targetCustomers' })
  targetCustomers: string;
  @Column({ name: 'isArchived' })
  isArchived: boolean;



}