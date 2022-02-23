import { ServiceOwnerPresenter } from './serviceOwner.presenter';
import { CreateServiceOwnerDto, UpdateServiceOwnerDto } from '../serviceOwners/serviceOwner.dto';
import { ServiceOwnerUseCases } from '../../usecases/serviceOwner.usecases';
export declare class ServiceOwnersController {
    private useCase;
    constructor(useCase: ServiceOwnerUseCases);
    getServiceOwner(id: string): Promise<ServiceOwnerPresenter>;
    getServiceOwners(): Promise<ServiceOwnerPresenter[]>;
    updateServiceOwner(updateServiceOwnerDto: UpdateServiceOwnerDto): Promise<string>;
    deleteServiceOwner(id: string): Promise<string>;
    createServiceOwner(createServiceOwnerDto: CreateServiceOwnerDto): Promise<ServiceOwnerPresenter>;
}
