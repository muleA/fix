import { Tag } from '../../domain/Tags/tag';
export declare class UpdateTagDto {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    static fromDTO(tagDto: UpdateTagDto): Tag;
}
export declare class CreateTagDto {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    static fromDTO(tagDto: CreateTagDto): Tag;
}
