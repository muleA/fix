import { RatingPresenter } from './rating.presenter';
import { CreateRatingDto, UpdateRatingDto } from '../ratings/rating.dto';
import { RatingUseCases } from '../../usecases/rating.usecases';
export declare class RatingsController {
    private useCase;
    constructor(useCase: RatingUseCases);
    getRating(id: string): Promise<RatingPresenter>;
    getRatings(): Promise<RatingPresenter[]>;
    updateRating(updateRatingDto: UpdateRatingDto): Promise<string>;
    deleteRating(id: string): Promise<string>;
    createRating(createRatingDto: CreateRatingDto): Promise<RatingPresenter>;
}
