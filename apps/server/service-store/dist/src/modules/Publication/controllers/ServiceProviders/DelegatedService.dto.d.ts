import { DelegatedService } from '../../domain/serviceProviders/DelegatedService';
export declare class UpdateDelegatedServiceDto {
    id: string;
    providerId: string;
    serviceId: string;
    title: string;
    dispatchingRule: string;
    status: string;
    static fromDTO(delegatedServiceDto: UpdateDelegatedServiceDto): DelegatedService;
}
export declare class CreateDelegatedServiceDto {
    providerId: string;
    serviceId: string;
    title: string;
    dispatchingRule: string;
    status: string;
    static fromDTO(delegatedServiceDto: CreateDelegatedServiceDto): DelegatedService;
}
