import { Tag } from './tag';
export interface ITagRepository {
    insertTag(tag: Tag): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findById(id: string): Promise<Tag>;
    updateTag(id: string, tag: Tag): Promise<void>;
    deleteById(id: string): Promise<void>;
}
