import { Favorite } from '../domain/favorites/favorite';
import { IFavoriteRepository } from '../domain/favorites/favorite.repository.interface';
import { CreateFavoriteDto, UpdateFavoriteDto } from '../controllers/favorites/favorite.dto';
export declare class FavoriteUseCases {
    private favoriteRepository;
    private favoritedomain;
    private readonly logger;
    constructor(favoriteRepository: IFavoriteRepository);
    createFavorite(favoriteDto: CreateFavoriteDto): Promise<Favorite>;
    deleteFavorite(id: string): Promise<void>;
    getFavorite(id: string): Promise<Favorite>;
    fetFavorites(): Promise<Favorite[]>;
    updateFavorite(favoriteDto: UpdateFavoriteDto): Promise<void>;
}
