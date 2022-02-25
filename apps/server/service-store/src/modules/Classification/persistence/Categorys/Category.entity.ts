
import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
 ManyToOne,
} from "typeorm";
@Entity({ name: "category" })
export class CategoryEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  code: string; 
  @ManyToOne(() => CategoryEntity, parent => parent.parent)
  parent: CategoryEntity;


}




