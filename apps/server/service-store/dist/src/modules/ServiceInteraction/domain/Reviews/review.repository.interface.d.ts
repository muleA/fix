import { Review } from './review';
export interface IReviewRepository {
    insertReview(review: Review): Promise<Review>;
    findAll(): Promise<Review[]>;
    findById(id: string): Promise<Review>;
    updateReview(id: string, review: Review): Promise<void>;
    deleteById(id: string): Promise<void>;
}
