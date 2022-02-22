import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "serviceProvider" })
export class ServiceProviderEntity {
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
  location: Location;
  
  @Column()
  address: Address;
  
  @Column()
  delegatedServices: DelegatedService[];
  
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