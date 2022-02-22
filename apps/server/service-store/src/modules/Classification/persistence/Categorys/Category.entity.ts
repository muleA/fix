import CommonEntity from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToOne, OneToMany, ManyToOne,
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
  /**
   *  for bi-directional 
   * 
   @ManyToOne(()=>CategoryEntity, parentCategory=>parentCategory.childCategories )
  parentCategory: CategoryEntity;
   @OneToMany(()=>CategoryEntity, parentCategory=>parentCategory.parentCategory )
  childCategories: CategoryEntity[];
   */
  @ManyToOne(() => CategoryEntity, parent => parent.parent)
  parent: CategoryEntity;


}




