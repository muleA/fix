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
  @Column()
  serviceId: string;
  @ManyToOne(type => ServiceEntity, service => service.processingTimes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity;
  @Column('double precision')
  time: number;
  @Column()
  currency: string;
  @Column()
  description: string;
}