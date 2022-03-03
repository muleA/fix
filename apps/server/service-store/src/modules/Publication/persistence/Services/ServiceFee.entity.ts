import { ServiceEntity } from "./service.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn, ManyToOne, JoinColumn
} from "typeorm";
import { CommonEntity } from "src/modules/shared/CommonEntity";
@Entity({ name: "serviceFees" })
export class ServiceFeeEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  serviceId: string;
  @ManyToOne(type => ServiceEntity, service => service.serviceFees, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity;
  @Column('double precision') //double precision
  fee: number;
  @Column()
  currency: string;
  @Column('text')
  description?: string;
}