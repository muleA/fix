import { Review } from "./review";

export class Like {
    constructor() { }
    id: string;
    reviewId: string;
    userId: string;
    createdAt: Date;
    updatedAt:Date;
    review: Review;
}