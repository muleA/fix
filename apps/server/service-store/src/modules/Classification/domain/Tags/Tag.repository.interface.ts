import { Tags } from "./tags";
export interface ITagRepository {
  insertTag(tag: Tags): Promise<Tags>;
  findAll(): Promise<Tags[]>;
  findById(id: string): Promise<Tags>; 
  updateTag(id: string,tag: Tags): Promise<void>;
  deleteById(id: string): Promise<void>;

}