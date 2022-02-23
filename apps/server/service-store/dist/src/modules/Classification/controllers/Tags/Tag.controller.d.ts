import { TagPresenter } from './tag.presenter';
import { CreateTagDto, UpdateTagDto } from '../tags/tag.dto';
import { TagUseCases } from '../../usecases/tag.usecases';
export declare class TagsController {
    private useCase;
    constructor(useCase: TagUseCases);
    getTag(id: string): Promise<TagPresenter>;
    getTags(): Promise<TagPresenter[]>;
    updateTag(updateTagDto: UpdateTagDto): Promise<string>;
    deleteTag(id: string): Promise<string>;
    createTag(createTagDto: CreateTagDto): Promise<TagPresenter>;
}
