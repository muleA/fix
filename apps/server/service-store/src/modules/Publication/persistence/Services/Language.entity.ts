import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "language" })
export class LanguageEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  serviceId: string;
  
  @Column()
  name: string;
  
  @Column()
  code: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}