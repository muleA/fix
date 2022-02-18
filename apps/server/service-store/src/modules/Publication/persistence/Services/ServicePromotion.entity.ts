import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "servicePromotion" })
export class ServicePromotionEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  serviceId: string;
  
  @Column()
  from: Date;
  
  @Column()
  to: Date;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}