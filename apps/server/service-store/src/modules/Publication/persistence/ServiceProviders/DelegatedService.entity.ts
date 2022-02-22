import { CommonEntity } from 'src/modules/shared/CommonEntity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ServiceProviderEntity } from './serviceProvider.entity';

@Entity({ name: 'delegatedService' })
export class DelegatedServiceEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  providerId: string;

  @Column()
  serviceId: string;

  @ManyToOne(
    (type) => ServiceProviderEntity,
    (serviceProvider) => serviceProvider.delegatedServices
  )
  @JoinColumn({ name: 'serviceOwnerId' })
  serviceProvider: ServiceProviderEntity;
  @Column()
  title: string;

  @Column()
  dispatchingRule: string;

  @Column()
  status: string;
}
