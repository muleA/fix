import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,DeleteDateColumn,
  UpdateDateColumn, OneToOne,OneToMany,ManyToOne,
} from "typeorm";
export  abstract class CommonEntity{
  @Column()
  createdBy:string;
  @Column()
  updatedBy?:string;
  @CreateDateColumn({type:'timestamptz', default: () => 'NOW()'})
  createdAt: Date;  
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt?:Date;
  @Column()
  deletedBy:string;

}