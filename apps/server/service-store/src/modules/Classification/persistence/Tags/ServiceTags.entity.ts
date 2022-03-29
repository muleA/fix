import { CommonEntity } from "src/modules/shared/CommonEntity";
import {Entity, Column,PrimaryGeneratedColumn} from "typeorm";
@Entity({ name: "tags" })
export class TagsEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
}