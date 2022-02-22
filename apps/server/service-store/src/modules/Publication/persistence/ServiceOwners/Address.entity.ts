import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, @OneToOne(),@OneToMany(),@ManyToOne(),
} from "typeorm";

@Entity({ name: "address" })
export class AddressEntity {
  @Column()
  country: string;
  
  @Column()
  city: string;
  
  @Column()
  houseNumber: string;
  
  @Column()
  street: string;
  
  
}