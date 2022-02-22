import { CommonEntity } from 'src/modules/shared/CommonEntity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { DelegatedServiceEntity } from './DelegatedService.entity';
import { ContactInfo } from '../../domain/serviceOwners/ContactInfo';
import { Address } from '../../domain/ServiceOwners/address';

@Entity({ name: 'serviceProvider' })
export class ServiceProviderEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  shortName: string;

  @Column()
  fullName: string;

  @Column()
  sector: string;

  @Column('jsonb')
  contactInfo: ContactInfo;

  @Column('jsonb')
  location: Location;

  @Column('jsonb')
  address: Address;

  @OneToMany(
    (type) => DelegatedServiceEntity,
    (delegatedService) => delegatedService.serviceProvider,
    { cascade: true }
  )
  delegatedServices: DelegatedServiceEntity[];
  @Column()
  code: string;

  @Column()
  organizationId: string;

  @Column()
  organizationName: string;
}
