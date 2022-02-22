import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CommonEntity } from 'src/modules/shared/CommonEntity';
//import { ContactInfoEntity } from "./ContactInfo.entity";
//import { AddressEntity } from "./Address.entity";

@Entity({ name: "serviceOwners" })
export class ServiceOwnerEntity extends CommonEntity {
   @PrimaryGeneratedColumn('uuid')
  id: string;
   
  @Column()
  shortName: string;
  
  @Column()
  fullName: string;
  
  @Column()
  sector: string;
  
  @Column('jsonb')
  contactInfo: ContactInfoEntity;
  
  @Column('jsonb')
  address: AddressEntity;
  
  @Column()
  code: string;
  
  @Column()
  organizationId: string;
  
  @Column()
  organizationName: string;
  
}