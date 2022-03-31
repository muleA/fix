import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { ServiceCollectionEntity } from "./serviceCollection.entity";

@Entity({ name: "serviceResource" })
export class ServiceResourceEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  serviceCollectionId: string;

  @Column()
  attachmentUrl: string;

  @Column()
  content: string;

  @ManyToOne(type => ServiceCollectionEntity, serviceCollection => serviceCollection.serviceResources, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'serviceCollectionId' })
  serviceCollection: ServiceCollectionEntity;

}