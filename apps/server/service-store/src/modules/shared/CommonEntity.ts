import {
  Column,
  CreateDateColumn,DeleteDateColumn,
  UpdateDateColumn
} from "typeorm";

export abstract class CommonEntity{
  @Column({default:'6ecd8c99-4036-403d-bf84-cf8400f67836'})
  createdBy:string;
  @Column({default:'6ecd8c99-4036-403d-bf84-cf8400f67836'})
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