import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "serviceOwner" })
export class ServiceOwnerEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  shortName: string;
  
  @Column()
  fullName: string;
  
  @Column()
  sector: string;
  
  @Column()
  contactInfo: ContactInfo;
  
  @Column()
  address: Address;
  
  @Column()
  code: string;
  
  @Column()
  organizationId: string;
  
  @Column()
  organizationName: string;
  
  @Column()
  createdAt: Date;
  
  @Column()
  updatedAt: Date;
  
  
}