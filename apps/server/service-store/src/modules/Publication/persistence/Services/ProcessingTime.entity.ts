import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "processingTime" })
export class ProcessingTimeEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  serviceId: string;
  
  @Column()
  time: number;
  
  @Column()
  currency: string;
  
  @Column()
  description: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}