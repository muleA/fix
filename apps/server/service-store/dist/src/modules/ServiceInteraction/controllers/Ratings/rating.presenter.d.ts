import { Rating } from '../../domain/Ratings/rating';
export declare class RatingPresenter {
    id: string;
    serviceId: string;
    userId: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(rating: Rating);
}
