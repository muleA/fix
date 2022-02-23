import { Rating } from '../domain/ratings/rating';
import { IRatingRepository } from '../domain/ratings/rating.repository.interface';
import { CreateRatingDto, UpdateRatingDto } from '../controllers/ratings/rating.dto';
export declare class RatingUseCases {
    private ratingRepository;
    private ratingdomain;
    private readonly logger;
    constructor(ratingRepository: IRatingRepository);
    createRating(ratingDto: CreateRatingDto): Promise<Rating>;
    deleteRating(id: string): Promise<void>;
    getRating(id: string): Promise<Rating>;
    fetRatings(): Promise<Rating[]>;
    updateRating(ratingDto: UpdateRatingDto): Promise<void>;
}
