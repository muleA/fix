import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from "typeorm";
import { ServiceEntity } from "./service.entity";
@Entity({ name: "languages" })
export class LanguageEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  serviceId: string;
  @ManyToOne(type => ServiceEntity, service => service.languages)
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity;
  @Column()
  name: string;
  @Column()
  code: string;
}