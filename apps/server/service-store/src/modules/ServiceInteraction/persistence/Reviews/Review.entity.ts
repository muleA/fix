import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "review" })
export class ReviewEntity {
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
  
  @Column()
  likes: number;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}