import { Media } from '../../domain/services/Media';
export declare class MediaPresenter {
    id: string;
    url: string;
    caption: string;
    type: string;
    serviceId: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(media: Media);
}
