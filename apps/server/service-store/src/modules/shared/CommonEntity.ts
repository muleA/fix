import {
  Column,
  CreateDateColumn,DeleteDateColumn,
  UpdateDateColumn
} from "typeorm";

export abstract class CommonEntity{
  @Column({nullable: true })
  createdBy?:string;
  @Column({nullable: true })
  updatedBy?:string;
  @CreateDateColumn({type:'timestamptz', default:'now()'})
  createdAt: Date;  
  @UpdateDateColumn({type:'timestamptz', default:'now()'})
  updatedAt: Date;
  @DeleteDateColumn({nullable: true })
  deletedAt:Date;
  @Column({nullable: true })
  deletedBy:string;

}