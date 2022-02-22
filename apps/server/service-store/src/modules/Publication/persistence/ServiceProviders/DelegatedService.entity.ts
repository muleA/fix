import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "delegatedService" })
export class DelegatedServiceEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  providerId: string;
  
  @Column()
  serviceId: string;
  
  @Column()
  title: string;
  
  @Column()
  dispatchingRule: string;
  
  @Column()
  status: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}