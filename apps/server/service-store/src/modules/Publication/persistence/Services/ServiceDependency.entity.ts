import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from "typeorm";
import { ServiceEntity } from "./service.entity";
@Entity({ name: "serviceDependencies" })
export class ServiceDependencyEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  serviceId: string;
  @ManyToOne(type => ServiceEntity, service => service.serviceDependencies)
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity;
  @Column()
  dependsOn: string;
  @Column()
  type: string;
}