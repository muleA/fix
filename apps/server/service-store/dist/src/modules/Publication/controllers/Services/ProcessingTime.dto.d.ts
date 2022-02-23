import { ProcessingTime } from '../../domain/services/ProcessingTime';
export declare class UpdateProcessingTimeDto {
    id: string;
    serviceId: string;
    time: number;
    currency: string;
    description: string;
    static fromDTO(processingTimeDto: UpdateProcessingTimeDto): ProcessingTime;
}
export declare class CreateProcessingTimeDto {
    id: string;
    serviceId: string;
    time: number;
    currency: string;
    description: string;
    static fromDTO(processingTimeDto: CreateProcessingTimeDto): ProcessingTime;
}
