import { Favorite } from '../../domain/Favorites/favorite';
export declare class FavoritePresenter {
    id: string;
    serviceName: string;
    serviceId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(favorite: Favorite);
}
