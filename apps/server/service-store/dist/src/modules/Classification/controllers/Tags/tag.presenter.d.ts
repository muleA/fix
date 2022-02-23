import { Tag } from '../../domain/Tags/tag';
export declare class TagPresenter {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(tag: Tag);
}
