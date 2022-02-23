import { ServiceDependency } from '../../domain/services/ServiceDependency';
export declare class UpdateServiceDependencyDto {
    id: string;
    serviceId: string;
    dependsOn: string;
    type: string;
    static fromDTO(serviceDependencyDto: UpdateServiceDependencyDto): ServiceDependency;
}
export declare class CreateServiceDependencyDto {
    id: string;
    serviceId: string;
    dependsOn: string;
    type: string;
    static fromDTO(serviceDependencyDto: CreateServiceDependencyDto): ServiceDependency;
}
