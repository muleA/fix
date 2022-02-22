import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "location" })
export class LocationEntity {
  @Column()
  city: string;
  
  @Column()
  latitude: number;
  
  @Column()
  longitude: number;
  
  @Column()
  landmark: string;
  
  
}