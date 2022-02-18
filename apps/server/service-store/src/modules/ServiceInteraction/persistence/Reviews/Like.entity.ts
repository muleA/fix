import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "like" })
export class LikeEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  reviewId: string;
  
  @Column()
  userId: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}