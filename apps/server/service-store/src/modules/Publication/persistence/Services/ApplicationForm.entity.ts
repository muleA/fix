import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "applicationForm" })
export class ApplicationFormEntity {
  @Column()
  title: string;
  
  @Column()
  formUrl: string;
  
  @Column()
  status: string;
  
  @Column()
  taskName: string;
  
  
}