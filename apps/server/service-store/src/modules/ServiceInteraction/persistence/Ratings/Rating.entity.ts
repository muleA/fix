import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity({ name: "ratings" })
export class RatingEntity extends CommonEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  serviceId: string;
  @Column()
  userId: string;
  @Column('int')
  score: number;
 

}