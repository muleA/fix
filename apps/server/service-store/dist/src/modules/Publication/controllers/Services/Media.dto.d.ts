import { Media } from '../../domain/services/Media';
export declare class UpdateMediaDto {
    id: string;
    url: string;
    caption: string;
    type: string;
    serviceId: string;
    static fromDTO(mediaDto: UpdateMediaDto): Media;
}
export declare class CreateMediaDto {
    id: string;
    url: string;
    caption: string;
    type: string;
    serviceId: string;
    static fromDTO(mediaDto: CreateMediaDto): Media;
}
