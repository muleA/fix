import { EntityRepository, Repository, } from 'typeorm';
import { Favorite } from '../../domain/Favorites/Favorite';
import { IFavoriteRepository } from '../../domain/favorites/favorite.repository.interface';
import { FavoriteEntity } from './favorite.entity';
@EntityRepository(FavoriteEntity)
export class FavoriteRepository extends Repository<FavoriteEntity> implements IFavoriteRepository {
  constructor() {
    super()
  }
  /**
  * A method that updates Favorite information in the database 
  */
  async updateFavorite(id: string, favorite: Favorite): Promise<void> {
    const favoriteEntity = this.toFavoriteEntity(favorite);
    await this.update({ id: favorite.id }, favoriteEntity);
  }
  /**
   * A method that inserts FavoriteEntity  into  database 
   *
   */
  async insertFavorite(favorite: Favorite): Promise<Favorite> {
    const favoriteEntity = this.toFavoriteEntity(favorite);
    const result = await this.insert(favoriteEntity);
    console.log(result.generatedMaps);
    return this.toFavorite(result.generatedMaps[0] as FavoriteEntity);
  }
  /**
  * A method that fetches all Favorites from the database 
  *
  */
  async findAll(): Promise<Favorite[]> {
    const favoritesEntity = await this.find();
    return favoritesEntity.map((favoriteEntity) => this.toFavorite(favoriteEntity));
  }
  /**
  * A method that fetches a specific Favorite by id  from the database 
  *@param  an Id of Favorite
  *@returns A Promise of Favorite
  */
  async findById(id: string): Promise<Favorite> {
    const favoriteEntity = await this.findOneOrFail(id);
    return this.toFavorite(favoriteEntity);
  }
  /**
    * A method that deletes a specific Favorite by id from the database
    *@param  an Id of Favorite
     */
  async deleteById(id: string): Promise<void> {
    await this.delete({ id: id });
  }
  /**
  *A method that copy FavoriteEntity data  a  Favorite domain  
  *@param favoriteEntity which compraises  Favorite information
  *@returns Favorite information
  */
  private toFavorite(favoriteEntity: FavoriteEntity): Favorite {
    const favorite: Favorite = new Favorite();
    favorite.id = favoriteEntity.id;
    favorite.serviceName = favoriteEntity.serviceName;
    favorite.serviceId = favoriteEntity.serviceId;
    favorite.userId = favoriteEntity.userId;   
    favorite.updatedAt = favoriteEntity.updatedAt;
    return favorite;
  }
  /**
   *A method that copy Favorite data to a FavoriteEntity   object 
   *@param favorite An favorite which compraises  Favorite information
   *@returns A Favorite which contain  Favorite information
   */
  private toFavoriteEntity(favorite: Favorite): FavoriteEntity {
    const favoriteEntity: FavoriteEntity = new FavoriteEntity();
    favoriteEntity.id = favorite.id;
    favoriteEntity.serviceName = favorite.serviceName;
    favoriteEntity.serviceId = favorite.serviceId;
    favoriteEntity.userId = favorite.userId;   
    return favoriteEntity;
  }
}