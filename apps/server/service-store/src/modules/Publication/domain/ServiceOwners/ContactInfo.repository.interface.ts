import { ContactInfo } from './contactInfo';
export interface IContactInfoRepository {
  insertContactInfo(contactInfo: ContactInfo): Promise<ContactInfo>;
  findAll(): Promise<ContactInfo[]>;
  findById(id: string): Promise<ContactInfo>; 
  updateContactInfo(id: string,contactInfo: ContactInfo): Promise<void>;
  deleteById(id: string): Promise<void>;

}