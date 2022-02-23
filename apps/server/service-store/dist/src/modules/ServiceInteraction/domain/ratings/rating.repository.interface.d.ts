import { Rating } from './rating';
export interface IRatingRepository {
    insertRating(rating: Rating): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findById(id: string): Promise<Rating>;
    updateRating(id: string, rating: Rating): Promise<void>;
    deleteById(id: string): Promise<void>;
}
