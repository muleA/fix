import { Like } from '../../domain/Reviews/like';
export declare class LikePresenter {
    id: string;
    reviewId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(like: Like);
}
