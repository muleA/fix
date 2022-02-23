import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
   ManyToOne, JoinColumn
} from "typeorm";
import { ServiceCollectionEntity } from "./serviceCollection.entity";
@Entity({ name: "serviceEntries" })
export class ServiceEntryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'serviceId' })
  serviceId: string;
  @Column({ name: 'serviceCollectionId' })
  serviceCollectionId: string;
  @ManyToOne(type => ServiceCollectionEntity, serviceCollection => serviceCollection.serviceEntries)
  @JoinColumn({ name: 'serviceCollectionId' })
  serviceCollection: ServiceCollectionEntity;
}