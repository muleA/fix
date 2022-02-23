import { Rating } from '../../domain/Ratings/rating';
export declare class UpdateRatingDto {
    id: string;
    serviceId: string;
    userId: string;
    score: number;
    static fromDTO(ratingDto: UpdateRatingDto): Rating;
}
export declare class CreateRatingDto {
    id: string;
    serviceId: string;
    userId: string;
    score: number;
    static fromDTO(ratingDto: CreateRatingDto): Rating;
}
