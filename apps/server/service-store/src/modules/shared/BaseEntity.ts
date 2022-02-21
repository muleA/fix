import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,DeleteDateColumn,
  UpdateDateColumn, OneToOne,OneToMany,ManyToOne,
} from "typeorm";

export default abstract class BaseEntity{
  @Column()
  createdBy:string;
  @Column()
  updateddBy?:string;
  @CreateDateColumn()
  createdAt: Date;  
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt?:Date;
  @Column()
  deletedBy:string;

}