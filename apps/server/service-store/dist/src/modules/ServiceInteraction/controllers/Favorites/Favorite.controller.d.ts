import { FavoritePresenter } from './favorite.presenter';
import { CreateFavoriteDto, UpdateFavoriteDto } from '../favorites/favorite.dto';
import { FavoriteUseCases } from '../../usecases/favorite.usecases';
export declare class FavoritesController {
    private useCase;
    constructor(useCase: FavoriteUseCases);
    getFavorite(id: string): Promise<FavoritePresenter>;
    getFavorites(): Promise<FavoritePresenter[]>;
    updateFavorite(updateFavoriteDto: UpdateFavoriteDto): Promise<string>;
    deleteFavorite(id: string): Promise<string>;
    createFavorite(createFavoriteDto: CreateFavoriteDto): Promise<FavoritePresenter>;
}
