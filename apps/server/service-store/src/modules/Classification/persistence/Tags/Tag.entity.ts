import { CommonEntity } from "src/modules/shared/CommonEntity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity({ name: "tag" })
export class TagEntity extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
}