import { ProcessingTime } from '../../domain/services/ProcessingTime';
export declare class ProcessingTimePresenter {
    id: string;
    serviceId: string;
    time: number;
    currency: string;
    description: string;
    constructor(processingTime: ProcessingTime);
}
