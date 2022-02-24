import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,  
  ManyToOne
} from "typeorm";
import { ReviewEntity } from "./review.entity";
@Entity({ name: "likes" })
export class LikeEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  reviewId: string;
  @Column()
  userId: string;
  @ManyToOne(type => ReviewEntity, review => review.likesDetail)
  review: ReviewEntity;
}