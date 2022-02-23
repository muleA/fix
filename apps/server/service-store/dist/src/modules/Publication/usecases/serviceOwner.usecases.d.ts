import { ServiceOwner } from '../domain/serviceOwners/serviceOwner';
import { IServiceOwnerRepository } from '../domain/serviceOwners/serviceOwner.repository.interface';
import { CreateServiceOwnerDto, UpdateServiceOwnerDto } from '../controllers/serviceOwners/serviceOwner.dto';
export declare class ServiceOwnerUseCases {
    private serviceOwnerRepository;
    private serviceOwnerdomain;
    private readonly logger;
    constructor(serviceOwnerRepository: IServiceOwnerRepository);
    createServiceOwner(serviceOwnerDto: CreateServiceOwnerDto): Promise<ServiceOwner>;
    deleteServiceOwner(id: string): Promise<void>;
    getServiceOwner(id: string): Promise<ServiceOwner>;
    fetServiceOwners(): Promise<ServiceOwner[]>;
    updateServiceOwner(serviceOwnerDto: UpdateServiceOwnerDto): Promise<void>;
}
