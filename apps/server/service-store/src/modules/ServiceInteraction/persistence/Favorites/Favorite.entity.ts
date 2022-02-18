import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "favorite" })
export class FavoriteEntity {
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