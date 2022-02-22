import { Address } from './address';
export interface IAddressRepository {
  insertAddress(address: Address): Promise<Address>;
  findAll(): Promise<Address[]>;
  findById(id: string): Promise<Address>; 
  updateAddress(id: string,address: Address): Promise<void>;
  deleteById(id: string): Promise<void>;

}