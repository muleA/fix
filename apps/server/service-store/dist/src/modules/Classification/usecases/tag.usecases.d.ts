import { Tag } from '../domain/tags/tag';
import { ITagRepository } from '../domain/tags/tag.repository.interface';
import { CreateTagDto, UpdateTagDto } from '../controllers/tags/tag.dto';
export declare class TagUseCases {
    private tagRepository;
    private tagdomain;
    private readonly logger;
    constructor(tagRepository: ITagRepository);
    createTag(tagDto: CreateTagDto): Promise<Tag>;
    deleteTag(id: string): Promise<void>;
    getTag(id: string): Promise<Tag>;
    fetTags(): Promise<Tag[]>;
    updateTag(tagDto: UpdateTagDto): Promise<void>;
}
