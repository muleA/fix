import { Repository } from 'typeorm';
import { Tag } from '../../domain/tags/tag';
import { ITagRepository } from '../../domain/tags/tag.repository.interface';
import { TagEntity } from './tag.entity';
export declare class TagRepository extends Repository<TagEntity> implements ITagRepository {
    constructor();
    updateTag(id: string, tag: Tag): Promise<void>;
    insertTag(tag: Tag): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findById(id: string): Promise<Tag>;
    deleteById(id: string): Promise<void>;
    private toTag;
    private toTagEntity;
}
