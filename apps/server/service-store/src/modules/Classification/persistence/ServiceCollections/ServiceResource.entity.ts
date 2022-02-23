import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn} from "typeorm";

@Entity({ name: "serviceResources" })
export class ServiceResourceEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  serviceCollectionId: string;
  
  @Column()
  attachmentUrl: string;
  
  @Column()
  content: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}