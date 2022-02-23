import { Review } from '../domain/reviews/review';
import { IReviewRepository } from '../domain/reviews/review.repository.interface';
import { CreateReviewDto, UpdateReviewDto } from '../controllers/reviews/review.dto';
export declare class ReviewUseCases {
    private reviewRepository;
    private reviewdomain;
    private readonly logger;
    constructor(reviewRepository: IReviewRepository);
    createReview(reviewDto: CreateReviewDto): Promise<Review>;
    deleteReview(id: string): Promise<void>;
    getReview(id: string): Promise<Review>;
    fetReviews(): Promise<Review[]>;
    updateReview(reviewDto: UpdateReviewDto): Promise<void>;
}
