import { Repository } from 'typeorm';
import { Review } from '../../domain/reviews/review';
import { IReviewRepository } from '../../domain/reviews/review.repository.interface';
import { ReviewEntity } from './review.entity';
export declare class ReviewRepository extends Repository<ReviewEntity> implements IReviewRepository {
    constructor();
    updateReview(id: string, review: Review): Promise<void>;
    insertReview(review: Review): Promise<Review>;
    findAll(): Promise<Review[]>;
    findById(id: string): Promise<Review>;
    deleteById(id: string): Promise<void>;
    private toReview;
    private toReviewEntity;
}
