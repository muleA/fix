import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "searchHistory" })
export class SearchHistoryEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  serviceName: string;
  
  @Column()
  serviceId: string;
  
  @Column()
  userId: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}