import { Language } from '../../domain/services/Language';
export declare class LanguagePresenter {
    id: string;
    serviceId: string;
    name: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(language: Language);
}
