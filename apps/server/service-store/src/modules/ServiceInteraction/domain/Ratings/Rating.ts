
import { IRatingRepository } from '../../domain/ratings/rating.repository.interface';
export class Rating {
    constructor() { }
    id: string;
    serviceId: string;
    userId: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;

}