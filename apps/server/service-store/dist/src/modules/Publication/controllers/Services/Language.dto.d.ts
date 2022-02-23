import { Language } from '../../domain/services/Language';
export declare class UpdateLanguageDto {
    id: string;
    serviceId: string;
    name: string;
    code: string;
    static fromDTO(languageDto: UpdateLanguageDto): Language;
}
export declare class CreateLanguageDto {
    id: string;
    serviceId: string;
    name: string;
    code: string;
    static fromDTO(languageDto: CreateLanguageDto): Language;
}
