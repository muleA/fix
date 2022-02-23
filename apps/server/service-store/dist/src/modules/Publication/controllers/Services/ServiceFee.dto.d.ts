import { ServiceFee } from '../../domain/services/ServiceFee';
export declare class UpdateServiceFeeDto {
    id: string;
    serviceId: string;
    fee: number;
    currency: string;
    description: string;
    static fromDTO(serviceFeeDto: UpdateServiceFeeDto): ServiceFee;
}
export declare class CreateServiceFeeDto {
    id: string;
    serviceId: string;
    fee: number;
    currency: string;
    description: string;
    static fromDTO(serviceFeeDto: CreateServiceFeeDto): ServiceFee;
}
