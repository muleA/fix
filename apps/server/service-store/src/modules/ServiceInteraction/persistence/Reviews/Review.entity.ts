import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany  
} from "typeorm";
import { LikeEntity } from "./Like.entity";
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
  @OneToMany(type => LikeEntity, like => like.review, {eager:true, cascade:true})
  likesDetail: LikeEntity[];
}