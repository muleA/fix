import { Review } from '../../domain/Reviews/review';
export declare class UpdateReviewDto {
    id: string;
    title: string;
    body: string;
    serviceId: string;
    userId: string;
    status: string;
    likes: number;
    static fromDTO(reviewDto: UpdateReviewDto): Review;
}
export declare class CreateReviewDto {
    id: string;
    title: string;
    body: string;
    serviceId: string;
    userId: string;
    status: string;
    likes: number;
    static fromDTO(reviewDto: CreateReviewDto): Review;
}
