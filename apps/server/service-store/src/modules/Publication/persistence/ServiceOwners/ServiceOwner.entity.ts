import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CommonEntity } from 'src/modules/shared/CommonEntity';
import { Address } from "../../domain/ServiceOwners/address";
import { ContactInfo } from "../../domain/serviceOwners/ContactInfo";
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

  @Column({type:'jsonb'})
  contactInfo: ContactInfo;
  
  @Column({type:'jsonb'})
  address: Address;
  @Column()
  code: string;
  
  @Column()
  organizationId: string;
  
  @Column()
  organizationName: string;
  
}