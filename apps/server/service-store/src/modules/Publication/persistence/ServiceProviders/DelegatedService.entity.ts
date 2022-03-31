import { CommonEntity } from 'src/modules/shared/CommonEntity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ServiceProviderEntity } from './serviceProvider.entity';

@Entity({ name: 'delegatedServices' })
export class DelegatedServiceEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  serviceId: string;

  @ManyToOne(
    (type) => ServiceProviderEntity,
    (serviceProvider) => serviceProvider.delegatedServices
  )
  @JoinColumn({ name: 'providerId' })
  serviceProvider: ServiceProviderEntity;
  @Column()
  title: string;

  @Column()
  dispatchingRule: string;

  @Column()
  status: string;
}
