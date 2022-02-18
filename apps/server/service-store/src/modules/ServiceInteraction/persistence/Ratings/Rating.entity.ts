import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "rating" })
export class RatingEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  serviceId: string;
  
  @Column()
  userId: string;
  
  @Column()
  score: number;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}