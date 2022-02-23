import { Review } from '../../domain/Reviews/review';
export declare class ReviewPresenter {
    id: string;
    title: string;
    body: string;
    serviceId: string;
    userId: string;
    status: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(review: Review);
}
