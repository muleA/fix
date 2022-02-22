import { ServiceEntity } from "./service.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn, ManyToOne, JoinColumn
} from "typeorm";
import { CommonEntity } from "src/modules/shared/CommonEntity";
@Entity({ name: "processingTimes" })
export class ProcessingTimeEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(type => ServiceEntity, service => service.processingTimes)
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity;
  @Column()
  time: number;
  @Column()
  currency: string;
  @Column()
  description: string;
}