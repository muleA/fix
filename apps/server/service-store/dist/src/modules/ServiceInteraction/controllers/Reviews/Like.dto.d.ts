import { Like } from '../../domain/Reviews/like';
export declare class UpdateLikeDto {
    id: string;
    reviewId: string;
    userId: string;
    static fromDTO(likeDto: UpdateLikeDto): Like;
}
export declare class CreateLikeDto {
    id: string;
    reviewId: string;
    userId: string;
    static fromDTO(likeDto: CreateLikeDto): Like;
}
