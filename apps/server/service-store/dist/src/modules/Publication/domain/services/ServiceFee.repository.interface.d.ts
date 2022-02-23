import { ServiceFee } from './serviceFee';
export interface IServiceFeeRepository {
    insertServiceFee(serviceFee: ServiceFee): Promise<ServiceFee>;
    findAll(): Promise<ServiceFee[]>;
    findById(id: string): Promise<ServiceFee>;
    updateServiceFee(id: string, serviceFee: ServiceFee): Promise<void>;
    deleteById(id: string): Promise<void>;
}
