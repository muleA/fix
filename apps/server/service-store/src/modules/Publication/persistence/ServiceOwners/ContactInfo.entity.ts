import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "contactInfo" })
export class ContactInfoEntity {
  @Column()
  email: string;
  
  @Column()
  phone: string;
  
  @Column()
  name: string;
  
  
}