import { Repository } from 'typeorm';
import { Service } from '../../domain/services/service';
import { IServiceRepository } from '../../domain/services/service.repository.interface';
import { ServiceEntity } from './service.entity';
export declare class ServiceRepository extends Repository<ServiceEntity> implements IServiceRepository {
    constructor();
    updateService(id: string, service: Service): Promise<void>;
    insertService(service: Service): Promise<Service>;
    findAll(): Promise<Service[]>;
    findById(id: string): Promise<Service>;
    deleteById(id: string): Promise<void>;
    private toService;
    private toServiceEntity;
}
