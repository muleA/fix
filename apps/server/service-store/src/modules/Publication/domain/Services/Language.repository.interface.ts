import { Language } from './language';
export interface ILanguageRepository {
  insertLanguage(language: Language): Promise<Language>;
  findAll(): Promise<Language[]>;
  findById(id: string): Promise<Language>; 
  updateLanguage(id: string,language: Language): Promise<void>;
  deleteById(id: string): Promise<void>;

}