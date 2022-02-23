import {
  Column,
  CreateDateColumn,DeleteDateColumn,
  UpdateDateColumn
} from "typeorm";

export abstract class CommonEntity{
  @Column()
  createdBy:string;
  @Column()
  updatedBy?:string;
  @CreateDateColumn('timestamptz')
  createdAt: Date;  
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt?:Date;
  @Column()
  deletedBy?:string;

}