import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "serviceFee" })
export class ServiceFeeEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  serviceId: string;
  
  @Column()
  fee: number;
  
  @Column()
  currency: string;
  
  @Column()
  description: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}