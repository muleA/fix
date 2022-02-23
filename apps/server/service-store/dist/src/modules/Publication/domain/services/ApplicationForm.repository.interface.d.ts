import { ApplicationForm } from './applicationForm';
export interface IApplicationFormRepository {
    insertApplicationForm(applicationForm: ApplicationForm): Promise<ApplicationForm>;
    findAll(): Promise<ApplicationForm[]>;
    findById(id: string): Promise<ApplicationForm>;
    updateApplicationForm(id: string, applicationForm: ApplicationForm): Promise<void>;
    deleteById(id: string): Promise<void>;
}
