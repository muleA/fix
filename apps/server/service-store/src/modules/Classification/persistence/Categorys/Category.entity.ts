
import { ServiceEntity } from "src/modules/Publication/persistence/services/service.entity";
import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
@Entity({ name: "categories" })
export class CategoryEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  code: string;
  // @Column({ nullable: true })
  // serviceId: string;

  @Column({ nullable: true })
  parentId: string;

  @ManyToOne(() => CategoryEntity, parent => parent.parent, { onDelete: 'SET NULL' })
  parent: CategoryEntity;

  @ManyToMany(() => ServiceEntity, (service) => service.categories, { onDelete: 'SET NULL' })
  @JoinTable({
    name: 'service_catagories',
    joinColumn: {
      name: 'categoryId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'serviceId',
      referencedColumnName: 'id',
    },
  })
  services: ServiceEntity[];
}




