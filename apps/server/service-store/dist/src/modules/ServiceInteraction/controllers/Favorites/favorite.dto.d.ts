import { Favorite } from '../../domain/Favorites/favorite';
export declare class UpdateFavoriteDto {
    id: string;
    serviceName: string;
    serviceId: string;
    userId: string;
    static fromDTO(favoriteDto: UpdateFavoriteDto): Favorite;
}
export declare class CreateFavoriteDto {
    serviceName: string;
    serviceId: string;
    userId: string;
    static fromDTO(favoriteDto: CreateFavoriteDto): Favorite;
}
