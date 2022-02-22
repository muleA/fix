import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "category" })
export class CategoryEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  name: string;
  
  @Column()
  description: string;
  
  @Column()
  code: string;
  
  @Column()
  parentId: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}