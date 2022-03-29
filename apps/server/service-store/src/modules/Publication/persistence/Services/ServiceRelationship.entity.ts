import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToOne, OneToMany, ManyToOne,
} from "typeorm";

@Entity({ name: "serviceRelationships" })
export class ServiceRelationshipEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  serviceId: string;

  @Column()
  relatedToServiceId: string;

  @Column()
  status: string;


}