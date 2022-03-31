import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToOne, OneToMany, ManyToOne
} from "typeorm";
import { ServiceEntryEntity } from "./ServiceEntry.entity";
import { ServiceResourceEntity } from "./ServiceResource.entity";
@Entity({ name: "serviceCollections" })
export class ServiceCollectionEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'description', nullable: true })
  description?: string;
  @Column({ name: 'code' })
  code: string;

  @OneToMany(type => ServiceEntryEntity, serviceEntry => serviceEntry.serviceCollection, { eager: true, cascade: true })
  serviceEntries: ServiceEntryEntity[];
  @Column({ name: 'supportedQualifications', nullable: true })
  supportedQualifications: string;
  @Column('double precision', { nullable: true })
  version: number;
  @Column({ name: 'procedure' })
  procedure: string;
  @Column({ name: 'isPublic' })
  isPublic: boolean;
  @Column({ name: 'tags', nullable: true })
  tags: string;

  @OneToMany(type => ServiceResourceEntity, resource => resource.serviceCollection, { eager: true, cascade: true })
  serviceResources: ServiceResourceEntity[];
  @Column({ name: 'targetCustomers' })
  targetCustomers: string;
  @Column({ name: 'isArchived', default: false })
  isArchived: boolean;



}