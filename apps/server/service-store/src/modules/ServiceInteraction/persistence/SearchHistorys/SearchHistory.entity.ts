import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity({ name: "searchHistory" })
export class SearchHistoryEntity extends CommonEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  serviceName: string;
  @Column()
  serviceId: string;
  @Column()
  userId: string;
 

}