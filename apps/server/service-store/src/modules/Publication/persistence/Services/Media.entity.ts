import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from "typeorm";
import { ServiceEntity } from "./service.entity";
@Entity({ name: "medias" })
export class MediaEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  serviceId: string;
  @Column()
  url: string;
  @Column()
  caption: string;
  @Column()
  type: string;
  @ManyToOne(type => ServiceEntity, service => service.medias)
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity;
}