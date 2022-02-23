import { Repository } from 'typeorm';
import { Rating } from '../../domain/ratings/rating';
import { IRatingRepository } from '../../domain/ratings/rating.repository.interface';
import { RatingEntity } from './rating.entity';
export declare class RatingRepository extends Repository<RatingEntity> implements IRatingRepository {
    constructor();
    updateRating(id: string, rating: Rating): Promise<void>;
    insertRating(rating: Rating): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findById(id: string): Promise<Rating>;
    deleteById(id: string): Promise<void>;
    private toRating;
    private toRatingEntity;
}
