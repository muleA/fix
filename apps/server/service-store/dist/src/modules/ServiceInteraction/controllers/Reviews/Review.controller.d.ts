import { ReviewPresenter } from './review.presenter';
import { CreateReviewDto, UpdateReviewDto } from '../reviews/review.dto';
import { ReviewUseCases } from '../../usecases/review.usecases';
export declare class ReviewsController {
    private useCase;
    constructor(useCase: ReviewUseCases);
    getReview(id: string): Promise<ReviewPresenter>;
    getReviews(): Promise<ReviewPresenter[]>;
    updateReview(updateReviewDto: UpdateReviewDto): Promise<string>;
    deleteReview(id: string): Promise<string>;
    createReview(createReviewDto: CreateReviewDto): Promise<ReviewPresenter>;
}
