import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity({ name: "favorites" })
export class FavoriteEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  serviceName: string;
  @Column()
  serviceId: string;
  @Column()
  userId: string;
}