import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "media" })
export class MediaEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  url: string;
  
  @Column()
  caption: string;
  
  @Column()
  type: string;
  
  @Column()
  serviceId: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}