import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, 
} from "typeorm";
@Entity({ name: "tag" })
export class TagEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}