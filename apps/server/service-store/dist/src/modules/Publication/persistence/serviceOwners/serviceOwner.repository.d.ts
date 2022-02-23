import { Repository } from 'typeorm';
import { ServiceOwner } from '../../domain/serviceOwners/serviceOwner';
import { IServiceOwnerRepository } from '../../domain/serviceOwners/serviceOwner.repository.interface';
import { ServiceOwnerEntity } from './serviceOwner.entity';
export declare class ServiceOwnerRepository extends Repository<ServiceOwnerEntity> implements IServiceOwnerRepository {
    constructor();
    updateServiceOwner(id: string, serviceOwner: ServiceOwner): Promise<void>;
    insertServiceOwner(serviceOwner: ServiceOwner): Promise<ServiceOwner>;
    findAll(): Promise<ServiceOwner[]>;
    findById(id: string): Promise<ServiceOwner>;
    deleteById(id: string): Promise<void>;
    private toServiceOwner;
    private toServiceOwnerEntity;
}
