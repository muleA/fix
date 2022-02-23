import { Repository } from 'typeorm';
import { Favorite } from '../../domain/Favorites/Favorite';
import { IFavoriteRepository } from '../../domain/favorites/favorite.repository.interface';
import { FavoriteEntity } from './favorite.entity';
export declare class FavoriteRepository extends Repository<FavoriteEntity> implements IFavoriteRepository {
    constructor();
    updateFavorite(id: string, favorite: Favorite): Promise<void>;
    insertFavorite(favorite: Favorite): Promise<Favorite>;
    findAll(): Promise<Favorite[]>;
    findById(id: string): Promise<Favorite>;
    deleteById(id: string): Promise<void>;
    private toFavorite;
    private toFavoriteEntity;
}
