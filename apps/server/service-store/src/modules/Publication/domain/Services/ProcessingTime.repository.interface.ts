import { ProcessingTime } from './processingTime';
export interface IProcessingTimeRepository {
  insertProcessingTime(processingTime: ProcessingTime): Promise<ProcessingTime>;
  findAll(): Promise<ProcessingTime[]>;
  findById(id: string): Promise<ProcessingTime>; 
  updateProcessingTime(id: string,processingTime: ProcessingTime): Promise<void>;
  deleteById(id: string): Promise<void>;

}