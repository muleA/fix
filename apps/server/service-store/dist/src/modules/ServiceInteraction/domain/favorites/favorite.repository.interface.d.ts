import { Favorite } from './favorite';
export interface IFavoriteRepository {
    insertFavorite(favorite: Favorite): Promise<Favorite>;
    findAll(): Promise<Favorite[]>;
    findById(id: string): Promise<Favorite>;
    updateFavorite(id: string, favorite: Favorite): Promise<void>;
    deleteById(id: string): Promise<void>;
}
