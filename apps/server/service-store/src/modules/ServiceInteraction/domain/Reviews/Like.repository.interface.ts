import { Like } from './like';
export interface ILikeRepository {
  insertLike(like: Like): Promise<Like>;
  findAll(): Promise<Like[]>;
  findById(id: string): Promise<Like>; 
  updateLike(id: string,like: Like): Promise<void>;
  deleteById(id: string): Promise<void>;

}