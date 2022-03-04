import { CommonEntity } from 'src/modules/shared/CommonEntity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DelegatedServiceEntity } from './DelegatedService.entity';
import { ContactInfo } from '../../domain/serviceOwners/ContactInfo';
import { Address } from '../../domain/ServiceOwners/address';
import { ProviderLocation } from '../../domain/ServiceProviders/ProviderLocation';

@Entity({ name: 'serviceProviders' })
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
  location: ProviderLocation;

  @Column('jsonb')
  address: Address;

  @OneToMany(
    (type) => DelegatedServiceEntity,
    (delegatedService) => delegatedService.serviceProvider,
    { eager: true, cascade: true, onDelete: 'CASCADE' }
  )
  delegatedServices: DelegatedServiceEntity[];
  @Column()
  code: string;

  @Column()
  organizationId: string;

  @Column()
  organizationName: string;
}
