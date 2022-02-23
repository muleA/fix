import { ApplicationForm } from '../../domain/services/ApplicationForm';
export declare class UpdateApplicationFormDto {
    title: string;
    formUrl: string;
    status: string;
    taskName: string;
    static fromDTO(applicationFormDto: UpdateApplicationFormDto): ApplicationForm;
}
export declare class CreateApplicationFormDto {
    title: string;
    formUrl: string;
    status: string;
    taskName: string;
    static fromDTO(applicationFormDto: CreateApplicationFormDto): ApplicationForm;
}
