import { ServiceEntity } from "./service.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from "typeorm";
import { CommonEntity } from "src/modules/shared/CommonEntity";
@Entity({ name: "serviceResources" })
export class ServiceResourceEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(type => ServiceEntity, service => service.serviceResources)
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity;
  @Column()
  attachmentUrl: string;
  @Column()
  content: string;
}