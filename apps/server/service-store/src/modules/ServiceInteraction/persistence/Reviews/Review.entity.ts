import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity({ name: "reviews" })
export class ReviewEntity extends CommonEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  body: string;
  @Column()
  serviceId: string;
  @Column()
  userId: string;
  @Column()
  status: string;
  @Column('int')
  likes: number;
}